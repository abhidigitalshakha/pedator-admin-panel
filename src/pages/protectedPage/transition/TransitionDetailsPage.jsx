import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const transactions = [
  {
    id: "TXN001",
    user: "Alice Johnson",
    role: "Learner",
    type: "Credit",
    amount: 499,
    status: "Success",
    date: "2025-02-15",
    remark: "Course Purchase",
    paymentMethod: "Credit Card",
    transactionFee: 10,
  },
  {
    id: "TXN002",
    user: "Mark Wilson",
    role: "Learner",
    type: "Debit",
    amount: 299,
    status: "Pending",
    date: "2025-02-14",
    remark: "Refund Process",
    paymentMethod: "PayPal",
    transactionFee: 5,
  },
  {
    id: "TXN003",
    user: "Emma Brown",
    role: "Mentor",
    type: "Credit",
    amount: 799,
    status: "Success",
    date: "2025-02-13",
    remark: "Course Sold",
    paymentMethod: "Bank Transfer",
    transactionFee: 15,
  },
];

const TransactionDetailsPage = () => {
  const id = "TXN002";
  const navigate = useNavigate();

  const transaction = transactions.find((txn) => txn.id === id);

  if (!transaction) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 text-xl">
        Transaction not found.
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300">
        <h2 className="text-2xl font-bold text-[#108e88] mb-4">
          Transaction Details
        </h2>
        <div className="grid grid-cols-2 gap-4 text-gray-700">
          <div className="flex w-full justify-between border p-2 rounded-md border-gray-300 bg-zinc-50 hover:bg-[#dff7f5]">
            <strong>ID:</strong>
             {transaction.id}
          </div>
          <div className="flex w-full justify-between border p-2 rounded-md border-gray-300 bg-zinc-50 hover:bg-[#dff7f5]">
            <strong>User:</strong>
             {transaction.user}
          </div>
          <div className="flex w-full justify-between border p-2 rounded-md border-gray-300 bg-zinc-50 hover:bg-[#dff7f5]">
            <strong>Role:</strong>
             {transaction.role}
          </div>
          <div className="flex w-full justify-between border p-2 rounded-md border-gray-300 bg-zinc-50 hover:bg-[#dff7f5]">
            <strong>Type:</strong>
            {" "}
            <span
              className={`${
                transaction.type === "Credit"
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {transaction.type}
            </span>
          </div>
          <div className="flex w-full justify-between border p-2 rounded-md border-gray-300 bg-zinc-50 hover:bg-[#dff7f5]">
            <strong>Amount:</strong>
             ${transaction.amount}
          </div>
          <div className="flex w-full justify-between border p-2 rounded-md border-gray-300 bg-zinc-50 hover:bg-[#dff7f5]">
            <strong>Payment Method:</strong>
             {transaction.paymentMethod}
          </div>
          <div className="flex w-full justify-between border p-2 rounded-md border-gray-300 bg-zinc-50 hover:bg-[#dff7f5]">
            <strong>Transaction Fee:</strong>
             ${transaction.transactionFee}
          </div>
          <div className="flex w-full justify-between border p-2 rounded-md border-gray-300 bg-zinc-50 hover:bg-[#dff7f5]">
            <strong>Status:</strong>
            {" "}
            <span
              className={`${
                transaction.status === "Success"
                  ? "text-green-500"
                  : "text-yellow-500"
              }`}
            >
              {transaction.status}
            </span>
          </div>
          <div className="flex w-full justify-between border p-2 rounded-md border-gray-300 bg-zinc-50 hover:bg-[#dff7f5]">
            <strong>Date:</strong>
             {transaction.date}
          </div>
          <div className="flex w-full justify-between border p-2 rounded-md border-gray-300 bg-zinc-50 hover:bg-[#dff7f5]">
            <strong>Remark:</strong>
             {transaction.remark}
          </div>
        </div>

        <button
          onClick={() => navigate(-1)}
          className="mt-6 px-4 py-2 bg-[#108e88] text-white rounded-lg hover:bg-[#0d6b66] transition"
        >
          Back to Transactions
        </button>
      </div>
    </div>
  );
};

export default TransactionDetailsPage;
