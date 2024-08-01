import React, { useEffect, useRef } from "react";

function MapExample() {
  const mapRef = useRef(null);

  useEffect(() => {
    const loadMap = () => {
      const google = window.google;
      const mapElement = mapRef.current;
      const lat = -1.2921;
      const lng = 36.7824;
      const myLatlng = new google.maps.LatLng(lat, lng);

      const mapOptions = {
        zoom: 14,
        center: myLatlng,
        scrollwheel: false,
        zoomControl: true,
        styles: [
          {
            featureType: "administrative",
            elementType: "labels.text.fill",
            stylers: [{ color: "#444444" }],
          },
          {
            featureType: "landscape",
            elementType: "all",
            stylers: [{ color: "#f2f2f2" }],
          },
          {
            featureType: "poi",
            elementType: "all",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "road",
            elementType: "all",
            stylers: [{ saturation: -100 }, { lightness: 45 }],
          },
          {
            featureType: "road.highway",
            elementType: "all",
            stylers: [{ visibility: "simplified" }],
          },
          {
            featureType: "road.arterial",
            elementType: "labels.icon",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "transit",
            elementType: "all",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "water",
            elementType: "all",
            stylers: [{ color: "#4299e1" }, { visibility: "on" }],
          },
        ],
      };

      const map = new google.maps.Map(mapElement, mapOptions);

      const markers = [
        { position: { lat: -1.281, lng: 36.7824 }, title: "Kilimani Center", type: "existing" },
        { position: { lat: -1.301, lng: 36.7844 }, title: "Kilimani Market", type: "existing" },
        { position: { lat: -1.2941, lng: 36.7804 }, title: "Kilimani Park", type: "existing" },
        { position: { lat: -1.3071, lng: 36.7854 }, title: "Kilimani Plaza", type: "existing" },
        { position: { lat: -1.281, lng: 36.7824 }, title: "New Development 1", type: "development" },
        { position: { lat: -1.301, lng: 36.7844 }, title: "New Development 2", type: "development" },
        { position: { lat: -1.2941, lng: 36.7804 }, title: "New Development 3", type: "development" },
        { position: { lat: -1.2971, lng: 36.7854 }, title: "New Development 4", type: "development" },
      ];

      markers.forEach((markerData) => {
        const icon = markerData.type === "development" 
          ? "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
          : "http://maps.google.com/mapfiles/ms/icons/red-dot.png";

        const marker = new google.maps.Marker({
          position: markerData.position,
          map: map,
          animation: google.maps.Animation.DROP,
          title: markerData.title,
          icon: icon,
        });

        const infowindow = new google.maps.InfoWindow({
          content: `<div class="info-window-content"><h2>${markerData.title}</h2></div>`,
        });

        marker.addListener("click", () => {
          infowindow.open(map, marker);
        });
      });
    };

    if (window.google) {
      loadMap();
    } else {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY`;
      script.async = true;
      script.defer = true;
      script.onload = loadMap;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <>
      <div className="relative w-full rounded h-600-px mt-24">
        <div className="ml- mt-12">
          <b>Detailed Map of Kilimani area showing on going projects and lands subjected to leasing</b>
        </div>
        <div className="rounded h-full -mt-8" ref={mapRef} />
      </div>
      <div className="relative w-full rounded h-600-px" style={{ marginTop: "120px" }}>
      <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3 className="font-semibold text-base text-blueGray-700">Lands parcels subject To leasing</h3>
              </div>
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
          <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="flex flex-wrap items-center">
              
              <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                <button
                  className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  See all
                </button>
              </div>
            </div>
          </div>
          <div className="block w-full overflow-x-auto">
            <table className="items-center w-full bg-transparent border-collapse">
              <thead>
                <tr>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Land Name/Serial
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Location
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Size (Acres)
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Kilimani Land 1', location: 'Kilimani Rd', size: 4.5 },
                  { name: 'Kilimani Land 2', location: 'Argwings Kodhek Rd', size: 3.9 },
                  { name: 'Kilimani Land 3', location: 'Denis Pritt Rd', size: 3.5 },
                  { name: 'Kilimani Land 4', location: 'Ngong Rd', size: 2.1 },
                  { name: 'Kilimani Land 5', location: 'Lenana Rd', size: 1.8 },
                ].map((land, index) => (
                  <tr key={index}>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                      {land.name}
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {land.location}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {land.size}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <button
                        className="bg-green-500  text-white active:bg-green-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => alert(`Details for ${land.name}: Expected completion: 2024, Contractor: XYZ Ltd.`)}
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              </table>
          </div>
        </div>
      </div>
      
      <div className="block w-full overflow-x-auto -mt-24 mb-8">
      <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3 className="font-semibold text-base text-blueGray-700 mb-8">Lands parcels subject To leasing</h3>
              </div>
            <table className="items-center w-full bg-transparent border-collapse">
              <thead>
                <tr>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Land Name/Serial
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Location
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Size (Acres)
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Project A', location: 'Kilimani Rd', status: '50% Complete' },
                  { name: 'Project B', location: 'Argwings Kodhek Rd', status: '30% Complete' },
                  { name: 'Project C', location: 'Denis Pritt Rd', status: '70% Complete' },
                  { name: 'Project D', location: 'Ngong Rd', status: '10% Complete' },
                  { name: 'Project E', location: 'Lenana Rd', status: '90% Complete' },
                ].map((project, index) => (
                  <tr key={index}>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                      {project.name}
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {project.location}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {project.status}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <button
                        className="bg-green-500 text-white active:bg-green-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => alert(`Details for ${project.name}: Expected completion: 2024, Contractor: ABC Ltd.`)}
                        >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        {/* </div> */}
      {/* // </div> */}
       
      
    </>
  );
}

export default MapExample;
