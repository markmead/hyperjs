import { useState, useEffect } from 'react'

export default function Example({ src }) {
  const [code, setCode] = useState('')

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`/components/${src}.html`)
      const text = await response.text()

      setCode(text)
    }

    fetchData()
  }, [src])

  return (
    <>
      <h2>Example</h2>

      <div className="not-prose">
        <div
          className="p-6 bg-slate-800 rounded-xl"
          dangerouslySetInnerHTML={{ __html: code }}
        ></div>
      </div>

      <h2>Code</h2>

      <pre>{code}</pre>
    </>
  )
}
