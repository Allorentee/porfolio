'use client'
import { ArrowDownIcon } from '@/components/icons/arrow-down'

import { Button } from '@/components/button'
import Image, { ImageProps } from 'next/image'
import logoIPGlobal from '@/assets/images/logos/ipglobal.png'
import logoAedasHomes from '@/assets/images/logos/aedas.png'
import logoMenuvision from '@/assets/images/logos/menuvision.jpg'
import logoLisDataSolutions from '@/assets/images/logos/lis.png'
import { BriefcaseIcon } from '@/components/icons/briefcase'
import { downloadPDF } from '@/utils/download'

interface Role {
  company: string
  title: string
  logo: ImageProps['src']
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
  bulletPoints: string[]
  images?: { src: ImageProps['src']; alt: string }[]
}

function Role({ role }: { role: Role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <Image
        src={role.logo}
        alt=""
        className="h-10 w-10 rounded-full object-cover"
        unoptimized
      />
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Empresa</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Rol</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Fecha</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} hasta ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>
          <span aria-hidden="true">—</span>
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

export function Resume() {
  const resume: Array<Role> = [
    {
      company: 'Menuvision',
      title: 'Fundador, Frontend Developer, UI/UX Designer',
      logo: logoMenuvision,
      start: '2024',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
      bulletPoints: [
        'Montamos la aplicación en un servidor propio, añadiendo un flujo de CI/CD y Kubernetes.',
        'He realizado el diseño de la aplicación y la interfaz de usuario. con Figma. e implementado el diseño en la aplicación.',
        'Desarrollo de una aplicación web para uso exclusivo movil enfrentándome a la compatibilidad entre diversos navegadores y sistemas operativos.',
        'Desarrollo de un backoffice de gestión para el restaurante de alto rendimiento capaz de actualizar cada producto de la aplicación en tiempo real.',
        'Landing page estática desarrollada con astro para un mejor posicionamiento SEO y rendimiento.',
      ],
    },
    {
      company: 'IPGlobal',
      title: 'Frontend Developer',
      logo: logoIPGlobal,
      start: '2024',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
      bulletPoints: [
        'Optimizaciones de aplicaciones trabajadas bajando un 40% el bundle de los proyectos y aumentando el rendimiento en producción.',
        'Migración completa de una aplicación desarrollada en webpack a vite y actualización de todo el paquete de dependencias mejorando la experiencia de desarrollo para el resto del equipo.',
        'Aplicacíon de un patrón de diseño cacheando modulos para evitar re-renderizados innecesarios y aumentar el rendimiento de la aplicación.',
        'Implementación parcial del flujo de un carrito de compra.',
      ],
    },

    {
      company: 'Aedas Homes',
      title: 'Frontend Developer',
      logo: logoAedasHomes,
      start: '2023',
      end: '2024',
      bulletPoints: [
        'Desarrollos para multiples proyectos de la empresa de diversos ambitos.',
        'Implementación de websocket para la comunicación entre el cliente y el servidor.',
        'Implementación de organigramas en una de las aplicaciones.',
        'Uso de la librería mapbox para la visualización de mapas.',
        'Implementación parcial de microfrontends para la autorización de usuarios.',
      ],
    },
    {
      company: 'Lis data solutions',
      title: 'Frontend Developer',
      logo: logoLisDataSolutions,
      start: '2021',
      end: '2023',
      bulletPoints: [
        'Implementación de diseño para una aplicación web, chatbot con IA.',
        'Optimización y actualizacion de codigo de aplicaciones web antiguas.',
      ],
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Experiencia</span>
      </h2>
      <ol className="mt-6 space-y-6">
        {resume.map((role, roleIndex) => (
          <div key={roleIndex}>
            <Role key={roleIndex} role={role} />
            <ul className="mt-2 flex flex-col gap-2">
              {role.bulletPoints.map((bulletPoint, bulletPointIndex) => (
                <li
                  className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-200"
                  key={bulletPointIndex}
                >
                  - {bulletPoint}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </ol>
      <Button
        onClick={() => downloadPDF('/cv.pdf')}
        variant="primary"
        className="group mt-6 w-full cursor-pointer"
      >
        Descargar CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}
