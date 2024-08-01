'use client'

import { useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';


const projects = [
  { id: 1, name: 'Community Cleanup', description: 'Cleaning the streets and parks of Kilimani.' },
  { id: 2, name: 'Tree Planting', description: 'Planting trees in Kilimani to improve air quality.' },
  { id: 3, name: 'School Renovation', description: 'Renovating schools in Kilimani to improve education.' },
  { id: 1, name: 'Community Cleanup', description: 'Cleaning the streets and parks of Kilimani.' },
  { id: 2, name: 'Tree Planting', description: 'Planting trees in Kilimani to improve air quality.' },
  { id: 3, name: 'School Renovation', description: 'Renovating schools in Kilimani to improve education.' },
  { id: 1, name: 'Community Cleanup', description: 'Cleaning the streets and parks of Kilimani.' },
  { id: 2, name: 'Tree Planting', description: 'Planting trees in Kilimani to improve air quality.' },
  { id: 3, name: 'School Renovation', description: 'Renovating schools in Kilimani to improve education.' },
  { id: 1, name: 'Community Cleanup', description: 'Cleaning the streets and parks of Kilimani.' },
  { id: 2, name: 'Tree Planting', description: 'Planting trees in Kilimani to improve air quality.' },
  { id: 3, name: 'School Renovation', description: 'Renovating schools in Kilimani to improve education.' },
  { id: 1, name: 'Community Cleanup', description: 'Cleaning the streets and parks of Kilimani.' },
  { id: 2, name: 'Tree Planting', description: 'Planting trees in Kilimani to improve air quality.' },
  { id: 3, name: 'School Renovation', description: 'Renovating schools in Kilimani to improve education.' },

];
// Modal.setAppElement('#root');

export default function Contribution() {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');

  const openModal = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setSelectedProject(null);
    setPhoneNumber('');
  };

  const handleDonate = (e) => {
    e.preventDefault();
    console.log(`Donated to ${selectedProject.name} with phone number: ${phoneNumber}`);
    closeModal();
  };

  return (
    <div className="relative mx-auto mb-42 px-4 sm:px-6 lg:px-8">
      <div className="text-gray-800 mb-24">
        <h1 className="text-3xl font-bold mb-6 mt-32">Projects in Kilimani</h1>
        <div className="overflow-x-auto h-[calc(100vh-120px)] relative">
          <table className="w-full bg-white border border-gray-200 shadow-md rounded-lg mb-24">
            <thead className="bg-indigo-600 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Project Name</th>
                <th className="py-3 px-4 text-left">Description</th>
                <th className="py-3 px-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {projects.map((project) => (
                <tr key={project.id} className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="py-3 px-4 text-gray-800 font-medium">{project.name}</td>
                  <td className="py-3 px-4 text-gray-600">{project.description}</td>
                  <td className="py-3 px-4 text-center">
                    <button
                      onClick={() => openModal(project)}
                      className="bg-indigo-500 text-white hover:bg-indigo-600 focus:outline-none text-xs font-semibold uppercase px-4 py-2 rounded shadow-sm transition-colors duration-150"
                    >
                      Donate
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Dialog open={open} onClose={closeModal} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <ExclamationTriangleIcon aria-hidden="true" className="h-6 w-6 text-red-600" />
                  </div>
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                      Donate to {selectedProject?.name}
                    </DialogTitle>
                    <div className="mt-2">
                      <form onSubmit={handleDonate}>
                        <label htmlFor="phone" className="block text-lg font-medium mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          className="w-full p-2 border border-gray-300 rounded-md mb-4"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          required
                        />
                        <button
                          type="submit"
                          className="bg-green-500 text-white hover:bg-green-600 focus:outline-none text-xs font-semibold uppercase px-4 py-2 rounded shadow-sm transition-colors duration-150"
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  onClick={closeModal}
                  className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                >
                  Cancel
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

// export default Contribution;
