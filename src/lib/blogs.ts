import glob from 'fast-glob'
import { promises as fs } from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { slugify } from '@/lib/utils'

export type Heading = {
  level: 2 | 3
  text: string
  id: string
}

export type BlogType = {
  title: string
  description: string
  author: string
  date: string
  slug: string
  readingTime: number
  headings: Heading[]
}

function computeReadingTime(source: string): number {
  const content = source.replace(/^---[\s\S]+?---\n/, '').replace(/```[\s\S]*?```/g, '')
  const chineseChars = (content.match(/[\u4e00-\u9fff]/g) || []).length
  const stripped = content.replace(/[\u4e00-\u9fff]/g, '')
  const englishWords = (stripped.match(/\b[a-zA-Z]+\b/g) || []).length
  return Math.max(1, Math.ceil(chineseChars / 400 + englishWords / 200))
}

function extractHeadings(source: string): Heading[] {
  const headings: Heading[] = []
  for (const match of source.matchAll(/^(#{2,3}) (.+)/gm)) {
    const level = match[1].length as 2 | 3
    if (level !== 2 && level !== 3) continue
    const text = match[2].replace(/[*_`[\]()]/g, '').replace(/\r$/, '').trim()
    if (text) headings.push({ level, text, id: slugify(text) })
  }
  return headings
}

async function importBlog(
  blogFilename: string,
): Promise<BlogType> {
  const source = await fs.readFile(
    path.join(process.cwd(), 'src/content/blog', blogFilename),
    'utf-8'
  )
  
  const { data } = matter(source)
  
  // @ts-expect-error
  return {
    slug: blogFilename.replace(/\.mdx$/, ''),
    ...data,
    readingTime: computeReadingTime(source),
    headings: extractHeadings(source),
  }
}

export async function getAllBlogs() {
  let blogFileNames = await glob('*.mdx', {
    cwd: './src/content/blog',
  })

  let blogs = await Promise.all(blogFileNames.map(importBlog))

  return blogs.sort((a, z) => {
    const aDate = a.date ? +new Date(a.date) : 0;
    const zDate = z.date ? +new Date(z.date) : 0;
    return zDate - aDate;
  })
}

export async function getBlogBySlug(slug: string): Promise<BlogType | null> {
  try {
    // 移除可能存在的 .mdx 扩展名
    const cleanSlug = slug.replace(/\.mdx$/, '')
    return await importBlog(`${cleanSlug}.mdx`)
  } catch (error) {
    console.error(`Failed to load blog with slug: ${slug}`, error)
    return null
  }
}