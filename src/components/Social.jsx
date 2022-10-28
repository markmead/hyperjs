import IconGithub from '@/components/IconGithub'
import IconTwitter from '@/components/IconTwitter'

export default function Social() {
  return (
    <div className="flex items-center gap-4">
      <a
        href="https://twitter.com/itsmarkmead"
        target="_blank"
        rel="noreferrer"
        className="text-white transition hover:text-white/75"
      >
        <span className="sr-only">Twitter</span>

        <IconTwitter className="w-6 h-6" />
      </a>

      <a
        href="https://github.com/markmead/hyperjs"
        target="_blank"
        rel="noreferrer"
        className="text-white transition hover:text-white/75"
      >
        <span className="sr-only">GitHub</span>

        <IconGithub className="w-6 h-6" />
      </a>
    </div>
  )
}
