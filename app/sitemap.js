import { getComponentsSitemap } from '@util/components'

export default async function sitemap() {
  const siteSlugs = await Promise.all([getComponentsSitemap()])

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
