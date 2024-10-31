import { Inter } from 'next/font/google'

import { join } from 'path'
import { promises as fs } from 'fs'
import { serialize } from 'next-mdx-remote/serialize'

import 'prismjs/themes/prism-okaidia.css'
import '@style/site.css'

import { ogMeta, siteMeta, twitterMeta } from '@data/metadata'

import Container from '@component/Container'

export const metadata = {
  metadataBase: new URL('https://js.hyperui.dev'),
  ...siteMeta,
  openGraph: {
    ...ogMeta,
  },
  twitter: {
    ...twitterMeta,
  },
}

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

async function getComponents() {
  const componentsPath = join(process.cwd(), '/src/data/components')
  const componentSlugs = await fs.readdir(componentsPath)

  const componentItems = await Promise.all(
    componentSlugs.map(async (componentSlug) => {
      const componentPath = join(componentsPath, componentSlug)
      const componentItem = await fs.readFile(componentPath, 'utf-8')

      const { frontmatter: componentData } = await serialize(componentItem, {
        parseFrontmatter: true,
      })

      return {
        title: componentData.title,
        group: componentData.group,
        slug: componentSlug.replace('.mdx', ''),
      }
    })
  )

  const sortedComponentItems = componentItems.sort((itemA, itemB) => {
    return itemA.title.localeCompare(itemB.title)
  })

  const groupItems = [...new Set(sortedComponentItems.map(({ group: itemGroup }) => itemGroup))]
  const sortedGroupItems = groupItems.sort()

  console.log(sortedGroupItems)

  const groupedComponentItems = sortedGroupItems.reduce((groupedItems, groupItem) => {
    const groupItems = sortedComponentItems.filter(
      ({ group: itemGroup }) => itemGroup === groupItem
    )

    return {
      ...groupedItems,
      [groupItem]: groupItems,
    }
  }, {})

  return groupedComponentItems
}

export default async function RootLayout({ children }) {
  const componentItems = await getComponents()

  return (
    <html className="h-full scroll-smooth" lang="en" dir="ltr">
      <body className={`${inter.variable} h-full bg-gray-50 font-sans antialiased`}>
        <Container navItems={componentItems}>{children}</Container>
      </body>
    </html>
  )
}
