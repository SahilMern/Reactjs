import { useEffect } from "react";

const CallingApi = () => {
  const productData = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching the data: ", error);
    }
  };

  useEffect(() => {
    productData();
  }, []);

  return <div>CallingApi</div>;
};

export default CallingApi;
