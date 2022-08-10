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
          className="p-6 border-4 border-black rounded-xl shadow-offset shadow-black"
          dangerouslySetInnerHTML={{ __html: code }}
        ></div>
      </div>

      <h2>Code</h2>

      <pre>{code}</pre>

      <button
        className="flex items-center justify-center px-8 py-4 mt-8 font-bold text-black transition border-4 border-black rounded-xl focus:outline-none focus:ring hover:bg-pink-100 hover:shadow-offset hover:shadow-black"
        onClick={copyToClipboard}
      >
        {text}

        <span aria-hidden="true" className="ml-1.5" role="img">
          {emoji}
        </span>
      </button>

      {error && (
        <span className="text-xs text-red-600 font-medium">
          🚨 Failed copying to clipboard 🚨
        </span>
      )}
    </>
  )
}
