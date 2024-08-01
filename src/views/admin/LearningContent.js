// components/LearningContent.js
import React, { useState } from 'react';

const learningData = [
  { title: 'Introduction to Kilimani', content: 'Details about Kilimani history and demographics.' },
  { title: 'Community Initiatives', content: 'Information on local community projects and events.' },
  { title: 'Urban Planning Resources', content: 'Resources and tools for urban planning in Kilimani.' },
];

export default function LearningContent() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="flex flex-wrap gap-4">
      {learningData.map((item, index) => (
        <div
          key={index}
          className="w-full lg:w-1/3 border rounded-md shadow-sm cursor-pointer"
          onClick={() => setOpenIndex(index === openIndex ? null : index)}
        >
          <div className="p-4 border-b bg-gray-100 font-semibold">{item.title}</div>
          {openIndex === index && (
            <div className="p-4">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
