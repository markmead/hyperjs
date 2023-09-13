export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/components/',
    },
    sitemap: 'https://js.hyperui.dev/sitemap.xml',
  }
}
