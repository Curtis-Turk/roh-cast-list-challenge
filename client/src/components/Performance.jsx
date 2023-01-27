import { useEffect } from "react";
import { useState } from "react";
import fetchEventDetails from "../api/fetchEventDetails";
import Creatives from "./Creatives";

function Performance({ production, date }) {
  const [performanceData, setPerformanceData] = useState({});

  const getCreatives = (data) => {
    const creatives = [];
    data.included.forEach((relationship) => {
      if (relationship.type === "creatives") {
        creatives.push({
          name: relationship.attributes.name,
          role: relationship.attributes.role,
        });
      }
    });
    return creatives;
  };

  const getCast = (data) => {
    const cast = [];
    data.included.forEach((relationship) => {
      if (relationship.type === "castRoles") {
        cast.push(relationship.attributes.name);
      }
    });
    return cast;
  };

  useEffect(() => {
    fetchEventDetails(production)
      .then((data) => {
        const productionData = data.data;
        setPerformanceData({
          title: productionData.attributes.title,
          shortDescription: productionData.attributes.shortDescription,
          creatives: getCreatives(data),
          cast: getCast(data),
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
      {/* <ul>{performanceData.creatives.name}</ul> */}
      <Creatives creativesArray={performanceData.creatives} />
      <h2>Cast</h2>
      <ul>{performanceData.cast}</ul>
    </div>
  );
}

export default Performance;
