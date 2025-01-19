import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Gadgets',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Gadgets() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="Here's a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="16” MacBook Pro, Intel Core i9, 32GB RAM (2019)">
            As a long-time Windows user for gaming, video editing, and coding,
            using a MacOS just made sense (except for the gaming part, of course).
          </Tool>
          <Tool title="Ergodox EZ Keyboard">
            Deliciously loud to type on, this was the first keyboard that allowed me
            to type without glueing my eyes to my fingers appropriate position. I am
            still ashamed of my words-per-minute count, but it certainly is a work in
            process!
          </Tool>
          <Tool title="Razer Pro Click Humanscale Wireless Mouse">
            T
          </Tool>
          <Tool title="Soundance Adjustable Laptop Stand">
            S
          </Tool>
          <Tool title="Belkin Wrist Rest for Keyboard and Mousepad">
            I
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="VS Code">
            I
          </Tool>
          <Tool title="Pycharm and PHPStorm">
            I
          </Tool>
          <Tool title="DBeaver">
            G
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
