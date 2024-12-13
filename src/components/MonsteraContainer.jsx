import React from "react";
import MonsteraDetailsCard from "./MonsterDetailsCard";
import MonsteraCard from "./MonsteraCard";

const MonsteraContainer = () => {
  return (
    <div className="flex flex-col gap-6 rounded-lg w-[68%] p-3 mx-auto overflow-hidden">
      {/* MonsteraCard Component */}
      <MonsteraCard />

      {/* MonsteraDetailsCard Component */}
      <MonsteraDetailsCard />
    </div>
  );
};

export default MonsteraContainer;
