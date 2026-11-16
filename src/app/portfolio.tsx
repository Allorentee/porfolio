'use client'

import Image from 'next/image'
import { useEffect, useRef, useState, type CSSProperties } from 'react'

import {
  contact,
  experiences,
  profile,
  projects,
  type Experience,
  type Project,
} from '@/data/portfolio'

const order = (i: number) => ({ '--i': i }) as CSSProperties

// Keep in sync with the breakpoint in globals.css.
const MOBILE_QUERY = '(max-width: 775.98px)'

function Chevron() {
  return (
    <svg
      aria-hidden="true"
      className="chevron"
      width="10"
      height="10"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 3.5L10.5 8L6 12.5" />
    </svg>
  )
}

function ChevronLeft() {
  return (
    <svg
      aria-hidden="true"
      width="10"
      height="10"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 3.5L5.5 8L10 12.5" />
    </svg>
  )
}

function ArrowUpRight() {
  return (
    <svg
      aria-hidden="true"
      className="arrow"
      width="10"
      height="10"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12L12 4" />
      <path d="M5 4h7v7" />
    </svg>
  )
}

function Highlights({ items, i }: { items: string[]; i: number }) {
  return (
    <section aria-label="A destacar" className="block" style={order(i)}>
      <h3 className="label">A destacar</h3>
      <ul className="bullets">
        {items.map((item) => (
          <li key={item}>
            <span aria-hidden="true" className="muted">
              –
            </span>
            <span className="pretty">{item}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

function ExperienceDetail({ experience }: { experience: Experience }) {
  return (
    <div className="detail">
      <div className="detail-head" style={order(0)}>
        <h2 className="title">{experience.company}</h2>
        <p className="muted">
          {experience.role} · {experience.periodLong}
        </p>
      </div>
      <p className="pretty" style={order(1)}>
        {experience.summary}
      </p>
      {experience.highlights && (
        <Highlights items={experience.highlights} i={2} />
      )}
    </div>
  )
}

function ProjectDetail({ project }: { project: Project }) {
  const host = new URL(project.href).hostname
  return (
    <div className="detail">
      <div className="detail-head" style={order(0)}>
        <h2 className="title">{project.name}</h2>
        <p className="muted">{project.description}</p>
      </div>
      <p className="pretty" style={order(1)}>
        {project.summary}
      </p>
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="shot"
        style={order(2)}
        aria-label={`Abrir ${host}`}
      >
        <Image
          src={project.image}
          alt={`Captura de ${project.name}`}
          sizes="280px"
          placeholder="blur"
        />
      </a>
      <Highlights items={project.highlights} i={3} />
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="visit"
        style={order(4)}
      >
        Visitar {host}
        <ArrowUpRight />
      </a>
    </div>
  )
}

export function Portfolio() {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  // Last opened item, kept mounted while the panel fades out on close.
  const [shownId, setShownId] = useState<string | null>(null)
  // True when the panel opens from the centred state, so its content waits for the column to slide.
  const [fromClosed, setFromClosed] = useState(false)
  // Bumped on every open so reopening the same item still remounts the detail
  // and replays its delayed entry, instead of showing it under the sliding column.
  const [openCount, setOpenCount] = useState(0)
  const shownExperience = experiences.find((e) => e.id === shownId)
  const shownProject = projects.find((p) => p.id === shownId)
  const open = selectedId !== null

  const asideRef = useRef<HTMLElement>(null)
  const backRef = useRef<HTMLButtonElement>(null)
  // Row that opened the detail, to hand focus back to it when the mobile sheet closes.
  const triggerRef = useRef<HTMLButtonElement | null>(null)

  function close() {
    setSelectedId(null)
    if (asideRef.current?.contains(document.activeElement)) {
      triggerRef.current?.focus({ preventScroll: true })
    }
  }

  function toggle(id: string, trigger: HTMLButtonElement) {
    if (selectedId === id) {
      close()
      return
    }
    triggerRef.current = trigger
    if (selectedId === null) setOpenCount((n) => n + 1)
    setFromClosed(selectedId === null)
    setSelectedId(id)
    setShownId(id)
  }

  // On mobile the detail covers the screen: start it at the top and move focus into it.
  useEffect(() => {
    if (!open || !window.matchMedia(MOBILE_QUERY).matches) return
    if (asideRef.current) asideRef.current.scrollTop = 0
    backRef.current?.focus({ preventScroll: true })
  }, [open, openCount])

  useEffect(() => {
    if (!open) return
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  })

  return (
    <div className="page">
      <main className="layout" data-open={open}>
        <div className="column">
          <header className="intro reveal" style={order(0)}>
            <div className="intro-head">
              <h1 className="name">{profile.name}</h1>
              <p className="muted">{profile.headline}</p>
            </div>
            <p className="pretty intro-text">{profile.intro}</p>
          </header>

          <section
            aria-label="Experiencia más relevante"
            className="group reveal"
            style={order(1)}
          >
            <h2 className="label">Experiencia más relevante</h2>
            <div className="rows">
              {experiences.map((experience) => {
                const active = experience.id === selectedId
                return (
                  <button
                    key={experience.id}
                    type="button"
                    className="row"
                    aria-pressed={active}
                    aria-controls="detail"
                    onClick={(e) => toggle(experience.id, e.currentTarget)}
                  >
                    <span className="row-main">
                      <span className="row-text">
                        <span className="strong">{experience.company}</span>{' '}
                        <span className="muted">{experience.role}</span>
                      </span>
                    </span>
                    <span className="row-end">
                      <span className="muted nums">{experience.period}</span>
                      <Chevron />
                    </span>
                  </button>
                )
              })}
            </div>
          </section>

          <section
            aria-label="Proyectos"
            className="group reveal"
            style={order(2)}
          >
            <h2 className="label">Proyectos</h2>
            <div className="rows">
              {projects.map((project) => {
                const active = project.id === selectedId
                return (
                  <button
                    key={project.id}
                    type="button"
                    className="row"
                    aria-pressed={active}
                    aria-controls="detail"
                    onClick={(e) => toggle(project.id, e.currentTarget)}
                  >
                    <span className="row-main">
                      <span className="row-text">
                        <span className="strong">{project.name}</span>{' '}
                        <span className="muted">{project.description}</span>
                      </span>
                    </span>
                    <span className="row-end">
                      <Chevron />
                    </span>
                  </button>
                )
              })}
            </div>
          </section>

          <section
            aria-label="Contacto"
            className="contact reveal"
            style={order(3)}
          >
            <h2 className="label">Contacto</h2>
            <nav aria-label="Enlaces de contacto" className="contact-links">
              {contact.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  {...(link.href.startsWith('http')
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </section>
        </div>

        <aside
          ref={asideRef}
          id="detail"
          aria-label="Detalle"
          aria-live="polite"
          className="aside"
          data-from-closed={fromClosed}
          inert={!open}
        >
          <button
            ref={backRef}
            type="button"
            className="back"
            onClick={close}
          >
            <ChevronLeft />
            Volver
          </button>
          {/* `key` remounts the detail on each selection so its entry animation replays. */}
          {shownExperience && (
            <ExperienceDetail
              key={`${shownExperience.id}-${openCount}`}
              experience={shownExperience}
            />
          )}
          {shownProject && (
            <ProjectDetail
              key={`${shownProject.id}-${openCount}`}
              project={shownProject}
            />
          )}
        </aside>
      </main>
    </div>
  )
}
