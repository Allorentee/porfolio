import { Card } from '@/components/card'
import { Section } from '@/components/section'
import { SimpleLayout } from '@/components/layouts/simple-layout'

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
  title: 'Tecnologías',
  description: 'Tecnologías que utilizo en mis proyectos.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Tecnologías que utilizo en mis proyectos."
      intro="Soy un desarrollador web y apasionado por la tecnología y el diseño. Estas tecnologías son algunas de las principales."
    >
      <div className="space-y-20">
        <ToolsSection title="Stack tecnológico">
          <Tool title="React / NextJs">
            Principalmente utilizo React para aplicaciones web complejas que no
            requieren de posicionamiento SEO y en cuanto a NextJs, lo he
            utilizado en varios proyectos profesionales tanto por
            posicionamiento SEO como para hacer uso de la combinacion de
            renderizados en el servidor y cliente
          </Tool>
          <Tool title="iTerm2">
            I’m honestly not even sure what features I get with this that aren’t
            just part of the macOS Terminal but it’s what I use.
          </Tool>
          <Tool title="TablePlus">
            Great software for working with databases. Has saved me from
            building about a thousand admin interfaces for my various projects
            over the years.
          </Tool>
        </ToolsSection>
        <ToolsSection title="UX/UI">
          <Tool title="Figma">
            La tecnología que mayoritariamente utilizo para crear interfaces de
            usuario es Figma. Lo he usado tanto en mis proyectos personales como
            en mis proyectos profesionales.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
