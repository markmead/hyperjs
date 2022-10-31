import { useState, useEffect } from 'react'

import Prism from 'prismjs'

export default function Preview({ componentId }) {
  const [code, setCode] = useState('')
  const [buttonEmoji, setButtonEmoji] = useState('📋')

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`/code/${componentId}.html`)
      const text = await response.text()

      setCode(text)
    }

    fetchData()
  }, [])

  useEffect(() => Prism.highlightAll())

  function copyToClipboard() {
    navigator.clipboard.writeText(code).then(function () {
      setButtonEmoji('✅')

      setTimeout(() => {
        setButtonEmoji('📋')
      }, 3000)
    })
  }

  return (
    <>
      <h2>Example</h2>

      <div className="not-prose">
        <div
          className="p-4 bg-slate-800 rounded-xl max-h-[600px] overflow-auto"
          dangerouslySetInnerHTML={{ __html: code }}
        ></div>
      </div>

      <h2>Code</h2>

      <div className="relative">
        <div className="hidden sm:block">
          <button
            className="absolute inline-flex items-center justify-center w-8 h-8 border rounded-lg top-4 right-4 border-slate-900 bg-slate-900/75"
            onClick={copyToClipboard}
          >
            <span role="img" aria-hidden="true" className="text-sm">
              {buttonEmoji}
            </span>
          </button>
        </div>
      </div>

      <pre>
        <code className="language-html">{code}</code>
      </pre>
    </>
  )
}
