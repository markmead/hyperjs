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
      const { title, description } = initialResult

      return (
        title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    })

    handleSetComponentSearch(searchQuery)
    handleSetComponentsSearched(filteredResults)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery])

  useEffect(() => {
    setSearchQuery('')
  }, [nextRouter.asPath])

  return (
    <form role="search">
      <label htmlFor="SiteSearch" className="sr-only">
        Search Components
      </label>

      <input
        type="text"
        onInput={(e) => setSearchQuery(e.currentTarget.value)}
        value={searchQuery}
        placeholder="Search Components..."
        id="SiteSearch"
        className="form-input !border-slate-700 !bg-slate-800/50"
      />

      <button tabIndex={-1} className="sr-only">
        Submit
      </button>
    </form>
  )
}

export default Search
