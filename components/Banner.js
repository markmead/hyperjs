import Wave from './Wave'

export default function Banner() {
  return (
    <section className="relative pt-16">
      <div
        className="absolute inset-x-0 top-0 rotate-180 pointer-events-none"
        aria-hidden="true"
      >
        <Wave />
      </div>

      <div className="max-w-screen-xl px-4 py-12 mx-auto sm:py-24 lg:py-36">
        <div className="max-w-xl mx-auto text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Enjoy the DOM.
            <strong className="block font-extrabold text-pink-600">
              Write Alpine JS.
            </strong>
          </h1>

          <p className="mt-4 text-gray-700 sm:leading-relaxed sm:text-xl">
            Alpine JS allows you to write DOM manipulation all in your HTML,
            Liquid, Blade etc. Here's a collection of snippets that you can copy
            and paste into your project.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              className="block w-full px-12 py-4 font-bold text-white transition bg-pink-600 rounded-lg sm:w-auto active:bg-pink-500 hover:bg-pink-700 focus:outline-none focus:ring"
              href="#mainContent"
            >
              Get Started
            </a>

            <a
              className="flex items-center justify-center w-full px-12 py-4 font-bold text-pink-600 transition rounded-lg shadow sm:w-auto hover:text-pink-700 active:text-pink-500 focus:outline-none focus:ring"
              href="https://alpinejs.dev/start-here"
              target="_blank"
              rel="noopener noreferrer"
            >
              Alpine JS
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1.5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
