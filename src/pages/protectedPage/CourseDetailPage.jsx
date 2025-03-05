// import React, { useState } from "react";

// const courseData = {
//   title: "Full Stack Web Development",
//   description:
//     "Learn to build modern web applications using HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB.",
//   thumbnail: "https://source.unsplash.com/500x300/?technology,code",
//   duration: "6 Months",
//   price: "$499",
//   mentors: [
//     {
//       id: 1,
//       name: "Sophia Williams",
//       expertise: "React & Next.js",
//       photo: "https://randomuser.me/api/portraits/women/45.jpg",
//     },
//     {
//       id: 2,
//       name: "James Anderson",
//       expertise: "Node.js & Express",
//       photo: "https://randomuser.me/api/portraits/men/46.jpg",
//     },
//   ],
//   learners: [
//     {
//       id: 1,
//       name: "Alice Johnson",
//       email: "mailto:alice@example.com",
//       photo: "https://randomuser.me/api/portraits/women/47.jpg",
//     },
//     {
//       id: 2,
//       name: "Mark Wilson",
//       email: "mailto:mark@example.com",
//       photo: "https://randomuser.me/api/portraits/men/48.jpg",
//     },
//     {
//       id: 3,
//       name: "Emma Brown",
//       email: "mailto:emma@example.com",
//       photo: "https://randomuser.me/api/portraits/women/49.jpg",
//     },
//   ],
// };

// const CourseDetailPage = () => {
//   const [course, setCourse] = useState(courseData);

//   //   Remove Mentor
//   const removeMentor = (id) => {
//     setCourse({
//       ...course,
//       mentors: course.mentors.filter((mentor) => mentor.id !== id),
//     });
//   };

//   // Remove Learner
//   const removeLearner = (id) => {
//     setCourse({
//       ...course,
//       learners: course.learners.filter((learner) => learner.id !== id),
//     });
//   };

//   return (
//     <div className=" bg-gray-100 p-6 flex justify-center items-center">
//       <div className="bg-white p-8 rounded-lg shadow-xl w-full">

//         <div className="flex w-full justify-between">
//           {/* {/ Course Header /} */}
//           <div className="flex flex-col items-start">
//             <img
//               src={course.thumbnail}
//               alt={course.title}
//               className="w-full rounded-lg shadow-md"
//             />
//             <h2 className="text-2xl font-bold text-gray-800 mt-4">
//               {course.title}
//             </h2>
//             <p className="text-gray-600 text-center">{course.description}</p>
//             <p className="mt-2 font-semibold text-blue-600">
//               Duration: {course.duration}
//             </p>
//             <p className="text-lg font-bold text-green-600">{course.price}</p>
//           </div>

//           {/* {/ Admin Actions /} */}
//           <div className=" flex items-center self-end gap-8 justify-between">
//             <button className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition">
//               Edit Course
//             </button>
//             <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition">
//               Remove Course
//             </button>
//           </div>
//         </div>

//         {/* {/ Mentors Section /} */}
//         <div className="mt-6 border-t pt-4">
//           <h3 className="text-xl font-semibold text-gray-800 flex justify-between">
//             Mentors
//           </h3>
//           <div className="mt-2 flex flex-wrap gap-4">
//             {course.mentors.map((mentor) => (
//               <div
//                 key={mentor.id}
//                 className="flex items-center p-3 border rounded-lg shadow-sm hover:bg-gray-100 transition relative"
//               >
//                 <img
//                   src={mentor.photo}
//                   alt={mentor.name}
//                   className="w-12 h-12 rounded-full border-2 border-blue-500"
//                 />
//                 <div className="ml-3">
//                   <p className="font-semibold">{mentor.name}</p>
//                   <p className="text-sm text-gray-500">{mentor.expertise}</p>
//                 </div>
//                 <button
//                   onClick={() => removeMentor(mentor.id)}
//                   className="absolute top-1 right-1 bg-red-500 text-white text-xs px-2 py-1 rounded-md hover:bg-red-600"
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* {/ Enrolled Learners /} */}
//         <div className="mt-6 border-t pt-4">
//           <h3 className="text-xl font-semibold text-gray-800 flex justify-between">
//             Enrolled Learners
//           </h3>
//           <div className="mt-2">
//             {course.learners.map((learner) => (
//               <div
//                 key={learner.id}
//                 className="flex items-center p-3 border-b border-gray-200 hover:bg-gray-100 transition relative"
//               >
//                 <img
//                   src={learner.photo}
//                   alt={learner.name}
//                   className="w-10 h-10 rounded-full border-2 border-green-500"
//                 />
//                 <div className="ml-3">
//                   <p className="font-semibold">{learner.name}</p>
//                   <p className="text-sm text-gray-500">{learner.email}</p>
//                 </div>
//                 <button
//                   onClick={() => removeLearner(learner.id)}
//                   className="absolute top-1 right-1 bg-red-500 text-white text-xs px-2 py-1 rounded-md hover:bg-red-600"
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourseDetailPage;

// import React, { useState } from "react";

// const courseData = {
//   title: "Full Stack Web Development",
//   description:
//     "Learn to build modern web applications using HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB.",
//   thumbnail: "https://source.unsplash.com/500x300/?technology,code",
//   duration: "6 Months",
//   price: "$499",
//   mentors: [
//     {
//       id: 1,
//       name: "Sophia Williams",
//       expertise: "React & Next.js",
//       photo: "https://randomuser.me/api/portraits/women/45.jpg",
//     },
//     {
//       id: 2,
//       name: "James Anderson",
//       expertise: "Node.js & Express",
//       photo: "https://randomuser.me/api/portraits/men/46.jpg",
//     },
//   ],
//   learners: [
//     {
//       id: 1,
//       name: "Alice Johnson",
//       email: "mailto:alice@example.com",
//       photo: "https://randomuser.me/api/portraits/women/47.jpg",
//     },
//     {
//       id: 2,
//       name: "Mark Wilson",
//       email: "mailto:mark@example.com",
//       photo: "https://randomuser.me/api/portraits/men/48.jpg",
//     },
//     {
//       id: 3,
//       name: "Emma Brown",
//       email: "mailto:emma@example.com",
//       photo: "https://randomuser.me/api/portraits/women/49.jpg",
//     },
//   ],
// };

// const CourseDetailPage = () => {
//   const [course, setCourse] = useState(courseData);

//   //   Remove Mentor
//   const removeMentor = (id) => {
//     setCourse({
//       ...course,
//       mentors: course.mentors.filter((mentor) => mentor.id !== id),
//     });
//   };

//   // Remove Learner
//   const removeLearner = (id) => {
//     setCourse({
//       ...course,
//       learners: course.learners.filter((learner) => learner.id !== id),
//     });
//   };

//   return (
//     <div className=" bg-gray-100 p-6 flex justify-center items-center">
//       <div className="bg-white p-8 rounded-lg shadow-xl w-full">

//         <div className="flex w-full justify-between">
//           {/* {/ Course Header /} */}
//           <div className="flex flex-col items-start">
//             <img
//               src={course.thumbnail}
//               alt={course.title}
//               className="w-full rounded-lg shadow-md"
//             />
//             <h2 className="text-2xl font-bold text-gray-800 mt-4">
//               {course.title}
//             </h2>
//             <p className="text-gray-600 text-center">{course.description}</p>
//             <p className="mt-2 font-semibold text-blue-600">
//               Duration: {course.duration}
//             </p>
//             <p className="text-lg font-bold text-green-600">{course.price}</p>
//           </div>

//           {/* {/ Admin Actions /} */}
//           <div className=" flex items-center self-end gap-8 justify-between">
//             <button className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition">
//               Edit Course
//             </button>
//             <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition">
//               Remove Course
//             </button>
//           </div>
//         </div>

//         {/* {/ Mentors Section /} */}
//         <div className="mt-6 border-t pt-4">
//           <h3 className="text-xl font-semibold text-gray-800 flex justify-between">
//             Mentors
//           </h3>
//           <div className="mt-2 flex flex-wrap gap-4">
//             {course.mentors.map((mentor) => (
//               <div
//                 key={mentor.id}
//                 className="flex items-center p-3 border rounded-lg shadow-sm hover:bg-gray-100 transition relative"
//               >
//                 <img
//                   src={mentor.photo}
//                   alt={mentor.name}
//                   className="w-12 h-12 rounded-full border-2 border-blue-500"
//                 />
//                 <div className="ml-3">
//                   <p className="font-semibold">{mentor.name}</p>
//                   <p className="text-sm text-gray-500">{mentor.expertise}</p>
//                 </div>
//                 <button
//                   onClick={() => removeMentor(mentor.id)}
//                   className="absolute top-1 right-1 bg-red-500 text-white text-xs px-2 py-1 rounded-md hover:bg-red-600"
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* {/ Enrolled Learners /} */}
//         <div className="mt-6 border-t pt-4">
//           <h3 className="text-xl font-semibold text-gray-800 flex justify-between">
//             Enrolled Learners
//           </h3>
//           <div className="mt-2">
//             {course.learners.map((learner) => (
//               <div
//                 key={learner.id}
//                 className="flex items-center p-3 border-b border-gray-200 hover:bg-gray-100 transition relative"
//               >
//                 <img
//                   src={learner.photo}
//                   alt={learner.name}
//                   className="w-10 h-10 rounded-full border-2 border-green-500"
//                 />
//                 <div className="ml-3">
//                   <p className="font-semibold">{learner.name}</p>
//                   <p className="text-sm text-gray-500">{learner.email}</p>
//                 </div>
//                 <button
//                   onClick={() => removeLearner(learner.id)}
//                   className="absolute top-1 right-1 bg-red-500 text-white text-xs px-2 py-1 rounded-md hover:bg-red-600"
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourseDetailPage;


// import React, { useState, useEffect } from "react";

// // JSON data as provided
// const courseData = {
//   _id: "6753d76521e3da68756b4cb4",
//   mentorId: null,
//   title: "asddsfsd",
//   categoryId: {
//     _id: "669224039b2014b2ae7b2919",
//     name: "BANK"
//   },
//   subCategoryId: {
//     _id: "669224109b2014b2ae7b2920",
//     name: "RRB CLERK"
//   },
//   tags: ["t"],
//   duration: "6 Months",
//   price: 5678,
//   faqs: [
//     {
//       question: "dfg",
//       answer: "gfhj"
//     }
//   ],
//   description: "fgjh",
//   coverImage: "https://storage.googleapis.com/pedator-app.appspot.com/1733547875738_coverImage.jpg",
//   images: [
//     "https://storage.googleapis.com/pedator-app.appspot.com/1733547876372_image.jpg"
//   ],
//   video: "https://storage.googleapis.com/pedator-app.appspot.com/1733547877275_coverImage.jpg",
//   documents: [
//     "https://storage.googleapis.com/pedator-app.appspot.com/1733547876822_images[0].jpg"
//   ],
//   keypointsOfCourse: ["gfgh"],
//   keyTopics: "670ebc142addc45f7088041c",
//   startDate: "2024-12-07T05:02:41.059Z",
//   endDate: "2025-12-07T05:02:00.000Z",
//   isCourseApproved: true,
//   status: true,
//   createdAt: "2024-12-07T05:04:37.717Z",
//   updatedAt: "2024-12-07T05:04:37.717Z",
//   __v: 0
// };

// const CourseDetailPage = () => {
//   const [course, setCourse] = useState(courseData);

//   // Render the course detail page
//   return (
//     <div className="bg-gray-100 p-6 flex justify-center items-center">
//       <div className="bg-white p-8 rounded-lg shadow-xl w-full">
//         <div className="flex w-full justify-between">
//           {/* Course Header */}
//           <div className="flex flex-col items-start">
//             <img
//               src={course.coverImage}
//               alt={course.title}
//               className="max-w-[70px] w-full rounded-lg shadow-md"
//             />
//             <h2 className="text-2xl font-bold text-gray-800 mt-4">
//               {course.title}
//             </h2>
//             <p className="text-gray-600 text-center">{course.description}</p>
//             <p className="mt-2 font-semibold text-blue-600">
//               Duration: {course.duration}
//             </p>
//             <p className="text-lg font-bold text-green-600">
//               ${course.price}
//             </p>
//           </div>

//           {/* Admin Actions */}
//           <div className="flex items-center self-end gap-8 justify-between">
//             <button className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition">
//               Edit Course
//             </button>
//             <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition">
//               Remove Course
//             </button>
//           </div>
//         </div>

//         {/* FAQs Section */}
//         <div className="mt-6 border-t pt-4">
//           <h3 className="text-xl font-semibold text-gray-800">FAQs</h3>
//           <div className="mt-2">
//             {course.faqs.map((faq, index) => (
//               <div key={index} className="mb-4">
//                 <p className="font-semibold">{faq.question}</p>
//                 <p className="text-gray-600">{faq.answer}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Course Documents Section */}
//         <div className="mt-6 border-t pt-4">
//           <h3 className="text-xl font-semibold text-gray-800">Course Documents</h3>
//           <div className="mt-2">
//             {course.documents.map((doc, index) => (
//               <div key={index} className="mb-2">
//                 <a
//                   href={doc}
//                   className="text-blue-600 hover:underline"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Document {index + 1}
//                 </a>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Course Images Section */}
//         <div className="mt-6 border-t pt-4">
//           <h3 className="text-xl font-semibold text-gray-800">Course Images</h3>
//           <div className="mt-2 flex gap-4">
//             {course.images.map((image, index) => (
//               <img
//                 key={index}
//                 src={image}
//                 alt={`Course Image ${index + 1}`}
//                 className="w-32 h-32 object-cover rounded-lg shadow-md"
//               />
//             ))}
//           </div>
//         </div>

//         {/* Course Video Section */}
//         <div className="mt-6 border-t pt-4">
//           <h3 className="text-xl font-semibold text-gray-800">Course Video</h3>
//           <div className="mt-2">
//             <video controls className="w-full rounded-lg shadow-md">
//               <source src={course.video} type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           </div>
//         </div>

//         {/* Key Points Section */}
//         <div className="mt-6 border-t pt-4">
//           <h3 className="text-xl font-semibold text-gray-800">Key Points of the Course</h3>
//           <ul className="mt-2 list-disc pl-5">
//             {course.keypointsOfCourse.map((point, index) => (
//               <li key={index} className="text-gray-600">{point}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourseDetailPage;


import React, { useState } from "react";

const courseData = {
  _id: "6753d76521e3da68756b4cb4",
  mentorId: null,
  title: "asddsfsd",
  categoryId: { _id: "669224039b2014b2ae7b2919", name: "BANK" },
  subCategoryId: { _id: "669224109b2014b2ae7b2920", name: "RRB CLERK" },
  tags: ["t"],
  duration: "6 Months",
  price: 5678,
  faqs: [
    { question: "What is this course about?", answer: "This course covers various banking topics." },
    { question: "How long does it take?", answer: "It takes approximately 6 months to complete." },
  ],
  description: "fgjh",
  coverImage: "https://storage.googleapis.com/pedator-app.appspot.com/1733547875738_coverImage.jpg",
  images: ["https://storage.googleapis.com/pedator-app.appspot.com/1733547876372_image.jpg"],
  video: "https://storage.googleapis.com/pedator-app.appspot.com/1733547877275_coverImage.jpg",
  documents: ["https://storage.googleapis.com/pedator-app.appspot.com/1733547876822_images[0].jpg"],
  keypointsOfCourse: ["gfgh"],
  keyTopics: "670ebc142addc45f7088041c",
  startDate: "2024-12-07T05:02:41.059Z",
  endDate: "2025-12-07T05:02:00.000Z",
  isCourseApproved: true,
  status: true,
  createdAt: "2024-12-07T05:04:37.717Z",
  updatedAt: "2024-12-07T05:04:37.717Z",
  __v: 0
};

const CourseDetailPage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="bg-gray-100 p-6 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full">
        {/* Course Header */}
        <div className="flex w-full justify-between">
          <div>
            <img
              src={courseData.coverImage}
              alt={courseData.title}
              className="max-w-[70px] rounded-lg shadow-md"
            />
            <h2 className="text-2xl font-bold text-gray-800 mt-4">
              {courseData.title}
            </h2>
            <p className="text-gray-600">{courseData.description}</p>
            <p className="mt-2 font-semibold text-blue-600">
              Duration: {courseData.duration}
            </p>
            <p className="text-lg font-bold text-green-600">
              ${courseData.price}
            </p>
          </div>

          {/* Admin Actions */}
          <div className="flex items-center self-end gap-8">
            <button className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">
              Edit Course
            </button>
            <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
              Remove Course
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-6 border-t pt-4">
          <h3 className="text-xl font-semibold text-gray-800">FAQs</h3>
          <div className="mt-2">
            {courseData.faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  className="font-semibold text-left w-full p-2 bg-gray-200 rounded-md hover:bg-gray-300 transition"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                </button>
                {openFAQ === index && (
                  <p className="text-gray-600 mt-2 p-2 bg-gray-100 rounded-md">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Course Documents */}
        <div className="mt-6 border-t pt-4">
          <h3 className="text-xl font-semibold text-gray-800">
            Course Documents
          </h3>
          {courseData.documents.map((doc, index) => (
            <a
              key={index}
              href={doc}
              className="block text-blue-600 hover:underline mt-1"
              target="_blank"
            >
              Document {index + 1}
            </a>
          ))}
        </div>

        {/* Course Images */}
        <div className="mt-6 border-t pt-4">
          <h3 className="text-xl font-semibold text-gray-800">Course Images</h3>
          <div className="mt-2 flex gap-4">
            {courseData.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Course Image ${index + 1}`}
                className="w-32 h-32 rounded-lg shadow-md"
              />
            ))}
          </div>
        </div>

        {/* Course Video */}
        <div className="mt-6 border-t pt-4">
          <h3 className="text-xl font-semibold text-gray-800">Course Video</h3>
          <div className="grid items-center grid-cols-3 gap-5 mt-5">
            <video controls className="w-full rounded-lg shadow-md mt-2">
              <source src={courseData.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Key Points */}
        <div className="mt-6 border-t pt-4">
          <h3 className="text-xl font-semibold text-gray-800">
            Key Points of the Course
          </h3>
          <ul className="mt-2 list-disc pl-5">
            {courseData.keypointsOfCourse.map((point, index) => (
              <li key={index} className="text-gray-600">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;
