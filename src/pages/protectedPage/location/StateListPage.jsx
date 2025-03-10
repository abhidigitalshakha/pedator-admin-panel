import React, { useState } from "react";
import Table from "../../../components/Table";
import SearchBar from "../../../components/SearchBar";
import editbutton from "../../../assets/images/square-pen.png";
import viewbutton from "../../../assets/images/eye.png";
import deleteButton from "../../../assets/images/trash-2.png";
import listFilter from "../../../assets/images/list-filter.png";
import addButtonWhite from "../../../assets/images/plus-white.png";
import { Link } from "react-router-dom";
import {
  countryColumns,
  stateColumns,
} from "../../../constants/global.constant";
import { useStates } from "../../../hooks/useLocation";
import PediatorLoader from "../../../components/PediatorLoader";
import AddStateModal from "../../../components/modals/add/AddStateModal";
import EditStateModal from "../../../components/modals/edit/EditStateModal";

const StateListPage = () => {
  const { data: states, status, error } = useStates();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedState, setSelectedState] = useState(null);

  if (status === "pending") {
    return <PediatorLoader />;
  }

  if (status === "error") {
    return <p>Error: {error.message}</p>;
  }

  // Example list of countries (Replace with API data)
  const countries = [
    { id: "1", name: "India" },
    { id: "2", name: "USA" },
    { id: "3", name: "Canada" },
  ];

  // handle form edit
  const handleEdit = (state) => {
    setSelectedState(state); // Store selected state
    setEditModalOpen(true); // Open modal
  };

  // Handle form submission
  const handleAddState = (formData) => {
    console.log("State Submitted:", formData);
    // You can send formData to an API here
  };

  // Handle updating an existing state
  const handleUpdateState = (updatedState) => {
    console.log("Updated State Data:", updatedState);
    // API call to update the state
    setEditModalOpen(false); // Close modal after update
  };

  const renderRow = (item, index) => {
    console.log(item, "state");
    return (
      <tr
        key={index}
        className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-[#e7f5f4]"
      >
        <td className="flex items-center gap-4 p-4">{index + 1}</td>
        <td className="hidden md:table-cell">{item?.name}</td>
        <td className="hidden md:table-cell">{item?.countryName}</td>
        <td className="hidden md:table-cell">
          {item?.status ? "Active" : "Inactive"}
        </td>
        <td>
          <div className=" flex items-center gap-2">
            {/* view */}
            <Link
              to={"/state/id"}
              title="View "
              className="cursor-pointer w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky"
            >
              <img src={viewbutton} alt="" width={16} height={16} />
            </Link>
            {/* edit */}
            <button
              onClick={() => handleEdit(item)}
              title="Edit"
              className="cursor-pointer w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky"
            >
              <img src={editbutton} alt="" width={16} height={16} />
            </button>
            {/* delete */}
            <button
              title="Delete "
              className="cursor-pointer w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple"
            >
              <img src={deleteButton} alt="" width={16} height={16} />
            </button>
          </div>
        </td>
      </tr>
    );
  };

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 border border-gray-300 shadow-xl">
      <div className="flex items-center justify-between">
        <h1 className=" hidden md:block text-3xl md:text-5xl font-semibold text-[#108e88]">
          States
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4  w-full md:w-auto">
          <SearchBar />
          <div className=" flex items-center gap-4 self-end">
            <button className="cursor-pointer w-8 h-8 flex items-center justify-center rounded-full bg-[#108e88] hover:scale-105 p-1 transition-all duration-300">
              <img src={listFilter} alt="" className="w-6" />
            </button>

            <button
              onClick={() => setIsModalOpen(true)}
              className="cursor-pointer flex items-center justify-center rounded-full border pr-6 pl-4 py-1 gap-2 bg-[#108e88] hover:scale-105 text-white transition-all duration-300 font-bold text-xl"
            >
              <img src={addButtonWhite} alt="" className="w-6" />
              Add New
            </button>
          </div>
        </div>
      </div>
      <Table columns={stateColumns} renderRow={renderRow} data={states} />
      {/* Render the Modal When Open */}
      {isModalOpen && (
        <AddStateModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddState}
          countries={countries}
        />
      )}
      <EditStateModal
        isOpen={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        onSubmit={handleUpdateState}
        stateData={selectedState}
        countries={countries}
      />
    </div>
  );
};

export default StateListPage;
