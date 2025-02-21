import React from "react";
import moreButton from "../../assets/images/more.png";
import mentors from "../../assets/images/colored-graduation-cap.png";
import learners from "../../assets/images/book-user.png";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Total",
    count: 100,
    fill: "white",
  },
  {
    name: "Mentors",
    count: 53,
    fill: "#dff7f5",
  },
  {
    name: "Learners",
    count: 53,
    fill: "#108e88",
  },
];

const MentorAndLearner = () => {
  return (
    <div className="w-full h-full bg-white p-4 shadow-lg rounded-lg">
      {/* title  */}
      <div className="flex justify-between items-center ">
        <h1 className="text-lg font-semibold">Learners & Mentors</h1>
        <img src={moreButton} alt="" className="cursor-pointer" />
      </div>
      {/* chart  */}
      <div className="w-full h-[75%] relative">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        <div className="absolute flex top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <img
            src={mentors}
            alt=""
            className="w-8"
          />
          <img
            src={learners}
            alt=""
            className="w-8"
          />
        </div>
      </div>
      {/* bottom */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 rounded-full" />
          <h1 className="font-bold">134</h1>
          <h2 className="text-xs text-gray-700">Mentors (55%)</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 rounded-full" />
          <h1 className="font-bold">124</h1>
          <h2 className="text-xs text-gray-700">Learners (35%)</h2>
        </div>
      </div>
    </div>
  );
};

export default MentorAndLearner;
