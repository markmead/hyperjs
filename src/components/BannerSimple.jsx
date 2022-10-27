export default function Banner({ title, description }) {
  return (
<section>
<div className="max-w-screen-xl px-4 mx-auto py-16">
  <div className="max-w-xl text-center mx-auto">
    <h1 className="text-3xl font-black sm:text-5xl text-white">
      {title}
    </h1>

    <p className="mt-4 text-slate-300 sm:leading-relaxed sm:text-xl font-medium">
      {description}
    </p>
  </div>
</div>
</section>
  );
}
