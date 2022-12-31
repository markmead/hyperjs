import IconGithub from '@/components/IconGithub'

export default function Social() {
  return (
    <div>
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
