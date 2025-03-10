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
  useCourseCategories,
  useCourses,
} from "../../../hooks/useCourseCategories";
import { courseCategoryColumns } from "../../../constants/global.constant";
import PediatorLoader from "../../../components/PediatorLoader";
import AddCourseCategoryModal from "../../../components/modals/add/AddCourseCategoryModal";
import EditCourseCategoryModal from "../../../components/modals/edit/EditCourseCategoryModal";

const CourseCategory = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleAddCategory = (categoryData) => {
    console.log("Course Category Data:", categoryData);
    // Send this data to your backend or handle it as needed
  };

  const handleEditCategory = (updatedData) => {
    console.log("Updated Category Data:", updatedData);
    // Send updated data to backend
  };

  const { data: courseCategory, status, error } = useCourseCategories();

  if (status === "pending") {
    return <PediatorLoader />;
  }

  if (status === "error") {
    return <p>Error: {error.message}</p>;
  }

  const openEditModal = (category) => {
    setSelectedCategory(category);
    setIsEditModalOpen(true);
  };

  const renderRow = (item, index) => {
    console.log(item, "course category");

    return (
      <tr
        key={index}
        className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-[#e7f5f4]"
      >
        <td className="flex items-center gap-4 p-4">{index + 1}</td>
        <td className="hidden md:table-cell">{item?.name}</td>
        <td className="hidden md:table-cell">{item?.status ? "Active" : "Inactive"}</td>
        <td>
          <div className=" flex items-center gap-2">
            {/* view */}
            <Link
              to={"/course-category/id"}
              title="View "
              className="cursor-pointer w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky"
            >
              <img src={viewbutton} alt="" width={16} height={16} />
            </Link>
            {/* edit */}
            <button
            onClick={() => openEditModal(item)}
              title="Edit "
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
          Course Category
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4  w-full md:w-auto">
          <SearchBar />
          <div className=" flex items-center gap-4 self-end">
            <button className="cursor-pointer w-8 h-8 flex items-center justify-center rounded-full bg-[#108e88] hover:scale-105 p-1 transition-all duration-300">
              <img src={listFilter} alt="" className="w-6" />
            </button>

            <button
              onClick={() => setIsAddModalOpen(true)}
              className="cursor-pointer flex items-center justify-center rounded-full border pr-6 pl-4 py-1 gap-2 bg-[#108e88] hover:scale-105 text-white transition-all duration-300 font-bold text-xl"
            >
              <img src={addButtonWhite} alt="" className="w-6" />
              Add New
            </button>
          </div>
        </div>
      </div>
      <Table
        columns={courseCategoryColumns}
        renderRow={renderRow}
        data={courseCategory}
      />

      <AddCourseCategoryModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSubmit={handleAddCategory}
      />

       {/* Edit Category Modal */}
       {selectedCategory && (
        <EditCourseCategoryModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          onSubmit={handleEditCategory}
          categoryData={selectedCategory}
        />
      )}
    </div>
  );
};

export default CourseCategory;
