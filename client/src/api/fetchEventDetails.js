const fetchEventDetails = async (event) => {
  const server = "http://localhost:3001/";
  const url = server + event;
  const response = await fetch(url);
  const data = await response.json();
  return data.data;
};

export default fetchEventDetails;
