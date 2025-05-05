import clsx from 'clsx'

export function Prose({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div 
      className={clsx(
        className, 
        'prose prose-blueTopaz dark:prose-darkBlueTopaz max-w-none',
        'prose-headings:font-bold prose-headings:tracking-tight',
        'prose-p:text-base prose-p:opacity-80',
        'prose-blockquote:border-l-4 prose-blockquote:border-zinc-300 prose-blockquote:pl-4 prose-blockquote:italic dark:prose-blockquote:border-zinc-700',
        'prose-table:w-full prose-table:table-fixed',
        'prose-th:border-b prose-th:border-zinc-200 prose-th:pb-2 dark:prose-th:border-zinc-700',
        'prose-td:border-b prose-td:border-zinc-100 prose-td:py-2 dark:prose-td:border-zinc-800',
        'prose-hr:my-8 prose-hr:border-zinc-200 dark:prose-hr:border-zinc-700',
        'prose-ul:my-4 prose-ul:pl-6 prose-li:my-2 prose-li:pl-1',
        'prose-ol:my-4 prose-ol:pl-6',
        '[&>ul>li>ul]:pl-6 [&>ul>li>ul>li]:text-zinc-700 dark:[&>ul>li>ul>li]:text-zinc-300',
        '[&>ol>li>ol]:pl-6 [&>ol>li>ol>li]:text-zinc-700 dark:[&>ol>li>ol>li]:text-zinc-300'
      )} 
      {...props} 
    />
  )
}
