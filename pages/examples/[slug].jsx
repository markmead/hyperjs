import { useRouter } from 'next/router'

import { getComponent, getComponents, getComponentPaths } from '@util/components'

import Preview from '@component/Preview'
import Callout from '@component/Callout'
import Renderer from '@component/Renderer'
import Content from '@component/Content'
import Container from '@component/Container'

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

  const appRouter = useRouter()

  const urlSlug = appRouter.asPath

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <Container navItems={componentItems}>
        <Content>
          <h1>How to {componentData.title} with Alpine JS</h1>

          {!!componentData.description && <p>{componentData.description}</p>}

          <Renderer mdxSource={componentContent} mdxComponents={mdxComponents} />
        </Content>

        <Preview componentId={urlSlug} componentTitle={componentData.title} />
      </Container>
    </>
  )
}