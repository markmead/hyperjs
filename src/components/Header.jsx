import { Bars3Icon } from '@heroicons/react/24/solid'
import { HeartIcon } from '@heroicons/react/24/outline'

import Logo from '@component/Logo'
import Search from '@component/Search'

export default function Header({
  showMenu,
  showSide,
  setShowMenu,
  setShowSide,
  navItems,
}) {
  return (
    <header
      className={`h-16 px-6 bg-white border-b border-gray-200 flex items-center gap-4 fixed top-0 z-50 right-0 ${
        showSide ? 'lg:w-[calc(100%_-_288px)] w-full' : 'w-full'
      }`}
    >
      <div className="flex items-center gap-2 sm:gap-4 flex-1">
        <button
          className="p-1.5 text-gray-700 hidden lg:block border border-gray-200 rounded"
          onClick={() => setShowSide(!showSide)}
        >
          <span className="sr-only">Open sidebar</span>

          <Bars3Icon className="w-5 h-5" />
        </button>

        <button
          className="p-1.5 text-gray-700 block lg:hidden border border-gray-200 rounded"
          onClick={() => setShowMenu(!showMenu)}
        >
          <span className="sr-only">Open menu</span>

          <Bars3Icon className="w-5 h-5" />
        </button>

        <Logo />

        <Search navItems={navItems} />
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <SponsorLink />

        <GithubLink />
      </div>
    </header>
  )
}

function SponsorLink() {
  return (
    <a
      href="https://github.com/sponsors/markmead"
      rel="noreferrer"
      target="_blank"
      className="px-3 py-1.5 inline-flex items-center gap-1.5 transition text-gray-900 border bg-white border-gray-200 rounded"
    >
      <span className="text-sm font-medium">Sponsor</span>

      <HeartIcon className="w-4 h-4" />
    </a>
  )
}

function GithubLink() {
  return (
    <a
      href="https://github.com/markmead/hyperui"
      rel="noreferrer"
      target="_blank"
      className="text-gray-900 hover:opacity-75"
    >
      <span className="sr-only"> GitHub </span>

      <svg
        aria-hidden="true"
        className="h-5 w-5"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          clipRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          fillRule="evenodd"
        ></path>
      </svg>
    </a>
  )
}
