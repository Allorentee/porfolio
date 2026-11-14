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
  highlights?: string[]
  stack?: string[]
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
  headline: 'Ingeniero de IA en Embermind · Segovia',
  intro:
    'Construyo producto de principio a fin, de la autenticación al último píxel.',
}

export const experiences: Experience[] = [
  {
    id: 'embermind',
    company: 'Embermind',
    role: 'Ingeniero de IA',
    period: '2025–',
    periodLong: '2025 – hoy',
    summary:
      'Empresa especializada en productos con IA y en trabajar con IA: automatización de procesos y creación de proyectos.',
  },
  {
    id: 'ipglobal',
    company: 'IP Global',
    role: 'Full-stack',
    period: '2023–2025',
    periodLong: 'mar 2023 – 2025',
    summary:
      'Trabajé en dos grandes proyectos, entre ellos Neleva, una plataforma sanitaria, cubriendo desde el acceso de pacientes y personal clínico hasta las herramientas que se usan en consulta.',
    highlights: [
      'Autenticación con Keycloak: passkeys para pacientes, contraseña y OTP para el personal clínico.',
      'Bundle un 40% más ligero y migración completa de webpack a Vite.',
      'Eventos del servidor en tiempo real con SSE en un flujo pub/sub.',
      'Carrito de compra limitado por sesión, detectando carritos abiertos en otro navegador.',
    ],
    stack: ['NestJS', 'React', 'TypeScript', 'Keycloak', 'PostgreSQL', 'Vite'],
  },
  {
    id: 'lis',
    company: 'Lis Data Solutions',
    role: 'Full-stack',
    period: '2021–2023',
    periodLong: 'jul 2021 – mar 2023',
    summary:
      'Desarrollo y mantenimiento de 12 aplicaciones con React, con metodologías ágiles y trato directo con el cliente.',
    highlights: [
      'Frontal de una aplicación de chat con LLM para empresas.',
      'Sistema de login con Azure.',
      'Refactorización de código heredado, actualización de dependencias y mejoras de rendimiento.',
    ],
    stack: ['React', 'Azure'],
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
      'Un SaaS que cofundé en 2024: cartas QR en vídeo para restaurantes, dinámicas, con filtros de alérgenos y con control total desde un panel.',
    highlights: [
      'Diseño UX/UI en Figma y app web pensada solo para móvil.',
      'Backoffice que actualiza cada producto de la carta en tiempo real.',
      'Servidores propios con CI/CD, nginx y certificados SSL.',
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
