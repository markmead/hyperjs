'use client'

import Link from 'next/link'

import { useParams } from 'next/navigation'

import { useState, useEffect } from 'react'

import Icon from '@component/Icon'

export default function Sidebar({ navItems, children }) {
  const [showMenu, setShowMenu] = useState(false)
  const [showSide, setShowSide] = useState(true)

  const { slug: urlSlug } = useParams()

  const sidebarItems = Object.entries(navItems)

  useEffect(() => setShowMenu(false), [urlSlug])

  return (
    <>
      <div className="pt-16">
        {showMenu && (
          <div
            className="relative z-50 lg:hidden"
            role="dialog"
            aria-modal="true"
          >
            <div className="fixed inset-0 bg-gray-900/80"></div>

            <div className="fixed inset-0 flex">
              <div className="relative mr-16 flex w-full max-w-xs flex-1">
                <div className="absolute left-full top-0 flex w-16 justify-center pt-4">
                  <button
                    className="-m-2.5 p-2.5"
                    onClick={() => setShowMenu(false)}
                  >
                    <span className="sr-only">Close sidebar</span>

                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <div className="overflow-y-auto border-r border-gray-200 bg-white grow flex flex-col pt-16">
                  <Nav items={sidebarItems} slug={urlSlug} />
                </div>
              </div>
            </div>
          </div>
        )}

        {showSide && (
          <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
            <div className="overflow-y-auto border-r border-gray-200 bg-white grow flex flex-col">
              <Header />

              <Nav items={sidebarItems} slug={urlSlug} />
            </div>
          </div>
        )}

        <main className={showSide && 'lg:pl-72'}>
          <header
            className={`h-16 px-6 bg-white border-b border-gray-200 flex items-center justify-between fixed top-0 z-50 right-0 ${
              showSide ? 'lg:w-[calc(100%_-_288px)] w-full' : 'w-full'
            }`}
          >
            <div className="flex items-center gap-2 sm:gap-4">
              <button
                className="p-1.5 text-gray-700 hidden lg:block border border-gray-200 rounded"
                onClick={() => setShowSide(!showSide)}
              >
                <span className="sr-only">Open sidebar</span>

                <Icon type="Menu" classes="w-5 h-5" />
              </button>

              <button
                className="p-1.5 text-gray-700 block lg:hidden border border-gray-200 rounded"
                onClick={() => setShowMenu(!showMenu)}
              >
                <span className="sr-only">Open menu</span>

                <Icon type="Menu" classes="w-5 h-5" />
              </button>

              <Link href="/" as="/" className="block lg:hidden">
                <div className="inline-flex gap-1.5 text-sm">
                  <span className="font-medium text-gray-900">HyperJS</span>

                  <span aria-hidden="true" role="img">
                    🚀
                  </span>
                </div>
              </Link>
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
              <a
                href="https://github.com/sponsors/markmead"
                rel="noreferrer"
                target="_blank"
                className="px-3 py-1.5 text-sm transition font-medium text-gray-900 border bg-white border-gray-200 rounded"
              >
                Sponsor
              </a>

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
            </div>
          </header>

          <div className="px-4 sm:px-6 lg:px-8 py-10">
            {children}

            <Footer />
          </div>
        </main>
      </div>
    </>
  )
}

function Header() {
  return (
    <div className="h-16 flex items-center px-6 border-b border-gray-100">
      <Link href="/" as="/">
        <div className="inline-flex gap-1.5 text-sm">
          <span className="font-medium text-gray-900">HyperJS</span>

          <span aria-hidden="true" role="img">
            🚀
          </span>
        </div>
      </Link>
    </div>
  )
}

function Footer() {
  return (
    <div className="pt-10 border-t border-gray-200 mt-10">
      <p className="mt-4 text-sm text-gray-700 lg:mt-0">
        Created by{' '}
        <a
          href="https://github.com/markmead"
          rel="noreferrer"
          target="_blank"
          className="inline-block font-medium text-gray-700 hover:text-gray-900"
        >
          Mark Mead
        </a>
        .
      </p>
    </div>
  )
}

function Nav({ items, slug }) {
  return (
    <nav className="p-6 grow">
      <ul className="space-y-3">
        {items.map(([group, items]) => (
          <NavGroup key={group} group={group} items={items} slug={slug} />
        ))}
      </ul>
    </nav>
  )
}

function NavGroup({ group, items, slug: urlSlug }) {
  const isOpen = items.some(({ slug }) => slug === urlSlug)

  return (
    <li key={group}>
      <details className="group" open={isOpen}>
        <summary className="flex items-center justify-between cursor-pointer">
          <span className="inline-flex items-center gap-2">
            <Icon type={group} />

            <span className="text-gray-900 font-medium text-sm hover:text-gray-700 transition">
              {group}
            </span>
          </span>

          <span className="w-4 h-4 group-open:-rotate-180">
            <Icon type="Chevron" />
          </span>
        </summary>

        <ul
          role="list"
          className="mt-2 space-y-2 pl-4 ml-2 border-l border-gray-100"
        >
          {items.map(({ title, slug }) => {
            const isActive = slug === urlSlug

            return (
              <li key={slug}>
                <Link href="/examples/[slug]" as={`/examples/${slug}`} passHref>
                  <span
                    className={`text-xs/relaxed block font-medium0 transition
                      ${
                        isActive
                          ? 'text-indigo-600'
                          : 'text-gray-700 hover:text-indigo-600'
                      }
                    `}
                  >
                    {title}
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </details>
    </li>
  )
}
