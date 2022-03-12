import { useState, useEffect } from "react";

import { CopyToClipboard } from "react-copy-to-clipboard";

export default function Example({ src }) {
  let [code, setCode] = useState("");
  let [copied, setCopied] = useState(false);

  function toggleCopyText() {
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  }

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
          className="p-6 bg-pink-100 border-4 border-black rounded-3xl shadow-offset shadow-black"
          dangerouslySetInnerHTML={{ __html: code }}
        ></div>
      </div>

      <h2>Code</h2>

      <div className="not-prose">
        <pre className="p-6 bg-pink-100 rounded-3xl font-bold text-black max-h-[500px] shadow-offset shadow-black border-4 border-black overflow-auto text-lg">
          {code}
        </pre>
      </div>

      <CopyToClipboard text={code} onCopy={() => toggleCopyText()}>
        <button className="flex items-center justify-center px-8 py-4 mt-8 font-bold text-black transition bg-pink-100 border-4 border-black rounded-xl focus:outline-none focus:ring shadow-offset shadow-black hover:shadow-none">
          {copied ? "Copied... Now Paste" : "Copy to Clipboard"}

          <span aria-hidden="true" className="ml-1.5" role="img">
            📋
          </span>
        </button>
      </CopyToClipboard>
    </>
  );
}
