import { useEffect, useState } from 'react'

import { useRouter } from 'next/router'

function Search({ handleSetComponentSearch, handleSetComponentsSearched }) {
  const nextRouter = useRouter()

  const [initialResults, setInitialResults] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    fetch('/api/search')
      .then((result) => result.json())
      .then((data) => setInitialResults(data))
  }, [])

  useEffect(() => {
    const filteredResults = initialResults.filter(function (initialResult) {
      const { title } = initialResult

      return title.toLowerCase().includes(searchQuery.toLowerCase())
    })

    handleSetComponentSearch(searchQuery)
    handleSetComponentsSearched(filteredResults)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery])

  useEffect(() => {
    setSearchQuery('')
  }, [nextRouter.asPath])

  return (
    <form role="search" className="relative">
      <label htmlFor="SiteSearch" className="sr-only">
        Search Components
      </label>

      <input
        type="text"
        onInput={(e) => setSearchQuery(e.currentTarget.value)}
        value={searchQuery}
        placeholder="Search Components..."
        id="SiteSearch"
        className="h-16 text-white rounded-md placeholder-slate-300 border-slate-800 bg-slate-900 form-input"
      />

      <button
        tabIndex={-1}
        className="absolute inset-y-0 right-0 grid w-16 h-16 transition place-content-center rounded-r-md hover:bg-teal-400/5"
      >
        <span className="sr-only">Submit</span>

        <span role="img" aria-hidden="true" className="text-2xl">
          🔍
        </span>
      </button>
    </form>
  )
}

export default Search
