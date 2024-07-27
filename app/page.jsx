"use client";

import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault()
    console.log("text:", text);

    try {
      const response = await fetch('/api/new', {
        method: 'POST',
        body: JSON.stringify({
          text
        })
      })

      if (response.ok) {
        //? Manuscript added
        setText("")
      }
    } catch (error) {
      console.log(error);

    }
  }


  return (
    <main className="w-full flex flex-col">
      <header className="head_text  text-center">Manuscripts</header>
      <p className="mt-5 px-3 text-gray-400  text-center sm:text-xl">
        Share your hidden wisdom; it may hold the greatest value. Expressing
        these thoughts not only lifts the burden of secrecy but also enriches
        others with your unique perspective. Your insights could inspire, guide,
        or transform someone’s life. Don’t let fear or doubt keep your wisdom
        concealed; embrace the chance to contribute.
      </p>
      <form className="w-full p-3 flex flex-col gap-2" onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={handleChange}
          className="text-slate-300  h-40 p-4 border bg-slate-800 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          placeholder="Type your text here..."
          autoFocus
        />
        <input
          type="submit"
          value="Submit"
          className="bg-slate-500 p-2 rounded-lg w-20 "
        />
      </form>
    </main>
  );
}
