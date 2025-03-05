import React from "react";

const state = {
  _id: "668c3759afbde38ae389cccb",
  countryId: "668c2851cc1afceb97364144",
  countryName: "India",
  name: "CG",
  status: true,
  createdAt: "2024-07-08T19:00:41.613Z",
  updatedAt: "2024-07-08T19:00:41.613Z",
};

const StateDetailPage = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full text-center">
        <h1 class=" hidden md:block text-3xl md:text-5xl font-semibold text-[#108e88] border-b-4 w-fit mx-auto pb-3 mb-8">
          State
        </h1>
        {/* State Name */}
        <div className="flex items-center justify-between border my-2 px-4 border-gray-300 rounded-md py-2">
          <p className="text-gray-600">State Name:</p>
          <h2 className="text-3xl font-bold text-[#108e88]">{state.name}</h2>
        </div>

        {/* Associated Country */}
        <div className="flex items-center justify-between border my-2 px-4 border-gray-300 rounded-md py-2">
          <p className="text-gray-600">Country Name:</p>
          <p className="text-lg text-gray-700">{state.countryName}</p>
        </div>

        {/* Status Badge */}
        <div className="flex items-center justify-between border my-2 px-4 border-gray-300 rounded-md py-2">
          <p className="text-gray-600">Status:</p>
          <span
            className={`px-3 py-1 text-sm font-semibold rounded-full inline-block ${
              state.status
                ? "bg-green-100 text-green-600"
                : "bg-red-100 text-red-600"
            }`}
          >
            {state.status ? "Active" : "Inactive"}
          </span>
        </div>

        {/* Created & Updated Dates */}
        <div className="mt-4 border-t pt-4 text-gray-700 text-sm">
          <div className="flex items-center justify-between border my-2 px-4 border-gray-300 rounded-md py-2">
            <span className="font-semibold text-gray-600">Created At:</span>{" "}
            <p>{new Date(state.createdAt).toLocaleDateString()}</p>
          </div>
          <div className="flex items-center justify-between border my-2 px-4 border-gray-300 rounded-md py-2">
            <span className="font-semibold text-gray-600">Updated At:</span>{" "}
            <p>{new Date(state.updatedAt).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StateDetailPage;
