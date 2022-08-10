export default function Banner({ title, description }) {
  return (
    <section className="relative pt-16">
      <div className="max-w-screen-xl px-4 py-32 mx-auto">
        <div className="max-w-xl mx-auto text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">{title}</h1>

          <p className="mt-4 text-gray-700 sm:leading-relaxed sm:text-xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}
