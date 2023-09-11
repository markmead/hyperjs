'use client'

import { useState, useEffect } from 'react'

import Prism from 'prismjs'

import { componentPreviewHtml } from '@util/transformers'

export default function Preview({ componentId }) {
  const [componentCode, setComponentCode] = useState('')
  const [componentHtml, setComponentHtml] = useState('')
  const [previewCode, setPreviewCode] = useState(true)
  const [buttonEmoji, setButtonEmoji] = useState('📋')

  useEffect(() => {
    async function fetchData() {
      const fetchResponse = await fetch(`/code/${componentId}.html`)
      const fetchCode = await fetchResponse.text()

      setComponentCode(fetchCode)

      const transformedHtml = componentPreviewHtml(fetchCode)

      setComponentHtml(transformedHtml)
    }

    fetchData()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => Prism.highlightAll())

  async function copyToClipboard() {
    await navigator.clipboard.writeText(componentCode)

    setButtonEmoji('✅')
    setTimeout(() => setButtonEmoji('📋'), 3000)
  }

  return (
    <>
      <div className="not-prose lg:-ms-[10ch] lg:w-[85ch]">
        <div className="flex gap-4 items-center">
          <button
            className={`
              transition border border-teal-400 rounded-lg bg-slate-900 hover:bg-teal-400/5 px-4 py-2 text-sm font-medium
              ${
                previewCode
                  ? 'ring-1 ring-teal-400 bg-teal-400/5'
                  : 'hover:bg-teal-400/5'
              }
            `}
            onClick={() => setPreviewCode(true)}
          >
            Example
          </button>

          <button
            className={`
              transition border border-teal-400 rounded-lg bg-slate-900 hover:bg-teal-400/5 px-4 py-2 text-sm font-medium
              ${
                !previewCode
                  ? 'ring-1 ring-teal-400 bg-teal-400/5'
                  : 'hover:bg-teal-400/5'
              }
            `}
            onClick={() => setPreviewCode(false)}
          >
            Code
          </button>
        </div>

        <div className="bg-slate-800 rounded-xl max-h-[600px] overflow-auto relative mt-4">
          {previewCode ? (
            <div
              className="space-y-4 p-4"
              dangerouslySetInnerHTML={{ __html: componentHtml }}
            />
          ) : (
            <div>
              <div className="hidden sm:block">
                <button
                  onClick={copyToClipboard}
                  className="transition border border-teal-400 rounded-lg bg-slate-900 hover:bg-teal-400/5 grid place-content-center w-10 h-10 absolute top-4 right-4"
                >
                  <span className="sr-only">Copy to clipboard</span>

                  <span role="img" aria-hidden="true">
                    {buttonEmoji}
                  </span>
                </button>
              </div>

              <pre>
                <code className="language-html">{componentCode}</code>
              </pre>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
