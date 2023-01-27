import { useEffect } from "react";
import { useState } from "react";
import fetchEventDetails from "../api/fetchEventDetails";

function Performance({ production, date }) {
  const [performanceData, setPerformanceData] = useState({});

  useEffect(() => {
    fetchEventDetails(production)
      .then((data) => {
        setPerformanceData({ title: data.data.attributes.title });
        console.log(data.data.attributes.title);
      })
      .catch((error) => console.log(error));
  }, [production]);

  return <h1>{performanceData.title}</h1>;
}

export default Performance;
