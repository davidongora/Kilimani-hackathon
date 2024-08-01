// src/views/admin/Settings.js
import React from 'react';
import OpenAIChat from './OpenAIChat';
import LearningContent from './LearningContent';

export default function Learn() {
  return (
    <>
      <div className="flex flex-wrap mt-48 mb-24">
        <div className="w-full lg:w-8/12 px-4">
          <OpenAIChat />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <LearningContent />
        </div>
      </div>
    </>
  );
}
