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

      <div className="p-4 border-4 border-gray-100 rounded-md not-prose">
        <div dangerouslySetInnerHTML={{ __html: code }}></div>
      </div>

      <h2>Code</h2>

      <pre>{code}</pre>
    </>
  );
}
