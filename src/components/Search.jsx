'use client'

import Link from 'next/link'

import { useParams } from 'next/navigation'

import { useEffect, useRef, useState } from 'react'

import { useClickAway, useDebounce } from 'react-use'

export default function Search({ navItems }) {
  const refDropdown = useRef(null)

  const [searchQuery, setSearchQuery] = useState('')
  const [searchQueryDebounced, setSearchQueryDebounced] = useState('')
  const [filteredItems, setFilteredItems] = useState([])
  const [formattedItems, setFormattedItems] = useState([])

  const { slug: urlSlug } = useParams()

  useEffect(() => setSearchQuery(''), [urlSlug])

  useEffect(() => {
    const formattedItems = Object.entries(navItems).flatMap((navItem) => {
      // eslint-disable-next-line no-unused-vars
      const [_, groupItems] = navItem

      return groupItems
    })

    setFormattedItems(formattedItems)
  }, [navItems])

  useEffect(() => {
    const filteredItems = formattedItems.filter(({ title: itemTitle }) =>
      itemTitle.toLowerCase().includes(searchQueryDebounced.toLowerCase())
    )

    setFilteredItems(filteredItems)
  }, [formattedItems, searchQueryDebounced])

  useClickAway(refDropdown, () => setSearchQuery(''))

  useDebounce(() => setSearchQueryDebounced(searchQuery), 500, [searchQuery])

  return (
    <div className="relative h-12 sm:h-auto sm:flex-1">
      <input
        type="text"
        className={`relative z-[100] w-full rounded-t border-gray-200 py-1.5 text-sm focus:ring-inset sm:max-w-sm ${
          searchQuery ? 'border-b-none' : 'rounded-b'
        }`}
        placeholder="Search"
        value={searchQuery}
        onChange={({ target }) => setSearchQuery(target.value)}
      />

      {searchQuery && (
        <div
          ref={refDropdown}
          className="absolute left-0 top-auto z-50 -mt-px w-full rounded-b border border-gray-200 bg-white shadow-sm sm:max-w-sm"
        >
          {filteredItems.length ? (
            <SearchResults searchItems={filteredItems} />
          ) : (
            <SearchEmpty searchQuery={searchQuery} />
          )}
        </div>
      )}
    </div>
  )
}

function SearchResults({ searchItems }) {
  return (
    <ul className="max-h-64 space-y-2 overflow-auto px-3 py-4">
      {searchItems.map(({ title: itemTitle, slug: itemSlug }) => (
        <li key={itemSlug}>
          <Link
            href={`/examples/${itemSlug}`}
            className="block text-sm/relaxed font-medium text-gray-700 hover:text-indigo-600 focus:text-indigo-600"
          >
            {itemTitle}
          </Link>
        </li>
      ))}
    </ul>
  )
}

function SearchEmpty({ searchQuery }) {
  return (
    <div className="px-3 py-4">
      <p className="text-sm/relaxed text-gray-700">
        No results found for <strong className="font-medium text-gray-900">{searchQuery}</strong>.
      </p>
    </div>
  )
}
