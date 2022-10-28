import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

import { mdx } from '@/utils/fileToUrl'
import { componentFilePaths, COMPONENTS_PATH } from '@/utils/mdxUtils'

import Banner from '@/components/Banner'
import Card from '@/components/Card'

export default function Index({ components }) {
  return (
    <div className="bg-slate-900">
      <Banner />

      <section>
        <div className="max-w-screen-xl px-4 pb-12 mx-auto">
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {components.map((component) => (
              <li key={component.filePath}>
                <Card data={component.data} path={mdx(component.filePath)} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}

export function getStaticProps() {
  const components = componentFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(COMPONENTS_PATH, filePath))
    const { content, data } = matter(source)

    return {
      content,
      data,
      filePath,
    }
  })

  return { props: { components } }
}
