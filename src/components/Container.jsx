'use client'

import { useParams } from 'next/navigation'

import { useState, useEffect } from 'react'

import Sidebar from '@component/Sidebar'
import Footer from '@component/Footer'
import Header from '@component/Header'

export default function Container({ navItems, children }) {
  const [showMenu, setShowMenu] = useState(false)
  const [showSide, setShowSide] = useState(true)

  const { slug: urlSlug } = useParams()

  useEffect(() => setShowMenu(false), [urlSlug])

  return (
    <>
      <div className="pt-28 sm:pt-16">
        <Sidebar
          showMenu={showMenu}
          showSide={showSide}
          setShowMenu={setShowMenu}
          setShowSide={setShowSide}
          navItems={navItems}
          urlSlug={urlSlug}
        />

        <main className={showSide && 'lg:pl-72'}>
          <Header
            showMenu={showMenu}
            showSide={showSide}
            setShowMenu={setShowMenu}
            setShowSide={setShowSide}
            navItems={navItems}
          />

          <div className="px-4 py-8 sm:px-6 lg:px-8">
            {children}

            <Footer />
          </div>
        </main>
      </div>
    </>
  )
}
