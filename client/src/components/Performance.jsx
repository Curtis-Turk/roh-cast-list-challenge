import { useEffect } from "react";
import { useState } from "react";
import fetchEventDetails from "../api/fetchEventDetails";

function Performance({ production, date }) {
  const [performanceData, setPerformanceData] = useState({});

  useEffect(() => {
    fetchEventDetails(production)
      .then((data) => {
        const productionData = data.data;
        setPerformanceData({
          title: productionData.attributes.title,
          shortDescription: productionData.attributes.shortDescription,
        });
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, [production]);

  return (
    <div id={production}>
      <h1>{performanceData.title}</h1>
      <p>Date: {date}</p>
      <h3>{performanceData.shortDescription}</h3>
    </div>
  );
}

export default Performance;
