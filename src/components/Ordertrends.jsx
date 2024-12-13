import React from "react";

const OrderTrends = ({ headers, data }) => {
  return (
    <div className="w-full max-w-[600px] bg-white rounded-[15px] shadow-md overflow-hidden">
      <div className="p-4 text-black text-lg font-medium font-['Poppins'] border-b border-gray-200">
        Order Trends
      </div>
      <div className="w-full">
        <div className="grid grid-cols-5 border-t border-gray-200 bg-gray-50">
          {headers.map((header, index) => (
            <div
              key={index}
              className="px-4 py-2 text-sm font-semibold text-black font-['Poppins'] border-l border-gray-200 first:border-l-0"
            >
              {header}
            </div>
          ))}
        </div>
        {data.map((row, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-5 border-t bg-white">
            {row.map((cell, cellIndex) => (
              <div
                key={cellIndex}
                className="px-4 py-2 text-sm text-black font-normal border-l border-gray-200 first:border-l-0"
              >
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderTrends;
