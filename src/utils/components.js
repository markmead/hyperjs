import matter from 'gray-matter'
import rehypeExternalLinks from 'rehype-external-links'

import { join } from 'path'
import { promises as fs } from 'fs'
import { serialize } from 'next-mdx-remote/serialize'

export async function getComponentPaths() {
  const componentsPath = join(process.cwd(), '/src/data/components')
  const componentSlugs = await fs.readdir(componentsPath)

  const paths = componentSlugs.map((componentSlug) => {
    return {
      params: {
        slug: componentSlug.replace('.mdx', ''),
      },
    }
  })

  return paths
}

export async function getComponents() {
  const componentsPath = join(process.cwd(), '/src/data/components')
  const componentSlugs = await fs.readdir(componentsPath)

  const componentItems = await Promise.all(
    componentSlugs.map(async (componentSlug) => {
      const componentPath = join(componentsPath, componentSlug)
      const componentItem = await fs.readFile(componentPath, 'utf-8')

      const {
        data: { title, group },
      } = matter(componentItem)

      return {
        title,
        group,
        slug: componentSlug.replace('.mdx', ''),
      }
    })
  )

  const groupedComponentItems = componentItems.reduce((groupAcc, groupItem) => {
    const itemGroup = groupItem.group

    if (!groupAcc[itemGroup]) {
      groupAcc[itemGroup] = []
    }

    groupAcc[itemGroup].push(groupItem)

    return groupAcc
  }, {})

  Object.keys(groupedComponentItems).forEach((groupKey) => {
    groupedComponentItems[groupKey].sort((groupA, groupB) => {
      return groupA.title.localeCompare(groupB.title)
    })
  })

  Object.keys(groupedComponentItems).forEach((itemKey) => {
    groupedComponentItems[itemKey].sort((itemA, itemB) => {
      const itemALength = itemA.title.length
      const itemBLength = itemB.title.length

      return itemALength - itemBLength
    })
  })

  return groupedComponentItems
}

export async function getComponent(params) {
  const componentsPath = join(process.cwd(), '/src/data/components')

  const componentPath = join(componentsPath, `${params.slug}.mdx`)
  const componentItem = await fs.readFile(componentPath, 'utf-8')

  const { content, data: componentData } = matter(componentItem)

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [[rehypeExternalLinks, { target: '_blank' }]],
    },
    scope: componentData,
  })

  return {
    componentData,
    componentContent: mdxSource,
  }
}
