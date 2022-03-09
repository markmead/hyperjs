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

      <CopyToClipboard text={code} onCopy={() => toggleCopyText()}>
        <button className="flex items-center justify-center px-8 py-4 mt-8 font-bold bg-pink-100 border-4 border-black rounded-xl focus:outline-none focus:ring shadow-[8px_8px_0_0_#000] hover:shadow-none transition text-black">
          {copied ? "Copied... Now Paste" : "Copy to Clipboard"}

          <span aria-hidden="true" className="ml-1.5" role="img">
            📋
          </span>
        </button>
      </CopyToClipboard>
    </>
  );
}
