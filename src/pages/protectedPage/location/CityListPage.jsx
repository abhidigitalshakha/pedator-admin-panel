import React, { useState } from "react";
import Table from "../../../components/Table";
import SearchBar from "../../../components/SearchBar";
import editbutton from "../../../assets/images/square-pen.png";
import viewbutton from "../../../assets/images/eye.png";
import deleteButton from "../../../assets/images/trash-2.png";
import listFilter from "../../../assets/images/list-filter.png";
import addButtonWhite from "../../../assets/images/plus-white.png";
import { Link } from "react-router-dom";
import { cityColumns } from "../../../constants/global.constant";
import { useCities, useStates } from "../../../hooks/useLocation";
import PediatorLoader from "../../../components/PediatorLoader";
import AddCityModal from "../../../components/modals/add/AddCityModal";
import EditCityModal from "../../../components/modals/edit/EditCityModal";

const CityListPage = () => {
  const { data: cities, status, error } = useCities();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);

  if (status === "pending") {
    return <PediatorLoader />;
  }

  if (status === "error") {
    return <p>Error: {error.message}</p>;
  }

  const countries = [
    { _id: "1", name: "India" },
    { _id: "2", name: "USA" },
  ];

  const states = [
    { _id: "101", countryId: "1", name: "Maharashtra" },
    { _id: "102", countryId: "1", name: "Karnataka" },
    { _id: "201", countryId: "2", name: "California" },
  ];

  const handleAddCity = (cityData) => {
    console.log("New City Added:", cityData);
  };

  // Handle Edit City
  const handleEditCity = (city) => {
    setSelectedCity(city);
    setIsEditModalOpen(true);
  };

  // Handle Update City
  const handleUpdateCity = (updatedCity) => {
    console.log("City Updated:", updatedCity);
    setIsEditModalOpen(false);
  };

  const renderRow = (item, index) => {
    console.log(item, "citydata");
    return (
      <tr
        key={index}
        className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-[#e7f5f4]"
      >
        <td className="flex items-center gap-4 p-4">{index + 1}</td>
        <td className="hidden md:table-cell">{item?.name}</td>
        <td className="hidden md:table-cell">{item?.stateName}</td>
        <td className="hidden md:table-cell">{item?.countryName}</td>
        <td className="hidden md:table-cell">{item?.status ? "Active" : "Inactive"}</td>
        <td>
          <div className=" flex items-center gap-2">
            {/* view */}
            <Link
              to={"/city/id"}
              title="View "
              className="cursor-pointer w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky"
            >
              <img src={viewbutton} alt="" width={16} height={16} />
            </Link>
            {/* edit */}
            <button
              onClick={() => handleEditCity(item)}
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
          Cities
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
      <Table columns={cityColumns} renderRow={renderRow} data={cities} />
      <AddCityModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddCity}
        countries={countries}
        states={states}
      />

      {/* Edit City Modal */}
      <EditCityModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSubmit={handleUpdateCity}
        cityData={selectedCity}
        countries={countries}
        states={states}
      />
    </div>
  );
};

export default CityListPage;
