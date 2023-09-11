import matter from 'gray-matter'
import { promises as fs } from 'fs'
import { join } from 'path'
import { serialize } from 'next-mdx-remote/serialize'

import Container from '@component/Container'
import Preview from '@component/Preview'
import Renderer from '@component/Renderer'

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

  const { content, data: componentData } = matter(componentItem)

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
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
      <div className="bg-slate-900">
        <Banner title={componentData.title} text={componentData.description} />

        <Container classNames="pb-8 lg:pb-12">
          <article className="mx-auto prose prose-invert">
            <Renderer
              mdxSource={componentContent}
              mdxComponents={mdxComponents}
            />
          </article>
        </Container>
      </div>
    </>
  )
}

function Banner({ title, text }) {
  return (
    <section>
      <div className="max-w-screen-xl px-4 py-16 mx-auto">
        <div className="mx-auto text-center max-w-prose">
          <h1 className="text-3xl font-black text-white sm:text-5xl">
            {title}
          </h1>

          <p className="mt-4 font-medium text-slate-300 sm:leading-relaxed sm:text-xl">
            {text}
          </p>
        </div>
      </div>
    </section>
  )
}
