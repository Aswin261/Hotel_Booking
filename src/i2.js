import React, { useState, useEffect } from "react";

function Udata() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://24cdb2b0-75f7-45ec-8ce0-86239685c022.mock.pstmn.io/getProducts"
      );
      const jsonData = await response.json();
      setData(jsonData);
      console.log("response", data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {data?.results?.map((post) => (
          <li key={1}>{post.masterData.current.name.en}</li>
          // <img src={post.images.url} alt="..." />
        ))}
      </ul>
    </div>
  );
}

export default Udata;
