import { useRouter } from 'next/router'

import { getComponent, getComponents, getComponentPaths } from '@util/components'

import Preview from '@component/Preview'
import Callout from '@component/Callout'
import Renderer from '@component/Renderer'
import Content from '@component/Content'
import Container from '@component/Container'
import Meta from '@component/Meta'

const mdxComponents = {
  Callout,
}

export async function getStaticPaths() {
  const componentPaths = await getComponentPaths()

  return {
    paths: componentPaths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const componentItems = await getComponents()
  const { componentData, componentContent } = await getComponent(params)

  return {
    props: {
      componentItems,
      componentData,
      componentContent,
    },
  }
}

export default function Page({ componentItems, componentData, componentContent }) {
  const schemaData = {
    '@context': 'http://schema.org',
    '@type': 'NewsArticle',
    headline: `How to ${componentData.title} with Alpine JS`,
    image: 'https://js.hyperui.dev/og.jpg',
  }

  const metaContent = {
    title: `How to ${componentData.title} with Alpine JS | HyperUI`,
    description:
      componentData.description ||
      `Learn how to ${componentData.title} with Alpine JS with this guide and example.`,
  }

  const appRouter = useRouter()

  const urlSlug = appRouter.query.slug || ''

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <Meta metaContent={metaContent} />

      <Container navItems={componentItems}>
        <Content>
          <h1>How to {componentData.title} with Alpine JS</h1>

          {!!componentData.description && <p>{componentData.description}</p>}

          <Renderer mdxSource={componentContent} mdxComponents={mdxComponents} />
        </Content>

        <Preview key={urlSlug} componentId={urlSlug} componentTitle={componentData.title} />
      </Container>
    </>
  )
}
