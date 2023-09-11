import Card from '@/components/Card'

function Grid({ componentItems }) {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {componentItems.map(({ title, description, emoji, slug }) => (
        <li key={slug}>
          <Card
            title={title}
            description={description}
            emoji={emoji}
            slug={slug}
          />
        </li>
      ))}
    </ul>
  )
}

export default Grid
