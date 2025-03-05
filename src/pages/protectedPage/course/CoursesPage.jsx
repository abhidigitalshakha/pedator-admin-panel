import React, { useState } from "react";
import Table from "../../../components/Table";
import SearchBar from "../../../components/SearchBar";
import { courses, coursesColumns } from "../../../constants/global.constant";
import editbutton from "../../../assets/images/square-pen.png";
import viewbutton from "../../../assets/images/eye.png";
import deleteButton from "../../../assets/images/trash-2.png";
import listFilter from "../../../assets/images/list-filter.png";
import addButtonWhite from "../../../assets/images/plus-white.png";
import { Link } from "react-router-dom";
import { useCourses } from "../../../hooks/useCourseCategories";
import PediatorLoader from "../../../components/PediatorLoader";
import AddCourseModal from "../../../components/modals/AddCourseModal";
import EditCourseModal from "../../../components/modals/edit/EditCourseModal";

const CoursesPage = () => {
  const { data: courses, status, error } = useCourses();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const mockCourseData = {
    courseName: "React for Beginners",
    category: "Web Development",
    price: "99",
    duration: "6",
    instructor: "John Doe",
    status: true,
  };

  const handleUpdate = (updatedCourse) => {
    console.log("Updated Course Data:", updatedCourse);
    // Call API to update course in backend
  };

  if (status === "pending") {
    return <PediatorLoader/>;
  }

  if (status === "error") {
    return <p>Error: {error.message}</p>;
  }
  

  const handleAddCourse = (formData) => {
    console.log("Submitted Course Data:", formData);
    // Here, send the formData to your API
  };

  const renderRow = (item, index) => {
    console.log(item, "courser");
    return (
      <tr
        key={index}
        className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-[#e7f5f4]"
      >
        <td className="flex items-center gap-4 p-4">{index + 1}</td>
        <td className="hidden md:table-cell">{item.title}</td>
        <td className="hidden md:table-cell">{item.categoryId.name}</td>
        <td className="hidden md:table-cell">{item.subCategoryId.name}</td>
        <td className="hidden md:table-cell">{item?.mentorId?.firstName}</td>
        <td className="hidden md:table-cell">{item.status}</td>
        <td>
          <div className=" flex items-center gap-2">
            {/* view */}
            <Link
              to={"/courses/id"}
              title="View "
              className="cursor-pointer w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky"
            >
              <img src={viewbutton} alt="" width={16} height={16} />
            </Link>
            {/* edit */}
            <button
              onClick={() => {
                setSelectedCourse(mockCourseData);
                setIsEditModalOpen(true);
                title = "Edit ";
                className =
                  "cursor-pointer w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky";
              }}
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
          Courses
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4  w-full md:w-auto">
          <SearchBar />
          <div className=" flex items-center gap-4 self-end">
            <button className="cursor-pointer w-8 h-8 flex items-center justify-center rounded-full bg-[#108e88] hover:scale-105 p-1 transition-all duration-300">
              <img src={listFilter} alt="" className="w-6" />
            </button>

            <button onClick={() => setIsModalOpen(true)} className="cursor-pointer flex items-center justify-center rounded-full border pr-6 pl-4 py-1 gap-2 bg-[#108e88] hover:scale-105 text-white transition-all duration-300 font-bold text-xl">
              <img src={addButtonWhite} alt="" className="w-6" />
              Add New
            </button>
          </div>
        </div>
      </div>
      <Table columns={coursesColumns} renderRow={renderRow} data={courses} />
      {/* Course Modal */}
      <AddCourseModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleAddCourse} />

      <EditCourseModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        courseData={selectedCourse}
        onUpdate={handleUpdate}
      />
    </div>
  );
};

export default CoursesPage;
