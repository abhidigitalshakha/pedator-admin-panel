import React from "react";

const category = {
  _id: "669224039b2014b2ae7b2919",
  name: "BANK",
  status: true,
  createdAt: "2024-07-13T06:51:47.277Z",
  updatedAt: "2024-07-13T06:51:47.277Z",
  __v: 0,
  themeColor: "#59A7EE",
  displayLevel: "ALL",
  icon: "",
  textColor: "#000000",
};

const CourseCategoryDetailPage = () => {
  return (
    <div className=" flex justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full">
      <h1 class=" hidden md:block text-3xl md:text-5xl font-semibold text-[#108e88] border-b-4 w-fit mx-auto pb-3 mb-8">
          Category
        </h1>
        {/* Category Icon (If Available) */}
        {category.icon ? (
          <img
            src={category.icon}
            alt="Category Icon"
            className="w-16 h-16 mx-auto mb-4"
          />
        ) : (
          <div
            className="w-16 h-16 mb-4 rounded-full flex items-center justify-center text-white font-bold text-2xl"
            style={{ backgroundColor: category.themeColor }}
          >
            {category.name.charAt(0)}
          </div>
        )}

        {/* Category Name */}
        <div className="flex items-center justify-between border my-2 px-4 border-gray-300 rounded-md py-2">
          <p className="text-gray-600">Category Name:</p>
          <h2 className="text-3xl font-bold text-[#108e88]">{category.name}</h2>
        </div>

        {/* Status Badge */}
        <div className="flex items-center justify-between border my-2 px-4 border-gray-300 rounded-md py-2">
          <p className="text-gray-600">Status:</p>
          <span
            className={`px-3 py-1 text-sm font-semibold rounded-full inline-block ${
              category.status
                ? "bg-green-100 text-green-600"
                : "bg-red-100 text-red-600"
            }`}
          >
            {category.status ? "Active" : "Inactive"}
          </span>
        </div>

        {/* Display Level */}
        <div className="flex items-center justify-between border my-2 px-4 border-gray-300 rounded-md py-2">
          <span className="text-gray-600 font-semibold">Display Level: </span>
          <span className="px-2 py-1 text-sm font-medium bg-blue-100 text-blue-600 rounded-md">
            {category.displayLevel}
          </span>
        </div>

        {/* Created & Updated Dates */}
        <div className="mt-4 border-t pt-4 text-gray-700 text-sm">
          <div className="flex items-center justify-between border my-2 px-4 border-gray-300 rounded-md py-2">
            <span className="font-semibold text-gray-600">Created At:</span>{" "}
            <p>{new Date(category.createdAt).toLocaleDateString()}</p>
          </div>
          <div className="flex items-center justify-between border my-2 px-4 border-gray-300 rounded-md py-2">
            <span className="font-semibold text-gray-600">Updated At:</span>{" "}
            <p>{new Date(category.updatedAt).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCategoryDetailPage;
