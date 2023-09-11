import matter from 'gray-matter'
import { promises as fs } from 'fs'
import { join } from 'path'
import { serialize } from 'next-mdx-remote/serialize'

import Container from '@component/Container'
import Banner from '@component/Banner'
import Preview from '@component/Preview'
import MdxRemoteRender from '@component/MdxRemoteRender'

const mdxComponents = {
  Preview,
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

  const { content, data: frontmatter } = matter(componentItem)

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: frontmatter,
  })

  return {
    componentData: frontmatter,
    componentContent: mdxSource,
  }
}

export default async function Page({ params }) {
  const { componentData, componentContent } = await getComponent(params)

  return (
    <>
      <div className="bg-slate-900">
        <Banner
          bannerTitle={componentData.title}
          bannerText={componentData.description}
        />

        <Container classNames="pb-8 lg:pb-12">
          <article className="mx-auto prose prose-invert">
            <MdxRemoteRender
              mdxSource={componentContent}
              mdxComponents={mdxComponents}
            />
          </article>
        </Container>
      </div>
    </>
  )
}
