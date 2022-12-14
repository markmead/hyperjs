import dynamic from 'next/dynamic'
import Head from 'next/head'

import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'

import { componentFilePaths, COMPONENTS_PATH } from '@/utils/mdxUtils'

import Banner from '@/components/BannerSimple'

const mdxComponents = {
  Preview: dynamic(() => import('@/components/Preview')),
}

export default function Component({ componentSource, frontMatter }) {
  return (
    <>
      <Head>
        <title>{frontMatter.title} Alpine JS Component | HyperJS</title>
        <meta
          name="description"
          content={frontMatter.description}
          key="description"
        />
        <meta
          property="og:title"
          content={`${frontMatter.title} | HyperUI`}
          key="og:title"
        />
        <meta
          property="og:description"
          content={frontMatter.description}
          key="og:description"
        />
        <meta
          name="twitter:title"
          content={`${frontMatter.title} | HyperUI`}
          key="twitter:title"
        />
        <meta
          name="twitter:description"
          content={frontMatter.description}
          key="twitter:description"
        />
      </Head>

      <div className="bg-slate-900">
        <Banner
          bannerTitle={frontMatter.title}
          bannerText={frontMatter.description}
        />

        <div className="max-w-screen-xl px-4 pb-12 mx-auto">
          <article className="mx-auto prose prose-invert">
            <MDXRemote {...componentSource} components={mdxComponents} />
          </article>
        </div>
      </div>
    </>
  )
}

export const getStaticProps = async ({ params }) => {
  const componentFilePath = join(COMPONENTS_PATH, `${params.slug}.mdx`)
  const componentSource = fs.readFileSync(componentFilePath)
  const { content, data } = matter(componentSource)

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  })

  return {
    props: {
      componentSource: mdxSource,
      frontMatter: data,
    },
  }
}

export const getStaticPaths = async () => {
  const componentPaths = componentFilePaths
    .map((filePath) => filePath.replace(/\.mdx?$/, ''))
    .map((componentSlug) => ({ params: { slug: componentSlug } }))

  return {
    paths: componentPaths,
    fallback: false,
  }
}
