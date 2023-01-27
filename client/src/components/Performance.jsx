import { useState } from "react";
import fetchEventDetails from "../api/fetchEventDetails";

function Performance({ production, date }) {
  const [performanceData, setPerformanceData] = useState(null);

  fetchEventDetails(production)
    .then((data) => console.log(data))
    .catch((error) => console.log(error));

  return <div>Performance</div>;
}

export default Performance;
