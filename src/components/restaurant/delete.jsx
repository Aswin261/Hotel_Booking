import React, { useState, useEffect } from "react";
import axios from "axios";

function Delete() {
  const [customerIds, setCustomerIds] = useState([]);
  const [selectedId, setSelectedId] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/restaurant")
      .then((response) => {
        const ids = response.data.map((record) => record.id);
        setCustomerIds(ids);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = () => {
    axios
      .delete(`http://localhost:3001/restaurant/${selectedId}`)
      .then((response) => {
        console.log(response.data);
        alert("Deleted");
      })
      .catch((error) => {
        if (error.response.status === 404) {
          alert("Invalid item");
        } else {
          console.log(error);
        }
      });
  };

  return (
    <div class="m-5">
      <select
        value={selectedId}
        onChange={(e) => setSelectedId(e.target.value)}
      >
        <option value="">Select ID</option>
        {customerIds.map((id) => (
          <option key={id} value={id}>
            {id}
          </option>
        ))}
      </select>
      <button
        className="bg-danger text-light border rounded p-1 mx-1"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
}

export default Delete;
