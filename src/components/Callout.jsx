'use client'

export default function Callout({ children }) {
  return (
    <div className="bg-orange-100 border border-orange-200 p-4 rounded [&_*]:my-0 text-sm font-medium">
      {children}
    </div>
  )
}
