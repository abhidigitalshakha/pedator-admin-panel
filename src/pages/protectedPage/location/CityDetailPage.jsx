import React from "react";

const city = {
  _id: "668c376fafbde38ae389cccd",
  countryId: "668c2851cc1afceb97364144",
  countryName: "India",
  stateId: "668c3759afbde38ae389cccb",
  stateName: "CG",
  name: "Bilaspur",
  status: true,
  createdAt: "2024-07-08T19:01:03.532Z",
  updatedAt: "2024-07-08T19:01:03.532Z",
};

const CityDetailPage = () => {
  return (
    <div className=" flex justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full text-center">
        <h1 class=" hidden md:block text-3xl md:text-5xl font-semibold text-[#108e88] border-b-4 w-fit mx-auto pb-3 mb-8">
          City
        </h1>
        {/* City Name */}
        <div className="flex items-center justify-between border my-2 px-4 border-gray-300 rounded-md py-2">
          <p className="text-gray-600">City Name:</p>
          <h2 className="text-3xl font-bold text-[#108e88]">{city.name}</h2>
        </div>

        {/* Country & State */}
        <div className="flex items-center justify-between border my-2 px-4 border-gray-300 rounded-md py-2">
          <p className="text-gray-600">State Name:</p>
          <p className="text-lg text-gray-700">{city.stateName}</p>
        </div>
        <div className="flex items-center justify-between border my-2 px-4 border-gray-300 rounded-md py-2">
          <p className="text-gray-600">Country Name:</p>
          <p className="text-lg text-gray-700">{city.countryName}</p>
        </div>

        {/* Status Badge */}
        <div className="flex items-center justify-between border my-2 px-4 border-gray-300 rounded-md py-2">
          <p className="text-gray-600">Status:</p>
          <span
            className={`px-3 py-1 text-sm font-semibold rounded-full inline-block ${
              city.status
                ? "bg-green-100 text-green-600"
                : "bg-red-100 text-red-600"
            }`}
          >
            {city.status ? "Active" : "Inactive"}
          </span>
        </div>

        {/* Created & Updated Dates */}
        <div className="mt-4 border-t pt-4 text-gray-700 text-sm">
          <div className="flex items-center justify-between border my-2 px-4 border-gray-300 rounded-md py-2">
            <span className="font-semibold text-gray-600">Created At:</span>{" "}
            <p>{new Date(city.createdAt).toLocaleDateString()}</p>
          </div>
          <div className="flex items-center justify-between border my-2 px-4 border-gray-300 rounded-md py-2">
            <span className="font-semibold text-gray-600">Updated At:</span>{" "}
            <p>{new Date(city.updatedAt).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityDetailPage;
