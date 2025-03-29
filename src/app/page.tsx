import { Container } from '@/components/container'
import { GitHubIcon, LinkedInIcon } from '@/components/icons/social-icons'
import { SocialLink } from '@/components/social-link'

import { getAllArticles } from '@/lib/articles'
import { Article } from '@/components/article'

import { Resume } from '@/module/home/resume'
import { Photos } from '@/module/home/photos'

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Desarrollador de software, creador de una startup y amante de la
            tecnología
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Desarrollador de software con experiencia en diseño, desarrollo y
            optimización de aplicaciones web y móviles. Apasionado por resolver
            problemas complejos con soluciones innovadoras y eficientes.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://github.com/Allorentee"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/alvaro-llorente-0a2778150"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}
