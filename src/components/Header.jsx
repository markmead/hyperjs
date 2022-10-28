import Link from 'next/link'

import IconGithub from '@/components/IconGithub'
import IconTwitter from '@/components/IconTwitter'

export default function Header() {
  return (
    <header className="border-b bg-slate-900 border-slate-800">
      <div className="flex items-center justify-between h-16 max-w-screen-xl px-4 mx-auto">
        <Link href="/">
          <a className="inline-flex items-center gap-2 text-lg font-bold">
            <span className="text-white">HyperJS</span>

            <span aria-hidden="true" role="img">
              🛵
            </span>
          </a>
        </Link>

        <div className="flex items-center gap-4">
          <a
            href="https://twitter.com/itsmarkmead"
            target="_blank"
            rel="noreferrer"
            className="text-white transition hover:text-white/75"
          >
            <span className="sr-only">Twitter</span>

            <IconTwitter className="w-6 h-6" />
          </a>

          <a
            href="https://github.com/markmead/hyperjs"
            target="_blank"
            rel="noreferrer"
            className="text-white transition hover:text-white/75"
          >
            <span className="sr-only">GitHub</span>

            <IconGithub className="w-6 h-6" />
          </a>
        </div>
      </div>
    </header>
  )
}
