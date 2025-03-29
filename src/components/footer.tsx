import { ContainerInner, ContainerOuter } from '@/components/container'
import { NAVIGATION } from '@/constants/navigation'
import { NavLink } from '@/components/nav-link'

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                {NAVIGATION.map(({ name, href }) => (
                  <NavLink key={name} href={href}>
                    {name}
                  </NavLink>
                ))}
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                {new Date().getFullYear()}. Con pasión, Alvaro Llorente
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
