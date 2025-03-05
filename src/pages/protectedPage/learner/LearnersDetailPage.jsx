import React from "react";
import userPrfileIcon from "../../../assets/images/coloured-circle-user.png"

const student = {
  name: "John Doe",
  email: "mailto:john.doe@example.com",
  phone: "+1 234 567 890",
  course: "Full Stack Web Development",
  photo: "https://randomuser.me/api/portraits/men/45.jpg",
  bankDetails: {
    bankName: "Bank of America",
    accountNumber: "1234567890",
    ifsc: "BOFA1234567",
  },
  payments: [
    { id: 1, date: "2024-02-01", amount: "$299", status: "Paid" },
    { id: 2, date: "2024-01-01", amount: "$299", status: "Paid" },
    { id: 3, date: "2023-12-01", amount: "$299", status: "Pending" },
  ],
};

const LearnersDetailPage = () => {
  return (
    <div className=" bg-gray-100 p-4 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full">
        {/* {/ Header /} */}
        <div className="flex items-center space-x-6">
          <img
            src={userPrfileIcon}
            alt={student.name}
            className="w-24 h-24 rounded-full border-4 border-[#108e88] shadow-md"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{student.name}</h2>
            <p className="text-gray-600">{student.course}</p>
          </div>
        </div>

        {/* {/ Personal Details /} */}
        <div className="mt-6 border-t border-gray-200 pt-4">
          <h3 className="text-xl font-semibold text-gray-800">Personal Details</h3>
          <div className="mt-2 text-gray-700">
            <p><span className="font-semibold">Email:</span> {student.email}</p>
            <p><span className="font-semibold">Phone:</span> {student.phone}</p>
          </div>
        </div>

        {/* {/ Bank Details /} */}
        <div className="mt-6 border-t border-gray-200 pt-4">
          <h3 className="text-xl font-semibold text-gray-800">Bank Details</h3>
          <div className="mt-2 text-gray-700">
            <p><span className="font-semibold">Bank Name:</span> {student.bankDetails.bankName}</p>
            <p><span className="font-semibold">Account No:</span> {student.bankDetails.accountNumber}</p>
            <p><span className="font-semibold">IFSC Code:</span> {student.bankDetails.ifsc}</p>
          </div>
        </div>

        {/* {/ Payment History /} */}
        <div className="mt-6 border-t border-gray-200 pt-4">
          <h3 className="text-xl font-semibold text-gray-800">Payment History</h3>
          <div className="mt-2">
            <table className="w-full border-collapse border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-[#dff7f5] text-black">
                  <th className="p-3 text-left">Date</th>
                  <th className="p-3 text-left">Amount</th>
                  <th className="p-3 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {student.payments.map((payment) => (
                  <tr
                    key={payment.id}
                    className="border-b border-gray-200 hover:bg-[#dff7f5] transition"
                  >
                    <td className="p-3 text-sm font-light">{payment.date}</td>
                    <td className="p-3 text-sm font-light">{payment.amount}</td>
                    <td
                      className={`p-3 font-semibold ${
                        payment.status === "Paid"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {payment.status}
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
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default LearnersDetailPage;
