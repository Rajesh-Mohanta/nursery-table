import React, { useState } from "react";
import Image from "../assets/Group.svg";

const ItemList = () => {
  const items = [
    {
      id: 1,
      name: "Monstera Deliciosa",
      quantity: 10,
      price: "36.5$",
      status: "Deleted",
      reasonImage: Image,
    },
    {
      id: 2,
      name: "Monstera Deliciosa",
      reasonImage: Image,
      quantity: 10,
      price: "36.5$",
      status: "Adjusted",
    },
    {
      id: 3,
      name: "Monstera Deliciosa",
      reasonImage: Image,
      quantity: 10,
      price: "36.5$",
      status: "Deleted",
    },
    {
      id: 4,
      name: "Monstera Deliciosa",
      reasonImage: Image,
      quantity: 10,
      price: "36.5$",
      status: "Adjusted",
    },
    {
      id: 5,
      name: "Monstera Deliciosa",
      reasonImage: Image,
      quantity: 10,
      price: "36.5$",
      status: "Deleted",
    },
    {
      id: 6,
      name: "Monstera Deliciosa",
      quantity: 10,
      price: "36.5$",
      status: "Deleted",
      reasonImage: Image,
    },
    {
      id: 7,
      name: "Monstera Deliciosa",
      reasonImage: Image,
      quantity: 10,
      price: "36.5$",
      status: "Adjusted",
    },
    {
      id: 8,
      name: "Monstera Deliciosa",
      reasonImage: Image,
      quantity: 10,
      price: "36.5$",
      status: "Deleted",
    },
    {
      id: 9,
      name: "Monstera Deliciosa",
      reasonImage: Image,
      quantity: 10,
      price: "36.5$",
      status: "Adjusted",
    },
    {
      id: 10,
      name: "Monstera Deliciosa",
      reasonImage: Image,
      quantity: 10,
      price: "36.5$",
      status: "Deleted",
    },
  ];

  const [selectedItems, setSelectedItems] = useState(
    items.reduce((acc, item) => ({ ...acc, [item.id]: false }), {})
  );

  const allSelected = Object.values(selectedItems).every(
    (isSelected) => isSelected
  );

  const handleSelectAll = () => {
    const newSelection = items.reduce(
      (acc, item) => ({ ...acc, [item.id]: !allSelected }),
      {}
    );
    setSelectedItems(newSelection);
  };

  const handleSelectItem = (id) => {
    setSelectedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="flex flex-row gap-4 overflow-x-auto">
      {/* Checkbox Column */}
      <div className="w-[50px] flex flex-col">
        <div className="h-11 bg-[#eaeaea] flex items-center justify-center">
          <input
            type="checkbox"
            checked={allSelected}
            onChange={handleSelectAll}
            className="w-4 h-4 text-green-500 border-gray-300 rounded focus:ring-green-500"
          />
        </div>
        {items.map((item) => (
          <div
            key={item.id}
            className="h-11 bg-white flex items-center justify-center"
          >
            <input
              type="checkbox"
              checked={selectedItems[item.id]}
              onChange={() => handleSelectItem(item.id)}
              className="w-4 h-4 text-green-500 border-gray-300 rounded focus:ring-green-500"
            />
          </div>
        ))}
      </div>

      {/* Item Name Column */}
      <div className="w-[200px] flex flex-col">
        <div className="h-11 bg-[#eaeaea] flex items-center px-4">
          <span className="text-black text-sm font-normal font-['Poppins']">
            Item Name
          </span>
        </div>
        {items.map((item) => (
          <div key={item.id} className="h-11 bg-white flex items-center px-4">
            <span className="text-black text-sm font-normal font-['Poppins']">
              {item.name}
            </span>
          </div>
        ))}
      </div>
      {/* Reason Column */}
      <div className="w-[100px] flex flex-col">
        <div className="h-11 bg-[#eaeaea] flex items-center px-4">
          <span className="text-black text-sm font-normal font-['Poppins']">
            Reason
          </span>
        </div>
        {items.map((item) => (
          <div
            key={item.id}
            className="h-11 bg-white flex items-center justify-center"
          >
            <img
              src={item.reasonImage}
              alt={`Reason for ${item.name}`}
              className="w-5 h-[22px] object-cover"
            />
          </div>
        ))}
      </div>
      {/* Quantity Column */}
      <div className="w-[100px] flex flex-col">
        <div className="h-11 bg-[#eaeaea] flex items-center px-4">
          <span className="text-black text-sm font-normal font-['Poppins']">
            Quantity
          </span>
        </div>
        {items.map((item) => (
          <div key={item.id} className="h-11 bg-white flex items-center px-4">
            <span className="text-[#323c47] text-[13px] font-semibold font-['Poppins']">
              {item.quantity}
            </span>
          </div>
        ))}
      </div>

      {/* Price Column */}
      <div className="w-[100px] flex flex-col">
        <div className="h-11 bg-[#eaeaea] flex items-center px-4">
          <span className="text-black text-sm font-normal font-['Poppins']">
            Price
          </span>
        </div>
        {items.map((item) => (
          <div key={item.id} className="h-11 bg-white flex items-center px-4">
            <span className="text-[#323c47] text-[13px] font-semibold font-['Poppins']">
              {item.price}
            </span>
          </div>
        ))}
      </div>

      {/* Status Column */}
      <div className="w-[100px] flex flex-col">
        <div className="h-11 bg-[#eaeaea] flex items-center px-4">
          <span className="text-black text-sm font-normal font-['Poppins']">
            Status
          </span>
        </div>
        {items.map((item) => (
          <div key={item.id} className="h-11 bg-white flex items-center px-4">
            <span
              className={`text-xs font-semibold font-['Poppins'] ${
                item.status === "Deleted" ? "text-[#d63b3b]" : "text-[#56bbe6]"
              }`}
            >
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
