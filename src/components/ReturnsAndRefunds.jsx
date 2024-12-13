import React from "react";

const ReturnsTable = () => {
  // Sample data for table rows
  const returnData = [
    {
      orderId: "R001",
      productName: "Fiddle Leaf Fig",
      quantity: 1,
      returnReason: "Damaged on arrival",
      returnSin: "100101",
      returnIssue: "20.00",
    },
    {
      orderId: "R002",
      productName: "Spider Plant",
      quantity: 2,
      returnReason: "Late delivery",
      returnSin: "100102",
      returnIssue: "30.00",
    },
    {
      orderId: "R003",
      productName: "Monstera",
      quantity: 1,
      returnReason: "Wrong item delivered",
      returnSin: "100103",
      returnIssue: "25.00",
    },
    // Add more rows as needed
  ];

  return (
    <div className="w-full bg-white rounded-[0.9375rem] border border-gray-200 p-4">
      {/* Table Header */}
      <div className="grid grid-cols-6 bg-gray-100 text-left text-sm font-semibold text-black font-['Poppins'] ">
        <div className="px-4 py-2 border-b border-gray-200">Order ID</div>
        <div className="px-4 py-2 border-b border-gray-200">Product Name</div>
        <div className="px-4 py-2 border-b border-gray-200">Quantity</div>
        <div className="px-4 py-2 border-b border-gray-200">Return Reason</div>
        <div className="px-4 py-2 border-b border-gray-200">Return SIN</div>
        <div className="px-4 py-2 border-b border-gray-200">Return Issue</div>
      </div>

      {/* Table Rows */}
      {returnData.map((row, index) => (
        <div
          key={index}
          className="grid grid-cols-6 text-xs text-start font-normal text-black font-['Inter'] border-b border-[#efefef]"
        >
          <div className="px-3 py-2.5">{row.orderId}</div>
          <div className="px-3 py-2.5">{row.returnSin}</div>
          <div className="px-3 py-2.5">{row.productName}</div>
          <div className="px-3 py-2.5">{row.quantity}</div>
          <div className="px-3 py-2.5">{row.returnReason}</div>
          <div className="px-3 py-2.5">{row.returnIssue}</div>
        </div>
      ))}
    </div>
  );
};

const ReturnsAndRefunds = () => {
  return (
    <div className="w-[80%] p-[1.875rem] bg-white rounded-[0.9375rem] shadow-md flex flex-col gap-4 mx-auto my-6 max-w-7xl">
      {/* Title and Button Section */}
      <div className="flex justify-between items-center">
        <h2 className="text-black text-sm font-medium font-['Poppins']">
          Returns and Refunds
        </h2>
        <div className="flex gap-3">
          <button className="w-[7.125rem] h-5 px-2.5 py-1 bg-[#638424] rounded-[0.3125rem] flex items-center justify-center">
            <span className="text-white text-[10px] font-normal font-['Poppins']">
              Returns & Refunds
            </span>
          </button>
          <button className="w-[6.8125rem] h-5 px-2.5 py-1 border border-[#7aa262] rounded-[0.3125rem] flex items-center justify-center">
            <span className="text-black text-[10px] font-normal font-['Poppins']">
              Fulfillment Metrics
            </span>
          </button>
        </div>
      </div>

      {/* Table Section */}
      <ReturnsTable />
    </div>
  );
};

export default ReturnsAndRefunds;
