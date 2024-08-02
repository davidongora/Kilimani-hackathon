import React from "react";
import PropTypes from "prop-types";

// components
import TableDropdown from "components/Dropdowns/TableDropdown.js";

export default function CardTable({ color }) {
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0 mt-24">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                Development and Public Participation Projects
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Project
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Budget
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Status
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Participants
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Completion
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                ></th>
              </tr>
            </thead>
            <tbody>
              {projectData.map((project, index) => (
                <tr key={index}>
                  <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                    <img
                      src={project.img}
                      className="h-12 w-12 bg-white rounded-full border"
                      alt="..."
                    />{" "}
                    <span
                      className={
                        "ml-3 font-bold " +
                        (color === "light" ? "text-blueGray-600" : "text-white")
                      }
                    >
                      {project.name}
                    </span>
                  </th>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {project.budget}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <i
                      className={`fas fa-circle text-${project.statusColor} mr-2`}
                    ></i>{" "}
                    {project.status}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <div className="flex">
                      {project.participants.map((participant, participantIndex) => (
                        <img
                          key={participantIndex}
                          src={participant.img}
                          alt="..."
                          className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                        />
                      ))}
                    </div>
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <div className="flex items-center">
                      <span className="mr-2">{project.completion}%</span>
                      <div className="relative w-full">
                        <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                          <div
                            style={{ width: `${project.completion}%` }}
                            className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500`}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                    <TableDropdown />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

CardTable.defaultProps = {
  color: "light",
};

CardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};

const projectData = [
  {
    img: require("assets/img/team-4-470x470.png").default,
    name: "New Housing Project",
    budget: "$2,500,000",
    status: "pending",
    statusColor: "orange-500",
    participants: [
      { img: require("assets/img/team-1-800x800.jpg").default },
      { img: require("assets/img/team-2-800x800.jpg").default },
      { img: require("assets/img/team-3-800x800.jpg").default },
      { img: require("assets/img/team-4-470x470.png").default },
    ],
    completion: 60,
  },
  {
    img: require("assets/img/team-4-470x470.png").default,
    name: "Community Center",
    budget: "$1,200,000",
    status: "completed",
    statusColor: "emerald-500",
    participants: [
      { img: require("assets/img/team-1-800x800.jpg").default },
      { img: require("assets/img/team-2-800x800.jpg").default },
      { img: require("assets/img/team-3-800x800.jpg").default },
      { img: require("assets/img/team-4-470x470.png").default },
    ],
    completion: 100,
  },
  {
    img: require("assets/img/team-4-470x470.png").default,
    name: "Road Repair Initiative",
    budget: "$800,000",
    status: "delayed",
    statusColor: "red-500",
    participants: [
      { img: require("assets/img/team-1-800x800.jpg").default },
      { img: require("assets/img/team-2-800x800.jpg").default },
      { img: require("assets/img/team-3-800x800.jpg").default },
      { img: require("assets/img/team-4-470x470.png").default },
    ],
    completion: 50,
  },
  {
    img: require("assets/img/team-4-470x470.png").default,
    name: "Community Event",
    budget: "$10,000",
    status: "on schedule",
    statusColor: "teal-500",
    participants: [
      { img: require("assets/img/team-1-800x800.jpg").default },
      { img: require("assets/img/team-2-800x800.jpg").default },
      { img: require("assets/img/team-3-800x800.jpg").default },
      { img: require("assets/img/team-4-470x470.png").default },
    ],
    completion: 90,
  },
];

