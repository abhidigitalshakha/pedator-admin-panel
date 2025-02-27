import React from "react";

const tutor = {
  name: "Sophia Williams",
  email: "mailto:sophia.williams@example.com",
  phone: "+1 987 654 3210",
  expertise: ["Web Development", "JavaScript", "React.js", "Next.js"],
  courses: [
    { id: 1, title: "Mastering React.js", students: 120 },
    { id: 2, title: "Full Stack with MERN", students: 85 },
    { id: 3, title: "Advanced JavaScript", students: 95 },
  ],
  photo: "https://randomuser.me/api/portraits/women/45.jpg",
  bankDetails: {
    bankName: "Chase Bank",
    accountNumber: "9876543210",
    ifsc: "CHAS1234567",
  },
  payouts: [
    { id: 1, date: "2024-02-01", amount: "$1200", status: "Paid" },
    { id: 2, date: "2024-01-01", amount: "$1350", status: "Paid" },
    { id: 3, date: "2023-12-01", amount: "$1100", status: "Pending" },
  ],
};



const MentorDetailPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full">
        
        {/* {/ Header /} */}
        <div className="flex items-center space-x-6">
          <img
            src={tutor.photo}
            alt={tutor.name}
            className="w-24 h-24 rounded-full border-4 border-[#108e88] shadow-md"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{tutor.name}</h2>
            <p className="text-gray-600">Professional Instructor</p>
          </div>
        </div>

        {/* {/ Personal Details /} */}
        <div className="mt-6 border-t pt-4 border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800">Personal Details</h3>
          <div className="mt-2 text-gray-700">
            <p><span className="font-semibold">Email:</span> {tutor.email}</p>
            <p><span className="font-semibold">Phone:</span> {tutor.phone}</p>
          </div>
        </div>

        {/* {/ Expertise /} */}
        <div className="mt-6 border-t pt-4 border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800">Expertise</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {tutor.expertise.map((skill, index) => (
              <span key={index} className="bg-[#108e88] text-white px-3 py-1 rounded-full text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* {/ Courses /} */}
        <div className="mt-6 border-t pt-4 border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800">Courses</h3>
          <div className="mt-2">
            {tutor.courses.map((course) => (
              <div key={course.id} className="p-3 border-b border-gray-200 hover:bg-gray-100 transition">
                <p className="font-semibold">{course.title}</p>
                <p className="text-sm text-gray-500">Enrolled Students: {course.students}</p>
              </div>
            ))}
          </div>
        </div>

        {/* {/ Bank Details /} */}
        <div className="mt-6 border-t pt-4 border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800">Bank Details</h3>
          <div className="mt-2 text-gray-700">
            <p><span className="font-semibold">Bank Name:</span> {tutor.bankDetails.bankName}</p>
            <p><span className="font-semibold">Account No:</span> {tutor.bankDetails.accountNumber}</p>
            <p><span className="font-semibold">IFSC Code:</span> {tutor.bankDetails.ifsc}</p>
          </div>
        </div>

        {/* {/ Payout History /} */}
        <div className="mt-6 border-t pt-4 border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800">Payout History</h3>
          <div className="mt-2">
            <table className="w-full border-collapse border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-[#dff7f5] text-black">
                  <th className="p-3 text-sm  text-left">Date</th>
                  <th className="p-3 text-sm   text-left">Amount</th>
                  <th className="p-3 text-sm  text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {tutor.payouts.map((payout) => (
                  <tr
                    key={payout.id}
                    className="border-b border-gray-200 hover:bg-gray-100 transition"
                  >
                    <td className="p-3 text-sm font-light">{payout.date}</td>
                    <td className="p-3 text-sm font-light">{payout.amount}</td>
                    <td
                      className={`p-3 font-semibold ${
                        payout.status === "Paid"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {payout.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* {/ Footer /} */}
        <div className="mt-6 text-center">
          <button className="px-5 py-2 bg-[#108e88] text-white rounded-md hover:bg-[#dff7f5] hover:text-black cursor-pointer transition">
            Contact Tutor
          </button>
        </div>
      </div>
    </div>
  );
};

export default MentorDetailPage;
