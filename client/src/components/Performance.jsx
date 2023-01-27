import { useEffect } from "react";
import { useState } from "react";
import fetchEventDetails from "../api/fetchEventDetails";

function Performance({ production, date }) {
  const [performanceData, setPerformanceData] = useState({});

  useEffect(() => {
    fetchEventDetails(production)
      .then((data) => {
        const attributes = data.data.attributes;
        setPerformanceData({
          title: attributes.title,
          shortDescription: attributes.shortDescription,
        });
        console.log(data.data.attributes);
      })
      .catch((error) => console.log(error));
  }, [production]);

  return (
    <div id={production}>
      <h1>{performanceData.title}</h1>
      {performanceData.shortDescription}
    </div>
  );
}

export default Performance;
