import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

import { fileToUrl } from '@/utils/fileToUrl'
import { componentFilePaths, COMPONENTS_PATH } from '@/utils/mdxUtils'

import Banner from '@/components/Banner'
import Card from '@/components/Card'
import Search from '@/components/Search'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Index({ componentItems }) {
  const [componentSearch, setComponentSearch] = useState([])
  const [componentsSearched, setComponentsSearched] = useState([])
  const [componentResults, setComponentResults] = useState([])

  useEffect(
    () =>
      !componentResults.length &&
      !componentSearch &&
      setComponentResults(componentItems)
  )

  useEffect(() => {
    const searchedSlugs = componentsSearched.map(
      (componentSearched) => componentSearched.slug
    )

    const filteredResults = componentItems.filter((componentItem) =>
      searchedSlugs.includes(fileToUrl(componentItem.filePath))
    )

    setComponentResults(filteredResults)
  }, [componentsSearched])

  return (
    <div className="bg-slate-900">
      <Banner>
        <Search
          handleSetComponentSearch={setComponentSearch}
          handleSetComponentsSearched={setComponentsSearched}
        />
      </Banner>

      <section>
        <div className="max-w-screen-xl px-4 pb-12 mx-auto">
          {componentResults.length ? (
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {componentResults.map((componentItem) => (
                <li key={componentItem.filePath}>
                  <Card
                    componentData={componentItem.data}
                    componentSlug={fileToUrl(componentItem.filePath)}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-slate-300">Uh-no! There are no results 😢</p>
          )}
        </div>
      </section>
    </div>
  )
}

export function getStaticProps() {
  const componentItems = componentFilePaths.map((filePath) => {
    const componentSource = fs.readFileSync(
      path.join(COMPONENTS_PATH, filePath)
    )
    const { data } = matter(componentSource)

    return {
      data,
      filePath,
    }
  })

  return { props: { componentItems } }
}
