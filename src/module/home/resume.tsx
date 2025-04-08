'use client'
import { ArrowDownIcon } from '@/components/icons/arrow-down'

import { Button } from '@/components/button'
import Image, { ImageProps } from 'next/image'
import logoIPGlobal from '@/assets/images/logos/ipglobal.jpeg'
import logoAedasHomes from '@/assets/images/logos/aedas.svg'
import logoMenuvision from '@/assets/images/logos/menuvision.png'
import logoLisDataSolutions from '@/assets/images/logos/lis.svg'
import { BriefcaseIcon } from '@/components/icons/briefcase'
import { downloadPDF } from '@/utils/download'

interface Role {
  company: string
  title: string
  logo: ImageProps['src']
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
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
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
      </div>
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
      company: 'IPGlobal',
      title: 'Frontend Developer',
      logo: logoIPGlobal,
      start: '2024',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Menuvision',
      title: 'Fundador, Frontend Developer, UI/UX Designer',
      logo: logoMenuvision,
      start: '2024',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Aedas Homes',
      title: 'Frontend Developer',
      logo: logoAedasHomes,
      start: '2023',
      end: '2024',
    },
    {
      company: 'Lis data solutions',
      title: 'Frontend Developer',
      logo: logoLisDataSolutions,
      start: '2021',
      end: '2023',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Experiencia</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Button
        onClick={() => downloadPDF('/cv.pdf')}
        variant="secondary"
        className="group mt-6 w-full cursor-pointer"
      >
        Descargar CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}
