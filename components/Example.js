import { useState, useEffect } from "react";

export default function Example({ src }) {
  let [code, setCode] = useState("");

  useEffect(async () => {
    const response = await fetch(`/examples/${src}.html`);
    const text = await response.text();

    setCode(text);
  }, [src]);

  return (
    <>
      <h2>Example</h2>

      <div className="relative p-8 bg-black rounded-3xl not-prose">
        <span className="absolute inset-0 bg-pink-100 border-4 border-black rotate-1 rounded-3xl"></span>
        <div
          className="relative"
          dangerouslySetInnerHTML={{ __html: code }}
        ></div>
      </div>

      <h2>Code</h2>

      <div className="relative p-8 bg-black rounded-3xl not-prose">
        <span className="absolute inset-0 bg-pink-100 border-4 border-black -rotate-1 rounded-3xl"></span>
        <pre className="relative overflow-auto font-bold text-black">
          {code}
        </pre>
      </div>
    </>
  );
}
