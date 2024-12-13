import React from "react";

import MonsteraContainer from "./components/MonsteraContainer";
// import TableComponent from "./components/ItemList";
import ItemList from "./components/ItemList";
import SalesTrendsTable from "./components/SalesTrendsTable";
import RefundAndReturnInsights from "./components/ RefundAndReturnInsights";
import RefundReasons from "./components/RefundReasons";
import ReturnsAndRefunds from "./components/ReturnsAndRefunds";
import OrderTrends from "./components/Ordertrends";

const App = () => {
  const headers = [
    "Date",
    "Completed orders",
    "Pending orders",
    "Canceled orders",
    "Total orders",
  ];
  const data = [
    ["Jan 2024", "120", "10", "0", "160"],
    ["Feb 2024", "150", "20", "15", "185"],
    ["Mar 2024", "200", "50", "0", "220"],
    ["Apr 2024", "160", "30", "5", "195"],
    ["May 2024", "130", "50", "5", "175"],
    ["Jun 2024", "120", "50", "10", "180"],
    ["Jul 2024", "150", "50", "10", "210"],
    ["Aug 2024", "200", "50", "5", "225"],
    ["Sep 2024", "160", "30", "10", "175"],
  ];

  return (
    <div>
      <div className="flex flex-col gap-5 items-center justify-center m-4">
        <MonsteraContainer />

        <ItemList />
        <SalesTrendsTable />
        <RefundAndReturnInsights />
        <RefundReasons />
        <ReturnsAndRefunds />
        <OrderTrends headers={headers} data={data} />
      </div>
    </div>
  );
};

export default App;
