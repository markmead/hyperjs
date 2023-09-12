'use client'

import Link from 'next/link'

import { useState } from 'react'

export default function Sidebar({ navItems, children }) {
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <>
      <div>
        {showSidebar && (
          <div
            className="relative z-50 lg:hidden"
            role="dialog"
            aria-modal="true"
          >
            <div className="fixed inset-0 bg-gray-900/80"></div>

            <div className="fixed inset-0 flex">
              <div className="relative mr-16 flex w-full max-w-xs flex-1">
                <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                  <button
                    className="-m-2.5 p-2.5"
                    onClick={() => setShowSidebar(false)}
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

                <div className="overflow-y-auto border-r border-gray-200 bg-white grow flex flex-col">
                  <Header />

                  <Nav items={Object.entries(navItems)} />

                  <Footer />
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          <div className="overflow-y-auto border-r border-gray-200 bg-white grow flex flex-col">
            <Header />

            <Nav items={Object.entries(navItems)} />

            <Footer />
          </div>
        </div>

        <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden">
          <button
            className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
            onClick={() => setShowSidebar(true)}
          >
            <span className="sr-only">Open sidebar</span>

            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>

          <div className="flex-1 text-sm font-semibold leading-6 text-gray-900">
            Dashboard
          </div>
        </div>

        <main className="py-10 lg:pl-72">
          <div className="px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </>
  )
}

function Header() {
  return (
    <div className="px-6 py-3 border-b border-gray-100">
      <h2 className="font-bold text-gray-900">HyperJS</h2>

      <p className="text-xs text-gray-700 mt-1.5">
        A collection of Alpine JS examples that you can use in your projects.
      </p>
    </div>
  )
}

function Footer() {
  return (
    <div className="px-6 py-3 border-t border-gray-100">
      <p className="text-xs text-gray-700">Created by Mark Mead.</p>
    </div>
  )
}

function Nav({ items }) {
  return (
    <nav className="p-6 grow">
      <ul className="space-y-3">
        {items.map(([group, items]) => (
          <li key={group}>
            <details className="group">
              <summary className="flex items-center justify-between cursor-pointer">
                <span className="text-gray-900 font-medium text-sm hover:text-gray-700 transition">
                  {group}
                </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 group-open:-rotate-180 transition duration-300"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </summary>

              <ul role="list" className="mt-1.5 space-y-1.5 pl-3">
                {items.map(({ title, slug }) => (
                  <li key={slug}>
                    <Link
                      href="/examples/[slug]"
                      as={`/examples/${slug}`}
                      passHref
                    >
                      <span className="text-xs font-medium text-gray-700 hover:text-indigo-600 transition">
                        {title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          </li>
        ))}
      </ul>
    </nav>
  )
}
