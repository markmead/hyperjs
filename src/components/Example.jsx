import { useState, useEffect } from 'react'

import Prism from 'prismjs'

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

  useEffect(() => Prism.highlightAll())

  return (
    <>
      <h2>Example</h2>

      <div className="not-prose">
        <div
          className="p-4 bg-slate-800 rounded-xl"
          dangerouslySetInnerHTML={{ __html: code }}
        ></div>
      </div>

      <h2>Code</h2>

      <pre>
        <code class="language-html">{code}</code>
      </pre>
    </>
  )
}
