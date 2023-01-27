const fetchEventDetails = async (url) => {
  const response = await fetch(url);
  const data = await response.text();
  return data;
};

export default fetchEventDetails;
