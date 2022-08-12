import { useEffect, useState } from 'react'

import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

import Layout from '../components/Layout'

import { exampleFilePaths, EXAMPLES_PATH } from '../utils/mdxUtils'

export default function Index({ examples }) {
  let [basic, setBasic] = useState(true)
  let [accessible, setAccessible] = useState(true)
  let [components, setComponents] = useState(examples)

  useEffect(() => {
    const filteredComponents = examples.filter((component) => {
      if (basic && accessible) {
        return true
      }

      if (basic && !accessible) {
        return component.data.basic
      }

      if (accessible && !basic) {
        return component.data.accessible
      }
    })

    setComponents(filteredComponents)
  }, [basic, accessible])

  let basicCount = examples.filter((example) => example.data.basic).length

  let accessibleCount = examples.filter(
    (example) => example.data.accessible
  ).length

  return <Layout examples={examples}></Layout>
}

export function getStaticProps() {
  const examples = exampleFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(EXAMPLES_PATH, filePath))
    const { content, data } = matter(source)

    return {
      content,
      data,
      filePath,
    }
  })

  return { props: { examples } }
}
