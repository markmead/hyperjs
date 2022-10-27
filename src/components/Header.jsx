import Link from "next/link";
import IconGithub from "./IconGithub";
import IconTwitter from "./IconTwitter";

export default function Header() {
  return (
    <header className="bg-slate-900 border-b border-slate-800">
      <div className="flex items-center justify-between h-16 max-w-screen-xl px-4 mx-auto">
          <Link href="/">
            <a className="text-lg font-bold inline-flex gap-2 items-center">
              <span className="text-white">
              HyperJS
              </span>


              <span aria-hidden="true" role="img">
                🛵
              </span>
            </a>
          </Link>

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
      </div>
    </header>
  );
}
