export default function Header() {
  return (
    <header className="px-8 border-b border-stone-100">
      <div className="flex items-center justify-end gap-4 h-20">
        <a
          className="text-xs text-stone-700 hover:text-stone-800"
          href="https://twitter.com/itsmarkmead"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>

        <a
          className="text-xs text-stone-700 hover:text-stone-800"
          href="https://github.com/markmead/hyperjs"
          rel="noopener noreferrer"
          target="_blank"
        >
          GitHub
        </a>
      </div>
    </header>
  )
}
