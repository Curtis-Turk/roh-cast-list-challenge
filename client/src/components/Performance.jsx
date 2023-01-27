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
  const stripHtmlTag = (text) => {
    return text.replace(/(<([^>]+)>)/gi, "");
  };

  useEffect(() => {
    fetchEventDetails(production)
      .then((data) => {
        const productionData = data.data;
        setPerformanceData({
          title: productionData.attributes.title,
          shortDescription: stripHtmlTag(
            productionData.attributes.shortDescription
          ),
          creatives: getCreatives(data),
          cast: getCast(data),
        });
      })
      .catch((error) => console.log(error));
  }, [production]);

  const castElementList = performanceData.cast?.map((castMember) => (
    <li>{castMember}</li>
  ));

  return (
    <div id={production}>
      <h1>{performanceData.title}</h1>
      <p>Date: {date}</p>
      <h3>{performanceData.shortDescription}</h3>
      <h2>Creatives</h2>
      <Creatives creativesArray={performanceData.creatives} />
      <h2>Cast</h2>
      <ul>{castElementList}</ul>
    </div>
  );
}

export default Performance;
