import React from "react";

const Table = ({ columns, renderRow, data }) => {
  return (
    <table className="w-full mt-4 ">
      <thead>
        <tr className="text-left text-gray-500 text-sm bg-[#dff7f5]">
          {columns.map((col) => (
            <th key={col.assessor} className={col.className}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{data.data?.map((item,index) => renderRow(item,index))}</tbody>
    </table>
  );
};

export default Table;
