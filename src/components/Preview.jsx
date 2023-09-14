'use client'

import { useState, useEffect } from 'react'

import {
  ClipboardIcon,
  EyeIcon,
  CodeBracketIcon,
} from '@heroicons/react/24/outline'

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
        <div className="flex gap-1.5 items-center">
          <Toggle
            buttonText="Preview"
            setActive={previewExample}
            setHandle={setPreviewExample}
          />

          <Toggle
            buttonText="Code"
            setActive={previewCode}
            setHandle={setPreviewCode}
          />

          <button
            onClick={copyToClipboard}
            className="px-3 py-1.5 inline-flex items-center gap-1.5 text-gray-900 ml-auto border-t border-x border-gray-200 rounded-t bg-white"
          >
            <span className="text-sm font-medium">{buttonText}</span>

            <ClipboardIcon className="w-4 h-4" />
          </button>
        </div>

        <div className="bg-white rounded-b relative border border-gray-200">
          <div
            className={`grid grid-cols-1 h-[500px] ${
              showBoth && 'md:grid-cols-2 grid-rows-2 md:grid-rows-1'
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
              <iframe
                className="w-full h-full"
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
      className={`px-3 py-1.5 transition inline-flex items-center gap-1.5 text-gray-900 border-t border-x bg-white border-gray-200 rounded-t ${
        !setActive && 'opacity-50 hover:opacity-100'
      }`}
      onClick={() => setHandle(!setActive)}
    >
      <span className="text-sm font-medium">{buttonText}</span>

      {buttonText === 'Preview' ? (
        <EyeIcon className="w-4 h-4" />
      ) : (
        <CodeBracketIcon className="w-4 h-4" />
      )}
    </button>
  )
}
