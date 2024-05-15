import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/">
      <div className="inline-flex gap-1.5 text-sm">
        <span className="font-medium text-gray-900">HyperJS</span>

        <span aria-hidden="true" role="img">
          🚀
        </span>
      </div>
    </Link>
  )
}
