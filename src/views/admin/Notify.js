import React from 'react';
import { ExclamationCircleIcon, LightBulbIcon,  ChatBubbleLeftIcon } from '@heroicons/react/24/outline';


const notifications = [
  {
    id: 1,
    type: 'alert',
    title: 'Power Blackout Scheduled',
    message: 'A power blackout is scheduled for tomorrow from 10 AM to 4 PM.',
    icon: <ExclamationCircleIcon className="h-6 w-6 text-white" />,
    bgColor: 'bg-red-600'
  },
  {
    id: 2,
    type: 'event',
    title: 'Tree Planting Event',
    message: 'Join us for a tree planting event at Central Park this Saturday at 9 AM.',
    icon: <LightBulbIcon className="h-6 w-6 text-black" />,
    bgColor: 'bg-green-800'
  },
  {
    id: 3,
    type: 'forum',
    title: 'Community Forum',
    message: 'Attend the community forum on urban development at the Kilimani Community Hall on Friday.',
    icon: <ChatBubbleLeftIcon className="h-6 w-6 text-white" />,
    bgColor: 'bg-blue-600'
  },
  {
    id: 3,
    type: 'forum',
    title: 'Community Forum',
    message: 'Attend the community forum on urban development at the Kilimani Community Hall on Friday.',
    icon: <ChatBubbleLeftIcon className="h-6 w-6 text-white" />,
    bgColor: 'bg-blue-600'
  },
  {
    id: 3,
    type: 'forum',
    title: 'Community Forum',
    message: 'Attend the community forum on urban development at the Kilimani Community Hall on Friday.',
    icon: <ChatBubbleLeftIcon className="h-6 w-6 text-white" />,
    bgColor: 'bg-blue-600'
  },
  {
    id: 3,
    type: 'forum',
    title: 'Community Forum',
    message: 'Attend the community forum on urban development at the Kilimani Community Hall on Friday.',
    icon: <ChatBubbleLeftIcon className="h-6 w-6 text-white" />,
    bgColor: 'bg-blue-600'
  },
  {
    id: 3,
    type: 'forum',
    title: 'Community Forum',
    message: 'Attend the community forum on urban development at the Kilimani Community Hall on Friday.',
    icon: <ChatBubbleLeftIcon className="h-6 w-6 text-white" />,
    bgColor: 'bg-blue-600'
  }
];

const Notify = () => {
  return (
    <div className="space-y-4 mt-32 mb-12">
      {notifications.map(notification => (
        <div
          key={notification.id}
          className={`flex items-center p-4 rounded-lg shadow-lg ${notification.bgColor} text-white`}
        >
          <div className="flex-shrink-0">
            {notification.icon}
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold">{notification.title}</h3>
            <p className="mt-1 text-sm">{notification.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Notify;
