'use client'

import { useState, useEffect } from 'react'

import Prism from 'prismjs'

import { componentPreviewHtml } from '@util/transformers'

export default function Preview({ componentId }) {
  const [componentCode, setComponentCode] = useState('')
  const [componentHtml, setComponentHtml] = useState('')
  const [previewCode, setPreviewCode] = useState(true)
  const [previewExample, setPreviewExample] = useState(true)
  const [buttonText, setButtonText] = useState('Copy')

  const showBoth = previewCode && previewExample

  useEffect(() => {
    async function fetchData() {
      const fetchResponse = await fetch(`/components/${componentId}.html`)
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

    setButtonText('Copied')
    setTimeout(() => setButtonText('Copy'), 3000)
  }

  return (
    <>
      <section className="mt-4">
        <div className="flex gap-1.5 items-center">
          <button
            className="px-3 py-1.5 text-sm font-medium text-gray-900 border-t border-x border-gray-200 rounded-t bg-white"
            onClick={() => setPreviewExample(!previewExample)}
          >
            Example
          </button>

          <button
            className="px-3 py-1.5 text-sm font-medium text-gray-900 border-t border-x border-gray-200 rounded-t bg-white"
            onClick={() => setPreviewCode(!previewCode)}
          >
            Code
          </button>

          <button
            onClick={copyToClipboard}
            className="px-3 py-1.5 text-sm font-medium text-gray-900 ml-auto border-t border-x border-gray-200 rounded-t bg-white"
          >
            {buttonText}
          </button>
        </div>

        <div className="bg-white rounded-b-lg relative border border-gray-200">
          <div
            className={`grid h-[500px] ${
              showBoth ? 'grid-cols-2' : 'grid-cols-1'
            }`}
          >
            {!previewExample && !previewCode && (
              <div className="absolute inset-0 grid place-content-center">
                <p className="text-gray-700 text-sm">
                  Nothing to see, please select a view.
                </p>
              </div>
            )}

            {previewExample && (
              <div className="p-4">
                <iframe
                  className="w-full h-[300px]"
                  loading="lazy"
                  srcDoc={componentHtml}
                  title="Preview"
                ></iframe>
              </div>
            )}

            {previewCode && (
              <pre>
                <code className="language-html h-[300px]">{componentCode}</code>
              </pre>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
