import { fileToUrl } from '@/utils/fileToUrl'

import Card from '@/components/Card'

function Grid({ componentItems }) {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {componentItems.map((componentItem) => (
        <li key={componentItem.filePath}>
          <Card
            componentData={componentItem.data}
            componentSlug={fileToUrl(componentItem.filePath)}
          />
        </li>
      ))}
    </ul>
  )
}

export default Grid
