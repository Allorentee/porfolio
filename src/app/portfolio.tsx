'use client'

import { useState, type CSSProperties } from 'react'

import {
  contact,
  experiences,
  profile,
  projects,
  type Experience,
} from '@/data/portfolio'

const order = (i: number) => ({ '--i': i }) as CSSProperties

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

function Detail({ experience }: { experience: Experience }) {
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
      <section aria-label="A destacar" className="block" style={order(2)}>
        <h3 className="label">A destacar</h3>
        <ul className="bullets">
          {experience.highlights.map((item) => (
            <li key={item}>
              <span aria-hidden="true" className="muted">
                –
              </span>
              <span className="pretty">{item}</span>
            </li>
          ))}
        </ul>
      </section>
      <section aria-label="Stack" className="block" style={order(3)}>
        <h3 className="label">Stack</h3>
        <p>{experience.stack.join(' · ')}</p>
      </section>
    </div>
  )
}

export function Portfolio() {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  // Last opened experience, kept mounted while the panel fades out on close.
  const [shownId, setShownId] = useState<string | null>(null)
  // True when the panel opens from the centred state, so its content waits for the column to slide.
  const [fromClosed, setFromClosed] = useState(false)
  // Bumped on every open so reopening the same experience still remounts the detail
  // and replays its delayed entry, instead of showing it under the sliding column.
  const [openCount, setOpenCount] = useState(0)
  const shown = experiences.find((e) => e.id === shownId) ?? null
  const open = selectedId !== null

  function toggle(id: string) {
    if (selectedId === id) {
      setSelectedId(null)
      return
    }
    if (selectedId === null) setOpenCount((n) => n + 1)
    setFromClosed(selectedId === null)
    setSelectedId(id)
    setShownId(id)
  }

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
            aria-label="Experiencia"
            className="group reveal"
            style={order(1)}
          >
            <h2 className="label">Experiencia</h2>
            <div className="rows">
              {experiences.map((experience) => {
                const active = experience.id === selectedId
                return (
                  <button
                    key={experience.id}
                    type="button"
                    className="row"
                    aria-pressed={active}
                    aria-controls="experience-detail"
                    onClick={() => toggle(experience.id)}
                  >
                    <span className="row-main">
                      {active && <span aria-hidden="true" className="dot" />}
                      <span>
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
              {projects.map((project) => (
                <a
                  key={project.href}
                  href={project.href}
                  className="row"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="row-main">
                    <span>
                      <span className="strong">{project.name}</span>{' '}
                      <span className="muted">{project.description}</span>
                    </span>
                  </span>
                  <ArrowUpRight />
                </a>
              ))}
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
          id="experience-detail"
          aria-label="Detalle de la experiencia"
          aria-live="polite"
          className="aside"
          data-from-closed={fromClosed}
          inert={!open}
        >
          {/* `key` remounts the detail on each selection so its entry animation replays. */}
          {shown && (
            <Detail key={`${shown.id}-${openCount}`} experience={shown} />
          )}
        </aside>
      </main>
    </div>
  )
}
