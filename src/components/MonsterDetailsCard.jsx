import React from "react";
import frame4 from "../assets/Frame 4.png";

const MonsteraDetailsCard = () => {
  return (
    <div className="h-[30.625rem] rounded-[1.25rem] border border-[#d2d2d2] flex flex-col justify-start items-start gap-[1.5625rem] p-4 mx-3 w-full">
      {/* Item Name */}
      <div className="flex items-center gap-4">
        <span className="w-[5.625rem] text-[#6c6c6c] text-sm font-normal font-['Inter']">
          Item Name :
        </span>
        <span className="text-[#222222] text-sm font-medium font-['Inter']">
          Monstera Deliciosa
        </span>
      </div>

      {/* Category */}
      <div className="flex items-center gap-4">
        <span className="w-[5.625rem] text-[#6c6c6c] text-sm font-normal font-['Inter']">
          Category :
        </span>
        <span className="text-[#222222] text-sm font-medium font-['Inter']">
          Trees
        </span>
      </div>

      {/* Content and Image Section */}
      <div className="flex justify-between gap-6 h-[31.75rem]">
        {/* Left Section */}
        <div className="flex flex-col gap-4">
          {/* Serial Number */}
          <div className="flex items-center gap-4">
            <span className="w-[5.625rem] text-[#6c6c6c] text-sm font-normal font-['Inter']">
              Serial no :
            </span>
            <span className="text-[#222222] text-sm font-medium font-['Inter']">
              XXXX
            </span>
          </div>

          {/* Description */}
          <div className="flex items-start gap-4">
            <span className="w-[5.625rem] text-[#6c6c6c] text-sm font-normal font-['Poppins']">
              Description :
            </span>
            <p className="w-[28.875rem] text-[#222222] text-sm font-medium font-['Poppins']">
              Growing to 50 feet tall and 40 feet wide, the most prominent
              feature of this red maple is its reliable brilliant orange to red
              fall color, which occurs earlier than most other varieties.
              Somewhat showy red flowers emerge in early spring prior to glossy
              green lobed foliage. Makes for an excellent shade tree in
              periodically wet sites. Samaras or "helicopters" appear in early
              summer. Frost crack is not uncommon in 'Red Sunset,' so avoid
              heavy pruning and late-season fertilizer applications to reduce
              the risk of cracking.
            </p>
          </div>

          {/* Other Details */}
          {[
            { label: "Age", value: "XX" },
            { label: "Price", value: "XX" },
            { label: "Qty Avl", value: "XX" },
            { label: "Size", value: "XX" },
            { label: "Min Stock", value: "XX" },
          ].map(({ label, value }) => (
            <div key={label} className="flex items-center gap-4">
              <span className="w-[5.625rem] text-[#6c6c6c] text-sm font-normal font-['Inter']">
                {label} :
              </span>
              <span className="text-[#222222] text-sm font-medium font-['Inter']">
                {value}
              </span>
            </div>
          ))}
        </div>

        {/* Image Section */}
        <img
          className="w-[15.25rem] h-[19.5rem] rounded-[1.25rem] border-b border-b-[#d2d2d2]"
          src={frame4}
          alt="Monstera Deliciosa"
        />
      </div>
    </div>
  );
};

export default MonsteraDetailsCard;
