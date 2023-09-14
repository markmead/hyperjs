import Link from 'next/link'

import {
  ChevronDownIcon,
  BookOpenIcon,
  BellAlertIcon,
  CalendarIcon,
  BarsArrowDownIcon,
  BeakerIcon,
  NewspaperIcon,
  ArrowsUpDownIcon,
  ArchiveBoxIcon,
  QueueListIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline'

import { groupData } from '@data/groups'

import Logo from '@component/Logo'

export default function Sidebar({ showMenu, showSide, navItems, urlSlug }) {
  return (
    <div>
      {showMenu && (
        <div
          className="relative z-50 lg:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-gray-900/50"></div>

          <div className="fixed inset-0 flex">
            <div className="relative flex w-full max-w-xs flex-1">
              <div className="overflow-y-auto border-r border-gray-200 bg-white grow flex flex-col pt-28 sm:pt-16">
                <SidebarNav navItems={navItems} urlSlug={urlSlug} />
              </div>
            </div>
          </div>
        </div>
      )}

      {showSide && (
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          <div className="overflow-y-auto border-r border-gray-200 bg-white grow flex flex-col">
            <div className="h-16 flex items-center px-6 border-b border-gray-200 shrink-0">
              <Logo />
            </div>

            <SidebarNav navItems={navItems} urlSlug={urlSlug} />
          </div>
        </div>
      )}
    </div>
  )
}

function SidebarNav({ navItems, urlSlug }) {
  return (
    <nav className="p-6 grow">
      <ul className="space-y-4">
        {Object.entries(navItems).map((navItem, navIndex) => (
          <NavGroup key={navIndex} navItem={navItem} urlSlug={urlSlug} />
        ))}
      </ul>
    </nav>
  )
}

function NavGroup({ navItem, urlSlug }) {
  const [navGroup, navItems] = navItem

  const { title: groupTitle, icon: groupIcon } =
    groupData.find(({ id: groupId }) => {
      return groupId === navGroup
    }) || {}

  const isOpen = navItems.some(({ slug: itemSlug }) => itemSlug === urlSlug)

  return (
    <li>
      <details className="group" open={isOpen}>
        <summary className="flex items-center justify-between cursor-pointer">
          <span className="inline-flex items-center gap-2">
            <GroupIcon groupIcon={groupIcon} />

            <span className="text-gray-900 font-medium text-sm hover:text-gray-700 transition">
              {groupTitle}
            </span>
          </span>

          <ChevronDownIcon className="w-4 h-4 group-open:-rotate-180" />
        </summary>

        <ul
          role="list"
          className="mt-2 space-y-2 pl-4 ml-2 border-l border-gray-100"
        >
          {navItems.map((navItem) => {
            const { title: itemTitle, slug: itemSlug } = navItem

            const isActive = itemSlug === urlSlug

            return (
              <li key={itemSlug}>
                <Link
                  href="/examples/[slug]"
                  as={`/examples/${itemSlug}`}
                  passHref
                >
                  <span
                    className={`text-xs/relaxed block font-medium transition
                        ${
                          isActive
                            ? 'text-indigo-600'
                            : 'text-gray-700 hover:text-indigo-600'
                        }
                      `}
                  >
                    {itemTitle}
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

function GroupIcon({ groupIcon }) {
  return (
    <>
      {groupIcon === 'BookOpenIcon' && <BookOpenIcon className="w-4 h-4" />}
      {groupIcon === 'CalendarIcon' && <CalendarIcon className="w-4 h-4" />}
      {groupIcon === 'BellAlertIcon' && <BellAlertIcon className="w-4 h-4" />}
      {groupIcon === 'BarsArrowDownIcon' && (
        <BarsArrowDownIcon className="w-4 h-4" />
      )}
      {groupIcon === 'BeakerIcon' && <BeakerIcon className="w-4 h-4" />}
      {groupIcon === 'NewspaperIcon' && <NewspaperIcon className="w-4 h-4" />}
      {groupIcon === 'ArrowsUpDownIcon' && (
        <ArrowsUpDownIcon className="w-4 h-4" />
      )}
      {groupIcon === 'ArchiveBoxIcon' && <ArchiveBoxIcon className="w-4 h-4" />}
      {groupIcon === 'QueueListIcon' && <QueueListIcon className="w-4 h-4" />}
      {groupIcon === 'SparklesIcon' && <SparklesIcon className="w-4 h-4" />}
    </>
  )
}
