import React, { useState, useEffect } from "react";
import axios from "axios";
function Report() {
  const [item, setItem] = useState([]);
  const [table, setTable] = useState([]);
  const [button1, setButton1] = useState(false);
  const [button2, setButton2] = useState(false);
  const [button3, setButton3] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3001/hotel")
      .then((res) => {
        setItem(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  //table
  useEffect(() => {
    axios
      .get("http://localhost:3001/restaurant")
      .then((res) => {
        setTable(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleShow1 = () => {
    setButton1(true);
    setButton2(false);
    setButton3(false);
    document.getElementById("message").style.display = "none";
  };
  const handleShow2 = () => {
    setButton2(true);
    setButton1(false);
    setButton3(false);
  };
  const handleShow3 = () => {
    setButton2(false);
    setButton1(false);
    setButton3(true);
  };
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [text, setText] = useState("");
  const [checkinDate, setCheckinDate] = useState("");

  const filtered = table.filter((d) => {
    return (
      (date === "" ||
        new Date(d.date).toLocaleDateString("en-US") ===
          new Date(date).toLocaleDateString("en-US")) &&
      (time === "" || d.time >= time)
    );
  });

  const filtered1 = item.filter((d) => {
    return (
      d.Room_type.toLowerCase().includes(text.toLowerCase()) &&
      (checkinDate === "" ||
        new Date(d.check_in_date).toLocaleDateString("en-US") ===
          new Date(checkinDate).toLocaleDateString("en-US"))
    );
  });

  return (
    <div id="wrapper">
      <div className="flex m-3 mx-5 px-5">
        <button class="btn btn-success p-1" onClick={handleShow1}>
          Hotel
        </button>
        <button class="btn btn-success mx-2 p-1" onClick={handleShow2}>
          Restaurant
        </button>
        <button class="btn btn-success mx-2 p-1" onClick={handleShow3}>
          Room Availability
        </button>
      </div>
      <h3 id="message" class="mx-5" style={{ fontFamily: "cursive" }}>
        By clicking the above buttons, the Booking info of the Hotel and
        Restaurant can be seen...
      </h3>
      <div>
        {button1 && (
          <div>
            <div class="mx-5">
              <input
                type="text"
                value={text}
                placeholder="Room_Type"
                onChange={(e) => setText(e.target.value)}
              />{" "}
              <input
                type="date"
                value={checkinDate}
                onChange={(e) => setCheckinDate(e.target.value)}
              />
            </div>
            <table class="table-sm tablestyle table-striped table-striped-columns m-5 d-flex justify-content-left table-responsive">
              <tbody>
                <tr>
                  <th style={{ border: "solid" }}>
                    <b>Id</b>
                  </th>
                  <th style={{ border: "solid" }}>
                    <b>Room Type</b>
                    <br />
                  </th>
                  <th style={{ border: "solid" }}>
                    <b>Rent</b>
                    <br />
                  </th>
                  <th style={{ border: "solid" }}>
                    <b>Name</b>
                    <br />
                  </th>
                  <th style={{ border: "solid" }}>
                    <b>Check-in</b>
                  </th>
                  <th style={{ border: "solid" }}>
                    <b>Check-out</b>
                  </th>
                  <th style={{ border: "solid" }}>
                    <b>Room-count</b>
                  </th>
                  <th style={{ border: "solid" }}>
                    <b>Customer-count</b>
                  </th>
                  <th style={{ border: "solid" }}>
                    <b>Payment Mode</b>
                  </th>
                  <th style={{ border: "solid" }}>
                    <b>Compliment</b>
                  </th>
                </tr>
                {filtered1.map((data) => (
                  <tr class="center">
                    <td style={{ border: "solid" }}>{data.id}</td>
                    <td style={{ border: "solid" }}>{data.Room_type}</td>
                    <td style={{ border: "solid" }}>{data.rent}</td>
                    <td style={{ border: "solid" }}>{data.name}</td>
                    <td style={{ border: "solid" }}>{data.check_in_date}</td>
                    <td style={{ border: "solid" }}>{data.check_out_date}</td>
                    <td style={{ border: "solid" }}>{data.room_count}</td>
                    <td style={{ border: "solid" }}>{data.customer_count}</td>
                    <td style={{ border: "solid" }}>{data.payment_mode}</td>
                    <td style={{ border: "solid" }}>{data.compliment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {/* table2 */}

        {button2 && (
          <div>
            <div class="mx-5">
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />{" "}
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
            <table class="table-sm tablestyle table-striped table-striped-columns m-5 d-flex justify-content-left table-responsive">
              <tbody>
                <tr>
                  <th style={{ border: "solid" }}>
                    <b>Id</b>
                  </th>
                  <th style={{ border: "solid" }}>
                    <b>Table Type</b>
                    <br />
                  </th>
                  <th style={{ border: "solid" }}>
                    <b>Table No</b>
                    <br />
                  </th>
                  <th style={{ border: "solid" }}>
                    <b>Rent</b>
                    <br />
                  </th>
                  <th style={{ border: "solid" }}>
                    <b>Name</b>
                  </th>
                  <th style={{ border: "solid" }}>
                    <b>Date</b>
                  </th>
                  <th style={{ border: "solid" }}>
                    <b>Customer-count</b>
                  </th>
                  <th style={{ border: "solid" }}>
                    <b>Payment-mode</b>
                  </th>
                  <th style={{ border: "solid" }}>
                    <b>Time</b>
                  </th>
                </tr>
                {filtered.map((data) => (
                  <tr class="center">
                    <td style={{ border: "solid" }}>{data.id}</td>
                    <td style={{ border: "solid" }}>{data.Table_type}</td>
                    <td style={{ border: "solid" }}>{data.TableNo}</td>
                    <td style={{ border: "solid" }}>{data.rent}</td>
                    <td style={{ border: "solid" }}>{data.name}</td>
                    <td style={{ border: "solid" }}>{data.date}</td>
                    <td style={{ border: "solid" }}>{data.customer_count}</td>
                    <td style={{ border: "solid" }}>{data.payment_mode}</td>
                    <td style={{ border: "solid" }}>{data.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Table3 */}
        {button3 && (
          <div>
            <table class="table-sm tablestyle table-striped table-striped-columns m-5 d-flex justify-content-left table-responsive">
              <tbody>
                <tr>
                  <th style={{ border: "solid" }}>
                    <b>Id</b>
                  </th>
                  <th style={{ border: "solid" }}>
                    <b>Room Type</b>
                    <br />
                  </th>
                  <th style={{ border: "solid" }}>
                    <b>Rent</b>
                    <br />
                  </th>
                  <th style={{ border: "solid" }}>
                    <b>Name</b>
                    <br />
                  </th>
                  <th style={{ border: "solid" }}>
                    <b>Room-count</b>
                  </th>
                  <th style={{ border: "solid" }}>
                    <b>Room-Availability</b>
                  </th>
                </tr>
                {item.map((data) => (
                  <tr class="center">
                    <td style={{ border: "solid" }}>{data.id}</td>
                    <td style={{ border: "solid" }}>{data.Room_type}</td>
                    <td style={{ border: "solid" }}>{data.rent}</td>
                    <td style={{ border: "solid" }}>{data.name}</td>
                    <td style={{ border: "solid" }}>{data.room_count}</td>
                    <td style={{ border: "solid" }}>Available</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Report;
