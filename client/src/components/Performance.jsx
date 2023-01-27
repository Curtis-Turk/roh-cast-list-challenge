import { useEffect } from "react";
import { useState } from "react";
import fetchEventDetails from "../api/fetchEventDetails";

function Performance({ production, date }) {
  const [performanceData, setPerformanceData] = useState({});

  const getCreatives = (data) => {
    const creatives = [];
    data.included.forEach((relationship) => {
      if (relationship.type === "creatives") {
        creatives.push(relationship.attributes.name);
      }
    });
    return creatives;
  };
  useEffect(() => {
    fetchEventDetails(production)
      .then((data) => {
        const productionData = data.data;
        setPerformanceData({
          title: productionData.attributes.title,
          shortDescription: productionData.attributes.shortDescription,
          creatives: getCreatives(data),
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
      <h2>Creatives</h2>
      <ul>{performanceData.creatives}</ul>
    </div>
  );
}

export default Performance;
