import React, { useState } from "react";
import axios from "axios";

function Add() {
  const [form, setForm] = useState({
    id: "",
    Room_type: "",
    rent: "",
    name: "",
    check_in_date: "",
    check_out_date: "",
    room_count: "",
    customer_count: "",
    payment_mode: "",
    compliment: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/hotel", form);
      console.log(res.data);
      alert("Data added successfully");
    } catch (err) {
      console.error(err);
      if (err.response.status === 409) {
        alert(err.response.data.error);
      } else {
        alert("Data cannot be added");
      }
    }
    setForm({
      id: "",
      Room_type: "",
      rent: "",
      name: "",
      check_in_date: "",
      check_out_date: "",
      room_count: "",
      customer_count: "",
      payment_mode: "",
      compliment: "",
    });
  };

  return (
    <div>
      <div className="d-flex justify-content-center">
        <form
          class="border border-primary rounded p-3  m-5 px-5"
          onSubmit={handleSubmit}
        >
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
            name="Room_type"
            placeholder="Room_type"
            value={form.Room_type}
            onChange={handleChange}
            required
            class="mb-1"
          />
          <br />
          <input
            type="text"
            name="rent"
            placeholder="Rent"
            pattern="[0-9]+"
            value={form.rent}
            onChange={handleChange}
            required
            class="mb-1"
          />
          <br />
          <input
            type="name"
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
            name="check_in_date"
            placeholder="Check_in_date"
            value={form.check_in_date}
            onChange={handleChange}
            required
            class="mb-1"
          />
          <br />
          <input
            type="date"
            name="check_out_date"
            placeholder="Check_out_date"
            value={form.check_out_date}
            onChange={handleChange}
            required
            class="mb-1"
          />
          <br />
          <input
            type="text"
            name="room_count"
            placeholder="Room_count"
            value={form.room_count}
            onChange={handleChange}
            pattern="[0-9]+"
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
            type="name"
            name="compliment"
            placeholder="Compliment"
            value={form.compliment}
            onChange={handleChange}
            required
            class="mb-1"
          />
          <br />

          <button
            class="bg-primary text-light border rounded p-1 mx-5"
            type="submit"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default Add;
