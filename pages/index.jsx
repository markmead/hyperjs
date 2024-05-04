import { getComponents } from '@util/components'

import Content from '@component/Content'
import Container from '@component/Container'
import Meta from '@component/Meta'

export async function getStaticProps() {
  const componentItems = await getComponents()

  return {
    props: {
      componentItems,
    },
  }
}

export default function Page({ componentItems }) {
  const metaContent = {
    title: 'Code Examples and Guides of Functionality with Alpine JS | HyperJSI',
    description:
      'Collection of code examples and guides of functionality with Alpine JS. Learn how to build a website with Alpine JS.',
  }

  return (
    <>
      <Meta metaContent={metaContent} />

      <Container navItems={componentItems}>
        <Content>
          <h1>Code Examples and Guides on Functionality with Alpine JS</h1>

          <p>
            Alpine JS allows you to write DOM manipulation all in your HTML, Liquid, Blade etc. This
            website serves as a collection of examples of functionality that you may have to build
            in your next project.
          </p>

          <p>I have kept the styling to a minimum so that you can focus on the functionality.</p>
        </Content>
      </Container>
    </>
  )
}
