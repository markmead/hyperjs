import { join } from 'path'
import { promises as fs } from 'fs'

export default async function sitemap() {
  async function getComponents() {
    const componentsPath = join(process.cwd(), '/src/data/components')
    const componentSlugs = await fs.readdir(componentsPath)

    const componentItems = await Promise.all(
      componentSlugs.map(async (componentSlug) => {
        const componentSlugFormatted = componentSlug.replace('.mdx', '')

        return `examples/${componentSlugFormatted}`
      })
    )

    return componentItems
  }

  const siteSlugs = await Promise.all([getComponents()])

  const transformedSlugs = siteSlugs.flatMap((siteSlug) => {
    return siteSlug.flatMap((pageSlug) => {
      return {
        url: `https://js.hyperui.dev/${pageSlug}`,
        lastModified: new Date(),
      }
    })
  })

  return [
    {
      url: 'https://js.hyperui.dev',
      lastModified: new Date(),
    },
    ...transformedSlugs,
  ]
}
