import { useState, useEffect } from 'react'

export default function Example({ src }) {
  let [code, setCode] = useState('')
  let [text, setText] = useState('Copy')
  let [emoji, setEmoji] = useState('📋')
  let [error, setError] = useState(false)

  function copyToClipboard() {
    navigator.clipboard.writeText(code).then(
      function () {
        setError(false)

        setEmoji('✅')
        setText('Copied')

        setTimeout(() => {
          setEmoji('📋')
          setText('Copy')
        }, 3000)
      },
      function () {
        setError(true)
      }
    )
  }

  useEffect(async () => {
    const response = await fetch(`/examples/${src}.html`)
    const text = await response.text()

    setCode(text)
  }, [src])

  return (
    <>
      <h2>Example</h2>

      <div className="not-prose">
        <div
          className="p-4 border border-stone-100 bg-stone-50 rounded-xl"
          dangerouslySetInnerHTML={{ __html: code }}
        ></div>
      </div>

      <h2 className="flex items-center justify-between">
        <span>Code</span>

        <button
          onClick={copyToClipboard}
          className="inline-flex items-center gap-4 px-5 py-3 bg-stone-50 text-stone-700 border border-stone-100 rounded-lg text-sm"
          title="Copy to clipboard"
        >
          <span>{text}</span>

          <span aria-hidden="true" role="img">
            {emoji}
          </span>
        </button>
      </h2>

      <pre className="max-h-[600px]">{code}</pre>

      {error && (
        <p className="text-xs text-red-600 font-medium">
          🚨 Failed copying to clipboard 🚨
        </p>
      )}
    </>
  )
}
