import { Container } from '@/components/container'
import { GitHubIcon, LinkedInIcon } from '@/components/icons/social-icons'
import { SocialLink } from '@/components/social-link'

import { Resume } from '@/module/home/resume'
import { Photos } from '@/module/home/photos'
import image1 from '@/assets/images/photos/main.jpg'
import image2 from '@/assets/images/photos/hans.jpg'
import image3 from '@/assets/images/photos/hymym.jpg'
import image4 from '@/assets/images/photos/image-3.jpg'
import image5 from '@/assets/images/photos/image-4.jpg'
export default async function Home() {
  const photos = [image4, image2, image1, image3, image5]
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Desarrollador de software.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            He creado un saas completo propio, tengo experiencia en
            implemetación de features en base a diseños, optimización y mejoras
            de rendimiento de aplicaciones web y testing.
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
      <Photos photos={photos} />
      <Container className="mt-24 md:mt-28">
        <Resume />
      </Container>
    </>
  )
}
