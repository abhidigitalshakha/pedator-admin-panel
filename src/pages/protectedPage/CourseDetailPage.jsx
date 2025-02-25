import React, { useState } from "react";

const courseData = {
  title: "Full Stack Web Development",
  description:
    "Learn to build modern web applications using HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB.",
  thumbnail: "https://source.unsplash.com/500x300/?technology,code",
  duration: "6 Months",
  price: "$499",
  mentors: [
    {
      id: 1,
      name: "Sophia Williams",
      expertise: "React & Next.js",
      photo: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      id: 2,
      name: "James Anderson",
      expertise: "Node.js & Express",
      photo: "https://randomuser.me/api/portraits/men/46.jpg",
    },
  ],
  learners: [
    {
      id: 1,
      name: "Alice Johnson",
      email: "mailto:alice@example.com",
      photo: "https://randomuser.me/api/portraits/women/47.jpg",
    },
    {
      id: 2,
      name: "Mark Wilson",
      email: "mailto:mark@example.com",
      photo: "https://randomuser.me/api/portraits/men/48.jpg",
    },
    {
      id: 3,
      name: "Emma Brown",
      email: "mailto:emma@example.com",
      photo: "https://randomuser.me/api/portraits/women/49.jpg",
    },
  ],
};

const CourseDetailPage = () => {
  const [course, setCourse] = useState(courseData);

  //   Remove Mentor
  const removeMentor = (id) => {
    setCourse({
      ...course,
      mentors: course.mentors.filter((mentor) => mentor.id !== id),
    });
  };

  // Remove Learner
  const removeLearner = (id) => {
    setCourse({
      ...course,
      learners: course.learners.filter((learner) => learner.id !== id),
    });
  };

  return (
    <div className=" bg-gray-100 p-6 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full">

        <div className="flex w-full justify-between">
          {/* {/ Course Header /} */}
          <div className="flex flex-col items-start">
            <img
              src={course.thumbnail}
              alt={course.title}
              className="w-full rounded-lg shadow-md"
            />
            <h2 className="text-2xl font-bold text-gray-800 mt-4">
              {course.title}
            </h2>
            <p className="text-gray-600 text-center">{course.description}</p>
            <p className="mt-2 font-semibold text-blue-600">
              Duration: {course.duration}
            </p>
            <p className="text-lg font-bold text-green-600">{course.price}</p>
          </div>

          {/* {/ Admin Actions /} */}
          <div className=" flex items-center self-end gap-8 justify-between">
            <button className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition">
              Edit Course
            </button>
            <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition">
              Remove Course
            </button>
          </div>
        </div>

        {/* {/ Mentors Section /} */}
        <div className="mt-6 border-t pt-4">
          <h3 className="text-xl font-semibold text-gray-800 flex justify-between">
            Mentors
          </h3>
          <div className="mt-2 flex flex-wrap gap-4">
            {course.mentors.map((mentor) => (
              <div
                key={mentor.id}
                className="flex items-center p-3 border rounded-lg shadow-sm hover:bg-gray-100 transition relative"
              >
                <img
                  src={mentor.photo}
                  alt={mentor.name}
                  className="w-12 h-12 rounded-full border-2 border-blue-500"
                />
                <div className="ml-3">
                  <p className="font-semibold">{mentor.name}</p>
                  <p className="text-sm text-gray-500">{mentor.expertise}</p>
                </div>
                <button
                  onClick={() => removeMentor(mentor.id)}
                  className="absolute top-1 right-1 bg-red-500 text-white text-xs px-2 py-1 rounded-md hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* {/ Enrolled Learners /} */}
        <div className="mt-6 border-t pt-4">
          <h3 className="text-xl font-semibold text-gray-800 flex justify-between">
            Enrolled Learners
          </h3>
          <div className="mt-2">
            {course.learners.map((learner) => (
              <div
                key={learner.id}
                className="flex items-center p-3 border-b border-gray-200 hover:bg-gray-100 transition relative"
              >
                <img
                  src={learner.photo}
                  alt={learner.name}
                  className="w-10 h-10 rounded-full border-2 border-green-500"
                />
                <div className="ml-3">
                  <p className="font-semibold">{learner.name}</p>
                  <p className="text-sm text-gray-500">{learner.email}</p>
                </div>
                <button
                  onClick={() => removeLearner(learner.id)}
                  className="absolute top-1 right-1 bg-red-500 text-white text-xs px-2 py-1 rounded-md hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;
