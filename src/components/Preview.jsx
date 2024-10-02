'use client'

import { useEffect, useState } from 'react'

import { ClipboardIcon, CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline'

import Prism from 'prismjs'

import { componentPreviewHtml } from '@util/transformers'

export default function Preview({ componentId, componentTitle }) {
  const [buttonText, setButtonText] = useState('Copy')
  const [componentCode, setComponentCode] = useState('')
  const [componentHtml, setComponentHtml] = useState('')
  const [previewCode, setPreviewCode] = useState(true)
  const [previewExample, setPreviewExample] = useState(true)

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
        <div className="flex items-center gap-1.5">
          <Toggle buttonText="Preview" setActive={previewExample} setHandle={setPreviewExample} />

          <Toggle buttonText="Code" setActive={previewCode} setHandle={setPreviewCode} />

          <button
            onClick={copyToClipboard}
            className="ml-auto inline-flex items-center gap-1.5 rounded-t border-x border-t border-gray-200 bg-white px-3 py-1.5 text-gray-900"
          >
            <span className="text-sm font-medium">{buttonText}</span>

            <ClipboardIcon className="size-4" />
          </button>
        </div>

        <div className="relative rounded-b border border-gray-200 bg-white">
          <div
            className={`grid h-[500px] grid-cols-1 ${
              showBoth && 'grid-rows-2 md:grid-cols-2 md:grid-rows-1'
            }`}
          >
            {!previewExample && !previewCode && (
              <div className="absolute inset-0 grid place-content-center">
                <p className="text-sm text-gray-700">Nothing to see, please select a view.</p>
              </div>
            )}

            {previewExample && (
              <iframe
                className="h-full w-full"
                loading="lazy"
                srcDoc={componentHtml}
                title={`${componentTitle} in Alpine JS`}
              ></iframe>
            )}

            {previewCode && (
              <pre className="!rounded-none">
                <code className="language-html h-[300px]">{componentCode}</code>
              </pre>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

function Toggle({ buttonText, setActive, setHandle }) {
  return (
    <button
      className={`inline-flex items-center gap-1.5 rounded-t border-x border-t border-gray-200 bg-white px-3 py-1.5 text-gray-900 transition ${
        !setActive && 'opacity-50 hover:opacity-100'
      }`}
      onClick={() => setHandle(!setActive)}
    >
      <span className="text-sm font-medium">{buttonText}</span>

      {buttonText === 'Preview' ? (
        <EyeIcon className="size-4" />
      ) : (
        <CodeBracketIcon className="size-4" />
      )}
    </button>
  )
}
