import React from "react";

const RefundAndReturnInsights = () => {
  const data = [
    { metric: "Refund Rate", value: "5%", count: "25" },
    { metric: "Return Rate", value: "7%", count: "35" },
  ];

  return (
    <div className="w-[26.8125rem] h-[11.8125rem] px-[1.625rem] pt-[1.4375rem] pb-[1.3125rem] bg-white rounded-[0.9375rem] flex flex-col justify-center items-start gap-[0.875rem] inline-flex">
      <div className="text-black text-sm font-medium font-['Poppins']">
        Refund and Return Insights
      </div>
      <div className="w-full h-[6.875rem] rounded-[0.9375rem] flex flex-col justify-start items-start">
        <div className="w-full h-[6.875rem] bg-white rounded border border-[#efefef] flex flex-col">
          {/* Table Header */}
          <div className="w-full bg-black/5 flex">
            {["Metric", "Value (%)", "Count"].map((header, index) => (
              <div
                key={index}
                className="flex-1 bg-black/5 border-l border-t border-[#efefef] flex justify-start items-center px-3 py-2.5"
              >
                <div className="text-black text-sm font-semibold font-['Poppins'] leading-[1.1375rem]">
                  {header}
                </div>
              </div>
            ))}
          </div>
          {/* Table Rows */}
          {data.map((row, rowIndex) => (
            <div key={rowIndex} className="w-full flex">
              {Object.values(row).map((value, colIndex) => (
                <div
                  key={colIndex}
                  className="flex-1 bg-white/0 border-l border-t border-[#efefef] flex justify-start items-center px-3 py-2.5"
                >
                  <div className="text-black text-xs font-normal font-['Poppins'] leading-none">
                    {value}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RefundAndReturnInsights;
