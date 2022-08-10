export default function Banner({ title, description }) {
  return (
    <section>
      <h1 className="text-3xl font-extrabold sm:text-5xl">{title}</h1>

      <p className="mt-4 text-gray-700 sm:leading-relaxed sm:text-xl">
        {description}
      </p>
    </section>
  )
}
