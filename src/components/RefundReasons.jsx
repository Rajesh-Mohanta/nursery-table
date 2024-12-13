import React from "react";

const RefundReasons = () => {
  const reasons = [
    { reason: "Damaged Product", count: 15 },
    { reason: "Late Delivery", count: 10 },
    { reason: "Wrong Item Delivered", count: 5 },
    { reason: "Others", count: 5 },
  ];

  return (
    <div className="w-[26.8125rem] h-[16.1875rem] p-[1.375rem] bg-white rounded-[0.9375rem] flex flex-col gap-[1.1875rem]">
      <h2 className="text-black text-sm font-medium font-['Poppins']">
        Refund Reasons
      </h2>
      <div className="flex flex-col border border-[#efefef] rounded-[0.9375rem]">
        <div className="flex bg-black/5 border-b border-[#efefef]">
          <div className="flex-1 p-3 text-black text-sm font-semibold font-['Poppins']">
            Reason
          </div>
          <div className="flex-1 p-3 text-black text-sm font-semibold font-['Poppins']">
            Count
          </div>
        </div>
        {reasons.map((item, index) => (
          <div
            key={index}
            className="flex border-b last:border-b-0 border-[#efefef]"
          >
            <div className="flex-1 p-3 text-black text-xs font-normal font-['Poppins']">
              {item.reason}
            </div>
            <div className="flex-1 p-3 text-black text-xs font-normal font-['Poppins']">
              {item.count}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RefundReasons;
