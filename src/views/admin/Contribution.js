'use client'

const projects = [
  { id: 1, name: 'Community Cleanup', description: 'Cleaning the streets and parks of Kilimani.' },
  { id: 2, name: 'Tree Planting', description: 'Planting trees in Kilimani to improve air quality.' },
  { id: 3, name: 'School Renovation', description: 'Renovating schools in Kilimani to improve education.' },
  { id: 4, name: 'Community Cleanup', description: 'Cleaning the streets and parks of Kilimani.' },
  { id: 5, name: 'Tree Planting', description: 'Planting trees in Kilimani to improve air quality.' },
  { id: 6, name: 'School Renovation', description: 'Renovating schools in Kilimani to improve education.' },
  { id: 7, name: 'Community Cleanup', description: 'Cleaning the streets and parks of Kilimani.' },
  { id: 8, name: 'Tree Planting', description: 'Planting trees in Kilimani to improve air quality.' },
  { id: 9, name: 'School Renovation', description: 'Renovating schools in Kilimani to improve education.' },
  { id: 10, name: 'Community Cleanup', description: 'Cleaning the streets and parks of Kilimani.' },
  { id: 11, name: 'Tree Planting', description: 'Planting trees in Kilimani to improve air quality.' },
  { id: 12, name: 'School Renovation', description: 'Renovating schools in Kilimani to improve education.' },
  { id: 13, name: 'Community Cleanup', description: 'Cleaning the streets and parks of Kilimani.' },
  { id: 14, name: 'Tree Planting', description: 'Planting trees in Kilimani to improve air quality.' },
  { id: 15, name: 'School Renovation', description: 'Renovating schools in Kilimani to improve education.' },
];

export default function Contribution() {
  const handleDonate = () => {
    // Redirect to Paystack payment URL
    window.location.href = 'https://paystack.com/pay/dnh6w-nzvh';
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
                      onClick={handleDonate}
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
    </div>
  );
}
