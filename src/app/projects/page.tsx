import { type Metadata } from 'next'
import { SimpleLayout } from '@/components/layout/SimpleLayout'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Projects page',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Projects"
      intro="This is the projects page."
    >
      <p>No projects to display.</p>
    </SimpleLayout>
  )
}
