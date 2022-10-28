export default function Banner({ title, description }) {
  return (
    <section>
      <div className="max-w-screen-xl px-4 py-16 mx-auto">
        <div className="mx-auto text-center max-w-prose">
          <h1 className="text-3xl font-black text-white sm:text-5xl">
            {title}
          </h1>

          <p className="mt-4 font-medium text-slate-300 sm:leading-relaxed sm:text-xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}
