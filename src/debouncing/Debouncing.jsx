import React, { useEffect, useState } from "react";

const Debouncing = () => {
  const [searchVal, setSearchVal] = useState("");
  const [data, setData] = useState("");
  const [click, setClick] = useState([]);

  let timer;
  const handleChanges = (e) => {
    // console.log(e.target.value);
    clearTimeout(timer);
    timer = setTimeout(() => {
      console.log(e.target.value);
      setSearchVal(e.target.value);
    }, 2000);
  };

  useEffect(() => {
    const getUserData = async () => {
      const data = await fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then(console.log);
    };
    getUserData();
  }, []);
  return (
    <div className="container">
      <label htmlFor="serach" className="">
        Search valie ise {searchVal}
      </label>
      <input type="text" name="search" id="search" onChange={handleChanges} />

      {/* Dubing method when click or any other data changes */}
    </div>
  );
};

export default Debouncing;
