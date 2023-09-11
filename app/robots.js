export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/code/',
    },
    sitemap: 'https://js.hyperui.dev/sitemap.xml',
  }
}
