'use client'

export default function Callout({ children }) {
  return (
    <div className="bg-orange-100 border border-orange-200 p-4 rounded-lg [&_*]:my-0 shadow-md shadow-orange-100/50">
      {children}
    </div>
  )
}
