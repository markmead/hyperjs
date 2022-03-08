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

      <div className="not-prose">
        <div
          className="p-8 rounded-3xl bg-pink-100 border-4 border-black shadow-[8px_8px_0_0_#000]"
          dangerouslySetInnerHTML={{ __html: code }}
        ></div>
      </div>

      <h2>Code</h2>

      <div className="not-prose">
        <pre className="p-8 bg-pink-100 rounded-3xl font-bold text-black max-h-[500px] shadow-[8px_8px_0_0_#000] border-4 border-black overflow-auto text-lg">
          {code}
        </pre>
      </div>
    </>
  );
}
