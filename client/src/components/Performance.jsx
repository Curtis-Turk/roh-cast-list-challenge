import { useEffect } from "react";
import { useState } from "react";
import fetchEventDetails from "../api/fetchEventDetails";
import Cast from "./Cast";
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

  const stripHtmlTag = (text) => {
    return text.replace(/(<([^>]+)>)/gi, "");
  };

  useEffect(() => {
    fetchEventDetails(production)
      .then((data) => {
        const productionData = data.data;

        const performanceObject = {
          title: productionData.attributes.title,
          shortDescription: stripHtmlTag(
            productionData.attributes.shortDescription
          ),
          creatives: getCreatives(data),
          cast: getCast(data),
        };

        setPerformanceData(performanceObject);
      })
      .catch((error) => console.log(error));
  }, [production]);

  return (
    <div id={production}>
      <h1>{performanceData.title}</h1>
      <p>Date: {date}</p>
      <h3>{performanceData.shortDescription}</h3>
      <h2>Creatives</h2>
      <Creatives creativesArray={performanceData.creatives} />
      <h2>Cast</h2>
      <Cast castArray={performanceData.cast} />
    </div>
  );
}

export default Performance;
