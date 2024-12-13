import React from "react";

const SalesTrendsTable = () => {
  const data = [
    { date: "01-11-2014", totalSales: 40, unitsSold: 120, revenue: 1200 },
    { date: "02-11-2024", totalSales: 35, unitsSold: 100, revenue: 1000 },
    { date: "03-11-2024", totalSales: 50, unitsSold: 140, revenue: 1400 },
    { date: "04-11-2024", totalSales: 30, unitsSold: 90, revenue: 900 },
    { date: "05-11-2024", totalSales: 45, unitsSold: 130, revenue: 1300 },
  ];

  return (
    <div className="w-[62.625rem] h-[22.625rem] relative bg-white rounded-[0.9375rem]">
      {/* Header Buttons */}
      <div className="absolute left-[37rem] top-[2.625rem] flex gap-[0.8125rem]">
        <button className="w-[5.25rem] h-[1.25rem] px-[0.15625rem] py-[0.0625rem] bg-[#638424] rounded-[0.3125rem] text-white text-[0.625rem] font-normal font-['Poppins']">
          Sales Trends
        </button>
        <button className="w-[7.75rem] h-[1.25rem] px-[0.15625rem] py-[0.0625rem] rounded-[0.3125rem] border border-[#7aa262] text-black text-[0.625rem] font-normal font-['Poppins']">
          Product Performance
        </button>
        <button className="w-[8.9375rem] h-[1.25rem] px-[0.15625rem] py-[0.0625rem] rounded-[0.3125rem] border border-[#7aa262] text-black text-[0.625rem] font-normal font-['Poppins']">
          Customer Demographics
        </button>
      </div>

      {/* Title */}
      <div className="absolute left-[2.1875rem] top-[2.5625rem] text-black text-[0.875rem] font-medium font-['Poppins']">
        Sales Trends Table
      </div>

      {/* Table */}
      <div className="absolute left-[2.1875rem] top-[6.4375rem] w-full rounded-[0.9375rem] border border-[#efefef]">
        {/* Table Header */}
        <div className="flex bg-black/5">
          {["Date", "Total Sales", "Units Sold", "Revenue ($)"].map(
            (header, index) => (
              <div
                key={index}
                className="flex-grow text-black text-[0.875rem] font-semibold font-['Poppins'] leading-[1.1375rem] px-[0.1875rem] py-[0.15625rem] border-t border-[#efefef] border-l-0"
              >
                {header}
              </div>
            )
          )}
        </div>

        {/* Table Rows */}
        {data.map((row, rowIndex) => (
          <div key={rowIndex} className="flex">
            {Object.values(row).map((value, colIndex) => (
              <div
                key={colIndex}
                className="flex-grow text-black text-[0.75rem] font-normal font-['Poppins'] px-[0.1875rem] py-[0.15625rem] border-l-0 border-t border-[#efefef] "
              >
                {value}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesTrendsTable;
