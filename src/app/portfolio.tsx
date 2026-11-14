'use client'

import Image from 'next/image'
import { useState, type CSSProperties } from 'react'

import {
  contact,
  experiences,
  profile,
  projects,
  type Experience,
  type Project,
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
      <Highlights items={experience.highlights} i={2} />
      <section aria-label="Stack" className="block" style={order(3)}>
        <h3 className="label">Stack</h3>
        <p>{experience.stack.join(' · ')}</p>
      </section>
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
                    aria-controls="detail"
                    onClick={() => toggle(experience.id)}
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
                    onClick={() => toggle(project.id)}
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
          id="detail"
          aria-label="Detalle"
          aria-live="polite"
          className="aside"
          data-from-closed={fromClosed}
          inert={!open}
        >
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
