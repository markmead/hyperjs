'use client'

export default function Callout({ children }) {
  return (
    <div className="rounded border border-orange-200 bg-orange-100 p-4 text-sm font-medium [&_*]:my-0">
      {children}
    </div>
  )
}
