// src/views/admin/Settings.js
import React, { useState } from 'react';
import LearningContent from './LearningContent';

export default function Learn() {
  const [userInput, setUserInput] = useState('');
  const [response, setResponse] = useState('');

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = () => {
    // Simulate generating a sample prompt response
    const sampleResponse = `You asked: "${userInput}". Here's a sample response.`;
    setResponse(sampleResponse);
  };

  return (
    <>
    <div className="bg-white">
      <div className="flex flex-wrap mt-48 mb-24">
        <div className="w-full lg:w-8/12 px-4">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Interactive Learning</h2>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userInput">
                Enter your prompt:
              </label>
              <input
                id="userInput"
                type="text"
                value={userInput}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Type your question here..."
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                onClick={handleSubmit}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Generate Response
              </button>
            </div>
            {response && (
              <div className="mt-4 p-4 bg-blue-100 rounded-lg shadow-md">
                <p className="text-gray-700">{response}</p>
              </div>
            )}
          </div>
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <LearningContent />
        </div>
        </div>
      </div>
    </>
  );
}
