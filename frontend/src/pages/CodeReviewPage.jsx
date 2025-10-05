import React, { useState } from "react";
import axios from "axios";
import { FaCopy, FaCheck } from "react-icons/fa";
import { FiCpu } from "react-icons/fi";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import toast, { Toaster } from "react-hot-toast";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { okaidia } from "@uiw/codemirror-themes-all";
import { lineNumbers } from "@codemirror/view";
import { BACKEND_URL } from "../utils";
const Spinner = () => (
  <svg className="animate-spin h-8 w-8 text-green-600"
    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25"></circle>
    <path fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      className="opacity-75"/>
  </svg>
);

const CodeBlock = ({ language, code }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      toast.success("Code copied!");
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="relative my-4 rounded-xl bg-orange-100 shadow border border-orange-200">
      <button
        onClick={handleCopy}
        className="absolute right-2 top-2 bg-green-100 hover:bg-green-200 px-3 py-1.5 rounded-md text-sm flex items-center gap-2 z-10 transition"
      >
        {copied ? <FaCheck className="text-green-700" /> : <FaCopy />}
        {copied ? "Copied!" : "Copy"}
      </button>
      <SyntaxHighlighter
        style={oneLight}
        language={language}
        PreTag="div"
        wrapLines
        className="!p-4 !text-sm rounded"
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

function CodeReviewPage() {
  const [code, setCode] = useState(
    "function greet(name) {\n  console.log('Hello, ' + name);\n}"
  );
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!code.trim()) {
      toast.error("Please enter some code!");
      return;
    }
    setLoading(true);
    setReview("");
    try {
      const res = await axios.post(`${BACKEND_URL}/ai/get-review`, { code });
      setReview(res.data.result || "No review returned.");
    } catch (err) {
      toast.error("Error fetching review!");
      setReview(`### Error\n\n\`\`\`\n${err.message}\n\`\`\``);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-orange-50 min-h-screen text-gray-900 font-sans">
      <Toaster position="top-center" toastOptions={{
        style: { background: "#ffe4c2", color: "#b45309" },
      }} />
      {/* Header */}
      <header className="pt-14 pb-6 text-center">
        <h1 className="text-4xl font-extrabold text-green-700 mb-1">
          AI Code Reviewer
        </h1>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 flex flex-col md:flex-row gap-8">
        {/* Code Input */}
        <section className="md:w-1/2 flex flex-col h-[70vh] bg-white rounded-xl border border-orange-200 shadow-lg">
          <div className="p-4 bg-orange-100 rounded-t-xl border-b border-orange-200 text-base font-semibold text-orange-900">
            Enter your code
          </div>
          <div className="flex-grow overflow-auto">
            <CodeMirror
              value={code}
              height="100%"
              theme={okaidia}
              extensions={[javascript({ jsx: true }), lineNumbers()]}
              onChange={setCode}
              className="rounded-b-lg focus-within:ring-2 focus-within:ring-orange-400 transition"
            />
          </div>
          <div className="p-4 border-t border-orange-200">
            <button
              className="w-full flex items-center justify-center gap-2 bg-green-600 text-white font-bold px-6 py-3 rounded-lg shadow hover:bg-green-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? <><Spinner /> Reviewing...</> : "Generate Review"}
            </button>
          </div>
        </section>
        {/* AI Review */}
        <section className="md:w-1/2 flex flex-col h-[70vh] bg-white rounded-xl border border-orange-200 shadow-lg">
          <div className="p-4 bg-orange-100 rounded-t-xl border-b border-orange-200 text-base font-semibold text-orange-900">
            AI Generated Review
          </div>
          <div className="flex-grow overflow-y-auto p-6 space-y-4">
            {loading ? (
              <div className="flex flex-col gap-4 items-center justify-center h-full text-green-700">
                <Spinner />
                <p>Analyzing your code...</p>
              </div>
            ) : review ? (
              <article className="prose prose-green max-w-none">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    code({ node, inline, className, children, ...props }) {
                      const match = /language-(\w+)/.exec(className || "");
                      return !inline && match ? (
                        <CodeBlock
                          language={match[1]}
                          code={String(children).replace(/\n$/, "")}
                        />
                      ) : (
                        <code className="bg-orange-50 text-orange-900 px-1.5 py-1 rounded" {...props}>
                          {children}
                        </code>
                      );
                    },
                  }}
                >
                  {review}
                </ReactMarkdown>
              </article>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-green-600 text-center">
                <FiCpu size={48} className="mb-4" />
                <h3 className="text-xl font-semibold">Ready for your code</h3>
                <p>The AI review will appear here once generated.</p>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default CodeReviewPage;
