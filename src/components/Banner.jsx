export default function Banner() {
  return (
    <section>
      <div className="max-w-screen-xl px-4 py-16 mx-auto">
        <div className="max-w-xl">
          <h1 className="text-3xl font-black text-white sm:text-5xl">
            Enjoy the DOM
            <br />
            with <em className="mt-1 not-italic text-teal-400">Alpine JS</em> 💫
          </h1>

          <p className="mt-4 font-medium text-slate-300 sm:leading-relaxed sm:text-xl">
            Alpine JS allows you to write DOM manipulation all in your HTML,
            Liquid, Blade etc. Here is a collection of snippets that you can
            copy and paste into your project.
          </p>
        </div>
      </div>
    </section>
  )
}
