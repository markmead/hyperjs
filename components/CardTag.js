export default function CardTag({ basic, accessible }) {
  return (
    <span className="absolute z-50 text-xs font-medium text-white bg-black top-4 right-6 px-3 py-1.5 rounded-full group-hover:right-8 group-hover:top-2 transition-all">
      {basic && "Basic"}
      {accessible && "Accessible"}
    </span>
  );
}
