import React, { useState } from "react";
import axios from "axios";

function Modify() {
  const [form, setForm] = useState({
    id: "",
    Table_type: "",
    TableNo: "",
    rent: "",
    name: "",
    date: "",
    customer_count: "",
    payment_mode: "",
    time: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  async function handleSubmit(event) {
    event.preventDefault();
    axios
      .put(`http://localhost:3001/restaurant/${form.id}`, {
        id: form.id,
        Table_type: form.Table_type,
        TableNo: form.TableNo,
        rent: form.rent,
        name: form.name,
        date: form.date,
        customer_count: form.customer_count,
        payment_mode: form.payment_mode,
        time: form.time,
      })
      .then((response) => {
        console.log(response.data);
        alert("updated");
      })
      .catch((error) => {
        console.log(error);
      });
    setForm({
      id: "",
      Table_type: "",
      TableNo: "",
      rent: "",
      name: "",
      date: "",
      customer_count: "",
      payment_mode: "",
      time: "",
    });
  }

  return (
    <div>
      <div className="d-flex justify-content-center">
        <form class="border rounded p-3  m-5 px-5" onSubmit={handleSubmit}>
          <input
            type="text"
            name="id"
            placeholder="Id"
            value={form.id}
            onChange={handleChange}
            pattern="[0-9]+"
            required
            class="mb-1"
          />
          <br />
          <input
            type="text"
            name="Table_type"
            placeholder="Table_type"
            value={form.Table_type}
            onChange={handleChange}
            required
            class="mb-1"
          />
          <br />
          <input
            type="text"
            name="TableNo"
            placeholder="TableNo"
            pattern="[0-9]+"
            value={form.TableNo}
            onChange={handleChange}
            required
            class="mb-1"
          />
          <br />
          <input
            type="text"
            name="rent"
            placeholder="Rent"
            value={form.rent}
            onChange={handleChange}
            pattern="[0-9]+"
            required
            class="mb-1"
          />
          <br />
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
            class="mb-1"
          />
          <br />
          <input
            type="date"
            name="date"
            placeholder="date"
            value={form.date}
            onChange={handleChange}
            required
            class="mb-1"
          />
          <br />
          <input
            type="text"
            name="customer_count"
            placeholder="Customer_count"
            value={form.customer_count}
            onChange={handleChange}
            pattern="[0-9]+"
            required
            class="mb-1"
          />
          <br />
          <input
            type="name"
            name="payment_mode"
            placeholder="Payment_mode"
            value={form.payment_mode}
            onChange={handleChange}
            required
            class="mb-1"
          />
          <br />
          <input
            type="time"
            name="time"
            placeholder="time"
            value={form.time}
            onChange={handleChange}
            required
            class="mb-1"
          />
          <br />

          <button
            class="bg-success text-light border rounded p-1 mx-5"
            type="submit"
          >
            Modify
          </button>
        </form>
      </div>
    </div>
  );
}

export default Modify;
