import Link from 'next/link'
import SideBar from './SideBar'

export default function Layout({ examples, children }) {
  return (
    <div className="flex">
      <SideBar examples={examples} />

      <main className="flex-1 pl-72">
        <header className="px-8 border-b border-stone-100">
          <div className="flex items-center justify-end gap-4 h-20">
            <a
              className="text-sm text-stone-700 hover:text-stone-800"
              href="https://twitter.com/itsmarkmead"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>

            <a
              className="text-sm text-stone-700 hover:text-stone-800"
              href="https://github.com/markmead/hyperjs"
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </header>

        <div className="p-8">{children}</div>

        <footer className="p-8 border-t border-stone-100">
          <p className="text-xs text-stone-500 max-w-2xl">
            HyperJS is a collection of HTML snippets to showcase of common
            JavaScript functionality, written in Alpine JS. There is an official{' '}
            <a
              className=" text-pink-600 underline inline-block"
              href="https://alpinejs.dev/components"
              target="_blank"
              rel="noopener noreferrer"
            >
              Alpine JS Components
            </a>{' '}
            library that features code examples, documentation and screencasts
            all from the creator of Alpine JS, Caleb Porzio.
          </p>

          <p className="text-xs font-medium text-stone-500 mt-4">
            {new Date().getFullYear()} Mark Mead
          </p>
        </footer>
      </main>
    </div>
  )
}
