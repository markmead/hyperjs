import matter from 'gray-matter'
import { promises as fs } from 'fs'
import { join } from 'path'
import { serialize } from 'next-mdx-remote/serialize'

import rehypeExternalLinks from 'rehype-external-links'

import { ogMeta, twitterMeta } from '@data/metadata'

import Preview from '@component/Preview'
import Callout from '@component/Callout'
import Renderer from '@component/Renderer'
import Content from '@component/Content'

const mdxComponents = {
  Callout,
}

const componentsPath = join(process.cwd(), '/src/data/components')

export async function generateMetadata({ params }) {
  const { componentData } = await getComponent(params)

  return {
    title: `How to ${componentData.title} with Alpine JS | HyperJS`,
    openGraph: {
      ...ogMeta,
      title: `How to ${componentData.title} with Alpine JS | HyperJS`,
    },
    twitter: {
      ...twitterMeta,
      title: `How to ${componentData.title} with Alpine JS | HyperJS`,
    },
  }
}

export async function generateStaticParams() {
  return await fs.readdir(componentsPath)
}

async function getComponent(params) {
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

export default async function Page({ params }) {
  const { componentData, componentContent } = await getComponent(params)

  const schemaData = {
    '@context': 'http://schema.org',
    '@type': 'NewsArticle',
    headline: `How to ${componentData.title} with Alpine JS`,
    image: 'https://js.hyperui.dev/og.jpg',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <Content>
        <h1>How to {componentData.title} with Alpine JS</h1>

        {!!componentData.description && <p>{componentData.description}</p>}

        <Renderer mdxSource={componentContent} mdxComponents={mdxComponents} />
      </Content>

      <Preview componentId={params.slug} componentTitle={componentData.title} />
    </>
  )
}
