import React, { useState } from "react";
import Table from "../../../components/Table";
import SearchBar from "../../../components/SearchBar";
import { tutorsColumns } from "../../../constants/global.constant";
import editbutton from "../../../assets/images/square-pen.png";
import viewbutton from "../../../assets/images/eye.png";
import deleteButton from "../../../assets/images/trash-2.png";
import listFilter from "../../../assets/images/list-filter.png";
import addButtonWhite from "../../../assets/images/plus-white.png";
import { Link } from "react-router-dom";
import { useMentors } from "../../../hooks/useMentors";
import PediatorLoader from "../../../components/PediatorLoader";
import AddMentorModal from "../../../components/modals/add/AddMentorModal";
import EditCourseModal from "../../../components/modals/edit/EditCourseModal";
import EditMentorModal from "../../../components/modals/edit/EditMentorModal";

const MentorsPage = () => {
  const [selectedMentor, setSelectedMentor] = useState(null);

  const mockMentorData = {
    username: "JohnDoe",
    registrationType: "emailPassword",
    email: "johndoe@example.com",
    mobileNumber: "",
    password: "",
    status: true,
  };

  const handleUpdate = (updatedMentor) => {
    console.log("Updated Mentor Data:", updatedMentor);
    // Call API to update mentor here
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const handleAddMentor = (mentorData) => {
    console.log("Mentor Data Submitted:", mentorData);
  };
  const { data: mentors, status, error } = useMentors();

  if (status === "pending") {
    return <PediatorLoader />;
  }

  if (status === "error") {
    return <p>Error: {error.message}</p>;
  }
  console.log(mentors.data, "courser");

  const renderRow = (item, index) => {
    return (
      <tr
        key={index}
        className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-[#e7f5f4]"
      >
        <td className="flex items-center gap-4 p-4">{index + 1}</td>
        <td className="hidden md:table-cell">{item.username}</td>
        <td className="hidden md:table-cell">{item.email}</td>
        <td className="hidden md:table-cell">{item.mobile}</td>
        <td>
          <div className=" flex items-center gap-2">
            {/* edit */}
            <Link
              to={"/mentors/id"}
              title="View "
              className="cursor-pointer w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky"
            >
              <img src={viewbutton} alt="" width={16} height={16} />
            </Link>
            <button onClick={() => {
              setSelectedMentor(mockMentorData);
              setIsEditModalOpen(true);
            }}  title="Edit "
            className="cursor-pointer w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky" >
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
          Mentors
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
      <Table columns={tutorsColumns} renderRow={renderRow} data={mentors} />
      <AddMentorModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddMentor}
      />
      <EditMentorModal
  isOpen={isEditModalOpen}
  onClose={() => setIsEditModalOpen(false)}
  mentorData={selectedMentor}  // Changed prop name for clarity
  onUpdate={handleUpdate}
/>
    </div>
  );
};

export default MentorsPage;
