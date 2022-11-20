const fetchProvince = async (url) => {
  const response = await fetch(url);
  try {
    if (!response.ok) {
      throw "Could not retrieve districts";
    }
    const data = await response.json();
    let districts = [];
    data.data[0].districts.forEach((district) => districts.push(district.name));
    return districts;
  } catch (err) {
    console.log(err);
    return;
  }
};
export default fetchProvince;
