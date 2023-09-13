import matter from 'gray-matter'
import { promises as fs } from 'fs'
import { join } from 'path'
import { serialize } from 'next-mdx-remote/serialize'

import rehypeExternalLinks from 'rehype-external-links'

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
    description: componentData.description,
    openGraph: {
      title: `${componentData.title} | HyperJS`,
      description: componentData.description,
      url: 'https://js.hyperui.dev/',
      siteName: 'HyperJS',
      type: 'website',
      image: 'https://js.hyperui.dev/og.jpg',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${componentData.title} | HyperJS`,
      description: componentData.description,
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
        <h1>{componentData.title}</h1>

        <p>{componentData.description}</p>

        <Renderer mdxSource={componentContent} mdxComponents={mdxComponents} />
      </Content>

      <Preview componentId={params.slug} />
    </>
  )
}
