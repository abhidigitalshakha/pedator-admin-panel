import React from "react";
import Table from "../../components/Table";
import SearchBar from "../../components/SearchBar";
import editbutton from "../../assets/images/square-pen.png";
import viewbutton from "../../assets/images/eye.png";
import deleteButton from "../../assets/images/trash-2.png";
import listFilter from "../../assets/images/list-filter.png";
import addButtonWhite from "../../assets/images/plus-white.png";
import { transactions, transitionsColumns } from "../../constants/global.constant";


const dashboardStats = {
  totalLearners: 1200,
  totalMentors: 45,
  totalIncome: 35000,
  totalOutgoing: 15000,
  totalRefunded: 5000,
  totalOtherExpenses: 3000,
  totalProfit: 20000,
};

const TransactionsPage = () => {

    const renderRow = (item, index) => {
        return (
          <tr
            key={index}
            className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-[#e7f5f4]"
          >
            <td className="flex items-center gap-4 p-4">{index + 1}</td>
            <td className="hidden md:table-cell">{item.id}</td>
            <td className="hidden md:table-cell">{item.user}</td>
            <td className="hidden md:table-cell">{item.role}</td>
            <td className="hidden md:table-cell">{item.type}</td>
            <td className="hidden md:table-cell">{item.amount}</td>
            <td className="hidden md:table-cell">{item.status}</td>
            <td className="hidden md:table-cell">{item.date}</td>
            <td className="hidden md:table-cell">{item.remark}</td>
            <td>
              <div className=" flex items-center gap-2">
                {/* edit */}
                <button title="View " className="cursor-pointer w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
                  <img src={viewbutton} alt="" width={16} height={16} />
                </button>
              </div>
            </td>
          </tr>
        );
      };
    

  return (
    <div className=" bg-white p-6">
      {/* Summary Table */}
      <div className="bg-white p-6 rounded-lg border border-gray-300 shadow-md mb-6">
        <h2 className="text-2xl font-bold text-[#108e88] mb-4">
          Transaction Summary
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {[
            { label: "Total Learners", value: dashboardStats.totalLearners },
            { label: "Total Mentors", value: dashboardStats.totalMentors },
            { label: "Total Income", value: `$${dashboardStats.totalIncome}` },
            {
              label: "Total Outgoing",
              value: `$${dashboardStats.totalOutgoing}`,
            },
            {
              label: "Total Refunded",
              value: `$${dashboardStats.totalRefunded}`,
            },
            {
              label: "Other Expenses",
              value: `$${dashboardStats.totalOtherExpenses}`,
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-4 bg-[#dff7f5] border border-[#108e88] rounded-lg shadow-md flex flex-col items-center hover:shadow-lg transition"
            >
              <p className="text-lg font-semibold text-gray-700">
                {stat.label}
              </p>
              <p className="text-2xl font-bold text-[#108e88]">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Transactions Table */}
      <div className="flex items-center justify-between">
        <h1 className=" hidden md:block text-xl md:text-2xl font-semibold text-[#108e88]">
          Recent Transitions
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4  w-full md:w-auto">
          <SearchBar />
          <div className=" flex items-center gap-4 self-end">
            <button className="cursor-pointer w-8 h-8 flex items-center justify-center rounded-full bg-[#108e88] hover:scale-105 p-1 transition-all duration-300">
              <img src={listFilter} alt="" className="w-6" />
            </button>

            <button className="cursor-pointer flex items-center justify-center rounded-full border pr-6 pl-4 py-1 gap-2 bg-[#108e88] hover:scale-105 text-white transition-all duration-300 font-bold text-xl">
              <img src={addButtonWhite} alt="" className="w-6" />
              Add New
            </button>
          </div>
        </div>
      </div>
      <Table columns={transitionsColumns} renderRow={renderRow} data={transactions} />
    </div>
  );
};

export default TransactionsPage;
