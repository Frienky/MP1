import { Container } from '@/components/layout/Container'
import { name, introduction } from '@/config/infoConfig'
import { getAllBlogs, type BlogType } from '@/lib/blogs'
import { blogHeadLine } from '@/config/infoConfig'
import { formatDate } from '@/lib/formatDate'
import Link from 'next/link'

export default async function Home() {
  let blogList = await getAllBlogs()
  let featured = blogList[0]
  let rest = blogList.slice(1)

  return (
    <>
      <Container className="mt-16 sm:mt-20">
        {/* Minimal header line */}
        <p className="text-base text-muted-foreground">
          <span className="font-medium text-foreground">{name}</span>
          <span className="mx-2">·</span>
          <span>PKM &amp; Education</span>
        </p>

        {/* Featured article card */}
        {featured && (
          <Link href={`/blogs/${featured.slug}`} className="block group mt-12">
            <div className="rounded-xl border border-border p-6 transition-colors group-hover:border-muted-foreground/30">
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl text-foreground group-hover:text-primary transition-colors">
                {featured.title}
              </h2>
              <p className="mt-3 text-base text-muted-foreground line-clamp-2">
                {featured.description}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <time className="text-sm text-muted-foreground/60">
                  {formatDate(featured.date)}
                </time>
                <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                  Read →
                </span>
              </div>
            </div>
          </Link>
        )}

        {/* Rest of articles as compact list */}
        {rest.length > 0 && (
          <div className="mt-10">
            {rest.map((blog: BlogType) => (
              <Link
                key={blog.slug}
                href={`/blogs/${blog.slug}`}
                className="group flex items-baseline justify-between py-3 border-b border-muted last:border-b-0"
              >
                <h3 className="text-base font-medium text-foreground group-hover:text-primary transition-colors pr-4">
                  {blog.title}
                </h3>
                <time className="text-sm text-muted-foreground/60 whitespace-nowrap flex-shrink-0">
                  {formatDate(blog.date)}
                </time>
              </Link>
            ))}
          </div>
        )}

        {/* About link */}
        <div className="mt-12 mb-16">
          <Link
            href="/about"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            About me →
          </Link>
        </div>
      </Container>
    </>
  )
}

