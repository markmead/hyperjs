import { useState, useEffect } from 'react'

import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

import { fileToUrl } from '@/utils/fileToUrl'
import { componentFilePaths, COMPONENTS_PATH } from '@/utils/mdxUtils'

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

function Banner() {
  return (
    <section>
      <div className="max-w-screen-xl px-4 py-16 mx-auto">
        <div className="max-w-xl">
          <h1 className="text-3xl font-black text-white sm:text-5xl">
            Enjoy the DOM
            <br />
            with <em className="mt-1 not-italic text-teal-400">Alpine JS</em> 💫
          </h1>

          <p className="mt-4 font-medium text-slate-300 sm:leading-relaxed sm:text-xl">
            Alpine JS allows you to write DOM manipulation all in your HTML,
            Liquid, Blade etc. Here is a collection of components that you can
            copy and paste into your project.
          </p>
        </div>
      </div>
    </section>
  )
}
