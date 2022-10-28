import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

import { fileToUrl } from '@/utils/fileToUrl'
import { componentFilePaths, COMPONENTS_PATH } from '@/utils/mdxUtils'

import Banner from '@/components/Banner'
import Card from '@/components/Card'

export default function Index({ componentItems }) {
  return (
    <div className="bg-slate-900">
      <Banner />

      <section>
        <div className="max-w-screen-xl px-4 pb-12 mx-auto">
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {componentItems.map((componentItem) => (
              <li key={componentItem.filePath}>
                <Card
                  componentData={componentItem.data}
                  componentSlug={fileToUrl(componentItem.filePath)}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}

export function getStaticProps() {
  const componentItems = componentFilePaths.map((filePath) => {
    const componentSource = fs.readFileSync(
      path.join(COMPONENTS_PATH, filePath)
    )
    const { data } = matter(componentSource)

    return {
      data,
      filePath,
    }
  })

  return { props: { componentItems } }
}
