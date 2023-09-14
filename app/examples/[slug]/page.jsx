import matter from 'gray-matter'
import { promises as fs } from 'fs'
import { join } from 'path'
import { serialize } from 'next-mdx-remote/serialize'

import rehypeExternalLinks from 'rehype-external-links'

import { ogMeta, twitterMeta } from '@data/metadata'

import Preview from '@component/Preview'
import Callout from '@component/Callout'
import Renderer from '@component/Renderer'
import Content from '@/components/Content'

const mdxComponents = {
  Callout,
}

const componentsPath = join(process.cwd(), '/src/data/components')

export async function generateMetadata({ params }) {
  const { componentData } = await getComponent(params)

  return {
    title: `${componentData.title} | HyperJS`,
    openGraph: {
      ...ogMeta,
      title: `${componentData.title} | HyperJS`,
    },
    twitter: {
      ...twitterMeta,
      title: `${componentData.title} | HyperJS`,
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

  return (
    <>
      <Content>
        <h1>
          {componentData.title}
          <span className="sr-only"> in Alpine JS</span>
        </h1>

        <p>{componentData.description}</p>

        <Renderer mdxSource={componentContent} mdxComponents={mdxComponents} />
      </Content>

      <Preview componentId={params.slug} componentTitle={componentData.title} />
    </>
  )
}
