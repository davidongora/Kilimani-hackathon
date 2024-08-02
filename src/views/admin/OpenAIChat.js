// components/OpenAIChat.js
import React, { useState } from 'react';
// import { OpenAI } from 'openai';

// const openai = new OpenAI(process.env.OPENAI_API_KEY);

export default function OpenAIChat() {
  const [prompt, setPrompt] = useState('');
  // const [response, setResponse] = useState('');

  const handlePrompt = async () => {
    try {
      // const result = await openai.completions.create({
      //   model: 'text-davinci-003',
      //   prompt,
      //   max_tokens: 150,
      // });
      // setResponse(result.choices[0].text.trim());
    } catch (error) {
      console.error('Error fetching response from OpenAI:', error);
    }
  };

  return (
    <div className="p-4 border rounded-md shadow-sm mt-24 mb-24">
      <textarea
        rows="4"
        className="w-full p-2 border rounded-md mb-24"
        placeholder="Type your prompt here..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button
        className="mt-2 px-4 py-2 text-white rounded-md"
        onClick={handlePrompt}
      >
        Get Response
      </button>
      <div className="mt-4 p-2 border-t">
        <p className="font-semibold">Response:</p>
        {/* <p>{response}</p> */}
      </div>
    </div>
  );
}
