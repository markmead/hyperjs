export default function CardTag({ basic, accessible }) {
  return (
    <span className="text-xs font-medium text-white bg-black px-3 py-1.5 rounded-full">
      {basic && 'Basic'}
      {accessible && 'Accessible'}
    </span>
  )
}
