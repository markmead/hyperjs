import Link from 'next/link'

import Social from '@/components/Social'

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

        <Social />
      </div>
    </header>
  )
}
