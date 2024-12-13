import React from "react";
import deletebtn from "../assets/ic_baseline-delete-forever.svg";
import edit from "../assets/clarity_note-edit-solid.svg";

const MonsteraCard = () => {
  return (
    <div className="h-[50px] justify-between items-center flex bg-white p-4 rounded-lg w-full">
      {/* Title Section */}
      <div className="text-black text-xl font-medium font-['Poppins'] ">
        Monstera Deliciosa
      </div>
      {/* Buttons Section */}
      <div className="flex gap-3">
        {/* Edit Button */}
        <button className="p-2.5 bg-[#7aa262] rounded-lg shadow justify-center items-center gap-2.5 inline-flex">
          <img src={edit} alt="Delete Icon" className="w-4 h-4" />
          <span className="text-white text-xs font-normal font-['Poppins']">
            Edit
          </span>
        </button>
        {/* Delete Button */}
        <button className="p-2.5 bg-[#ff5d5d] rounded-lg shadow justify-center items-center gap-2.5 inline-flex">
          <img
            src={deletebtn}
            alt="Delete Icon"
            className="w-4 h-4"
            color="red"
          />
          <span className="text-white text-xs font-normal font-['Poppins']">
            Delete
          </span>
        </button>

        {/* Info Button */}
        <button className="p-2.5 bg-[#56b6e6] rounded-lg shadow justify-center items-center gap-2.5 inline-flex">
          <span className="text-white text-xs font-normal font-['Poppins']">
            Info
          </span>
        </button>
      </div>
    </div>
  );
};

export default MonsteraCard;
