import type { StaticImageData } from 'next/image'

import finnesy from '@/assets/projects/finnesy.jpg'
import intellisenseForms from '@/assets/projects/intellisense-forms.jpg'
import menuvision from '@/assets/projects/menuvision.jpg'

export type Experience = {
  id: string
  company: string
  role: string
  period: string
  periodLong: string
  summary: string
  highlights: string[]
  stack: string[]
}

export type Project = {
  id: string
  name: string
  description: string
  summary: string
  highlights: string[]
  href: string
  image: StaticImageData
}

export const profile = {
  name: 'Alvaro Llorente',
  headline: 'Desarrollador full-stack en ipglobal · Segovia',
  intro:
    'Construyo producto de principio a fin, de la autenticación al último píxel.',
}

export const experiences: Experience[] = [
  {
    id: 'ipglobal',
    company: 'ipglobal',
    role: 'Desarrollador full-stack',
    period: '2024–',
    periodLong: '2024 – hoy',
    summary:
      'Trabajo en Neleva, una plataforma sanitaria, cubriendo desde el acceso de pacientes y personal clínico hasta las herramientas que se usan en consulta.',
    highlights: [
      'Autenticación con Keycloak: passkeys para pacientes, contraseña y OTP para el personal clínico.',
      'Backoffice y herramientas de consulta clínica con React y Formik.',
      'Guía de usuario y plantillas de email para los flujos de acceso.',
    ],
    stack: ['NestJS', 'React', 'TypeScript', 'Keycloak', 'PostgreSQL'],
  },
  {
    id: 'verifactu',
    company: 'Facturación VeriFactu',
    role: 'Producto propio',
    period: '2025–',
    periodLong: '2025 – hoy',
    summary:
      'Una app de facturación para autónomos adaptada a VeriFactu, diseñada y desarrollada por mi cuenta de principio a fin.',
    highlights: [
      'Modelo de datos completo: clientes, series, documentos, vencimientos y pagos.',
      'Facturas rectificativas (R1–R5) y encadenado de hashes.',
      'Envío de registros a la AEAT por SOAP.',
    ],
    stack: ['NestJS', 'Prisma', 'Supabase', 'SOAP'],
  },
  {
    id: 'aedas',
    company: 'Aedas Homes',
    role: 'Frontend',
    period: '2023–2024',
    periodLong: '2023 – 2024',
    summary:
      'Desarrollo de aplicaciones internas para distintas áreas de la compañía, de la comunicación en tiempo real a la visualización de mapas.',
    highlights: [
      'Comunicación cliente-servidor en tiempo real con WebSockets.',
      'Organigramas interactivos y mapas con Mapbox.',
      'Implementación parcial de microfrontends para la autorización de usuarios.',
    ],
    stack: ['React', 'TypeScript', 'WebSockets', 'Mapbox'],
  },
]

export const projects: Project[] = [
  {
    id: 'intellisense-forms',
    name: 'Intellisense Forms',
    description: 'Extensión de Chrome',
    summary:
      'Una extensión de Chrome que detecta cada campo de un formulario y lo rellena con datos realistas en español o inglés. Pensada para QA, desarrollo y demos que no parezcan de prueba.',
    highlights: [
      'Reconoce campos nativos, ARIA, shadow DOM, iframes y selects a medida.',
      'Datos con formato real: DNI, NIE, IBAN, teléfonos, direcciones…',
      'Rellenado con atajo de teclado y plantillas reutilizables, sin cuentas ni servidores.',
    ],
    href: 'https://intellisenseforms.dev',
    image: intellisenseForms,
  },
  {
    id: 'finnesy',
    name: 'Finnesy',
    description: 'Finanzas personales',
    summary:
      'Una app web de finanzas personales que reúne cuentas, movimientos y presupuestos en un único panel, para ver el panorama completo sin hojas de cálculo.',
    highlights: [
      'Sincronización con bancos europeos vía PSD2.',
      'Categorización automática de los movimientos.',
      'Presupuestos por categoría que avisan antes de pasarte.',
    ],
    href: 'https://finnesy.com',
    image: finnesy,
  },
  {
    id: 'menuvision',
    name: 'MenuVision',
    description: 'Carta digital para restaurantes',
    summary:
      'Una carta digital QR para restaurantes, con filtros de alérgenos y preferencias, y un panel para mantenerla al día en tiempo real.',
    highlights: [
      'Diseño de producto e interfaz en Figma, implementado de principio a fin.',
      'Backoffice para cambiar precios, alérgenos y disponibilidad al instante.',
      'Landing estática con Astro para SEO y rendimiento.',
    ],
    href: 'https://menuvision.es',
    image: menuvision,
  },
]

export const contact = [
  { label: 'Email', href: 'mailto:allorentee@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/Allorentee' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/alvaro-llorente-0a2778150',
  },
]
