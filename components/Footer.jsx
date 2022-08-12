export default function Footer() {
  return (
    <footer className="p-8 border-t border-stone-100">
      <p className="text-xs text-stone-500 max-w-2xl">
        HyperJS is a collection of HTML snippets to showcase of common
        JavaScript functionality, written in Alpine JS. There is an official{' '}
        <a
          className=" text-pink-600 underline inline-block"
          href="https://alpinejs.dev/components"
          target="_blank"
          rel="noopener noreferrer"
        >
          Alpine JS Components
        </a>{' '}
        library that features code examples, documentation and screencasts all
        from the creator of Alpine JS, Caleb Porzio.
      </p>

      <p className="text-xs font-medium text-stone-500 mt-4">
        {new Date().getFullYear()} Mark Mead
      </p>
    </footer>
  )
}
