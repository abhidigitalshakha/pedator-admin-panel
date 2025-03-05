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
