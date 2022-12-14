import { useState, useEffect } from 'react'

import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

import { fileToUrl } from '@/utils/fileToUrl'
import { componentFilePaths, COMPONENTS_PATH } from '@/utils/mdxUtils'

import Banner from '@/components/Banner'
import Search from '@/components/Search'
import Grid from '@/components/Grid'

export default function Index({ componentItems }) {
  const [isLoading, setIsLoading] = useState(true)
  const [componentSearch, setComponentSearch] = useState('')
  const [componentsSearched, setComponentsSearched] = useState([])
  const [componentResults, setComponentResults] = useState([])

  useEffect(() => {
    const noResults = !componentSearch && !componentResults.length

    noResults && setComponentResults(componentItems)
  }, [componentSearch, componentResults, componentItems])

  useEffect(() => {
    if (componentResults.length) {
      return
    }

    setIsLoading(false)
  }, [componentResults])

  useEffect(() => {
    const searchedSlugs = componentsSearched.map(
      (componentSearched) => componentSearched.slug
    )

    const filteredResults = componentItems.filter((componentItem) =>
      searchedSlugs.includes(fileToUrl(componentItem.filePath))
    )

    setComponentResults(filteredResults)
  }, [componentItems, componentsSearched])

  return (
    <div className="bg-slate-900">
      <Banner />

      <section>
        <div className="max-w-screen-xl px-4 pb-12 mx-auto space-y-8">
          <Search
            handleSetComponentSearch={setComponentSearch}
            handleSetComponentsSearched={setComponentsSearched}
          />

          {isLoading && <Grid componentItems={componentItems} />}

          {componentResults.length ? (
            <Grid componentItems={componentResults} />
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
    const componentSource = fs.readFileSync(join(COMPONENTS_PATH, filePath))
    const { data } = matter(componentSource)

    return {
      data,
      filePath,
    }
  })

  return { props: { componentItems } }
}
