/** @type {import('next-sitemap').IConfig} */
module.exports = {
  exclude: ['/examples/**/*.html'],
  generateIndexSitemap: false,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  siteUrl: 'https://www.js.hyperui.dev',
}
