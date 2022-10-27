export default function Banner() {
  return (
    <section>
      <div className="max-w-screen-xl px-4 mx-auto py-16">
        <div className="max-w-xl">
          <h1 className="text-3xl font-black sm:text-5xl text-white">
            Enjoy the DOM

            <br />

            with{' '}
            <em className="text-teal-400 mt-1 not-italic">
              Alpine JS
            </em>{' '}💫
          </h1>

          <p className="mt-4 text-slate-300 sm:leading-relaxed sm:text-xl font-medium">
            Alpine JS allows you to write DOM manipulation all in your HTML,
            Liquid, Blade etc. Here is a collection of snippets that you can copy
            and paste into your project.
          </p>
        </div>
      </div>
    </section>
  );
}
