import IconGithub from "./IconGithub";
import IconTwitter from "./IconTwitter";

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-screen-xl px-4 py-12 mx-auto">
        <div className="max-w-3xl space-y-6">
          <div className="flex items-center gap-4">
            <a
              href="https://twitter.com/itsmarkmead"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-white/75 transition"
            >
              <IconTwitter className="w-6 h-6" />
            </a>

            <a
              href="https://github.com/markmead/hyperjs"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-white/75 transition"
            >
            <IconGithub className="w-6 h-6" />
            </a>
          </div>

          <p className="max-w-lg leading-relaxed text-slate-300">
            HyperJS is a collection of HTML snippets to showcase of common
            JavaScript functionality, written in Alpine JS. There is an <a href="https://alpinejs.dev/components" target="_blank"
              rel="noreferrer" className="underline hover:text-white transition">official
            Alpine JS components library</a> that features code examples,
            documentation and screencasts all from the creator of Alpine JS,
            Caleb Porzio.
          </p>

          <p className="text-xs font-medium text-slate-400">
            {new Date().getFullYear()} Mark Mead
          </p>
        </div>
      </div>
    </footer>
  )
}
