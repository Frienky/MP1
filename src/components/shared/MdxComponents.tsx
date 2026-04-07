import { type MDXComponents } from 'mdx/types'
import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { slugify } from '@/lib/utils'
import { ResponsiveTable } from '@/components/shared/ResponsiveTable'

function getTextContent(node: ReactNode): string {
  if (!node) return ''
  if (typeof node === 'string') return node
  if (typeof node === 'number') return String(node)
  if (Array.isArray(node)) return node.map(getTextContent).join('')
  if (typeof node === 'object' && node !== null && 'props' in (node as any)) {
    return getTextContent((node as any).props?.children)
  }
  return ''
}

const CustomLink = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const href = props.href
  if (href?.startsWith('/')) {
    return (
      <Link
        href={href}
        {...props}
        className="font-semibold text-primary underline decoration-1 underline-offset-2 hover:decoration-2"
      />
    )
  }
  if (href?.startsWith('#')) {
    return (
      <a
        {...props}
        className="font-semibold text-primary underline decoration-1 underline-offset-2 hover:decoration-2"
      />
    )
  }
  return (
    <a
      target="_blank"
      rel="noopener noreferrer nofollow"
      {...props}
      className="font-semibold text-primary underline decoration-1 underline-offset-2 hover:decoration-2"
    />
  )
}

export const mdxComponents: MDXComponents = {
  Image: (props: ImageProps) => (
    <Image {...props} className="my-6 rounded-3xl" />
  ),
  a: CustomLink,
  h1: ({ children, ...props }: any) => (
    <h1
      className="mt-8 mb-4 text-3xl font-bold tracking-tight sm:text-4xl"
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: any) => {
    const id = slugify(getTextContent(children))
    return (
      <h2
        id={id}
        className="mt-8 mb-3 text-2xl font-bold tracking-tight border-b border-border pb-2"
        {...props}
      >
        {children}
      </h2>
    )
  },
  h3: ({ children, ...props }: any) => {
    const id = slugify(getTextContent(children))
    return (
      <h3
        id={id}
        className="mt-6 mb-2 text-xl font-semibold tracking-tight"
        {...props}
      >
        {children}
      </h3>
    )
  },
  h4: ({ children, ...props }: any) => {
    const id = slugify(getTextContent(children))
    return (
      <h4
        id={id}
        className="mt-5 mb-1 text-base font-semibold tracking-tight"
        {...props}
      >
        {children}
      </h4>
    )
  },
  p: (props: any) => <p className="my-4 text-base leading-[1.65]" {...props} />,
  ul: (props: any) => (
    <ul className="my-3 list-disc pl-5 text-base" {...props} />
  ),
  ol: (props: any) => (
    <ol className="my-3 list-decimal pl-5 text-base" {...props} />
  ),
  li: (props: any) => <li className="my-1 leading-[1.65]" {...props} />,
  blockquote: (props: any) => (
    <blockquote
      className="my-4 border-l-4 border-zinc-300 pl-4 dark:border-zinc-700"
      {...props}
    />
  ),
  table: (props: any) => <ResponsiveTable {...props} />,
  td: (props: any) => <td {...props} />,
  code: (props: any) => (
    <code className="rounded px-[0.28em] py-[0.12em] text-[0.9em]" {...props} />
  ),
  pre: (props: any) => (
    <pre
      className="my-4 overflow-x-auto rounded-2xl bg-muted p-4 text-sm tracking-tight text-muted-foreground"
      {...props}
    />
  ),
}
