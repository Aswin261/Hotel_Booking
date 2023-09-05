const express = require("express");
const cors = require("cors");
const { connectToDb, getDb } = require("./db");
const { ObjectId } = require("mongodb");
let db;
const app = express();
app.use(express.json());
app.use(cors());
connectToDb((err) => {
  if (!err) {
    app.listen(3001, () => {
      console.log("listening on port 3001");
    });
    db = getDb();
  }
});
//Hotel
app.get("/hotel", (req, res) => {
  let posts = [];
  db.collection("Hotel")
    .find()
    .sort({ id: 1 })
    .forEach((post) => posts.push(post))
    .then(() => {
      res.status(200).json(posts);
    })
    .catch(() => {
      res.status(500).json({ error: "fetch the documents" });
    });
});
//Restaurant
app.get("/restaurant", (req, res) => {
  let posts = [];
  db.collection("Restaurant")
    .find()
    .sort({ id: 1 })
    .forEach((post) => posts.push(post))
    .then(() => {
      res.status(200).json(posts);
    })
    .catch(() => {
      res.status(500).json({ error: "fetch the documents" });
    });
});

//Add hotel
app.post("/hotel", (req, res) => {
  db.collection("Hotel")
    .findOne({ Customer_id: Number(req.body.id) })
    .then((existingUser) => {
      if (existingUser) {
        res.status(409).json({ error: "Customer with this ID already exists" });
      } else {
        db.collection("Hotel")
          .insertOne({
            id: Number(req.body.id),
            Room_type: req.body.Room_type,
            rent: Number(req.body.rent),
            name: req.body.name,
            check_in_date: new Date(req.body.check_in_date).toLocaleDateString(
              "en-US"
            ),
            check_out_date: new Date(
              req.body.check_out_date
            ).toLocaleDateString("en-US"),
            room_count: Number(req.body.room_count),
            customer_count: Number(req.body.customer_count),
            payment_mode: req.body.payment_mode,
            compliment: req.body.compliment,
          })
          .then((result) => {
            res.status(201).json(result.value);
          })
          .catch((err) => {
            res.status(500).json({ error: "Could not create a document" });
          });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: "Could not check for existing user" });
    });
});

//Add Restaurant
app.post("/restaurant", (req, res) => {
  db.collection("Restaurant")
    .findOne({ id: Number(req.body.id) })
    .then((existingUser) => {
      if (existingUser) {
        res.status(409).json({ error: "Customer with this ID already exists" });
      } else {
        db.collection("Restaurant")
          .insertOne({
            id: Number(req.body.id),
            Table_type: req.body.Table_type,
            TableNo: Number(req.body.TableNo),
            rent: Number(req.body.rent),
            name: req.body.name,
            date: new Date(req.body.date).toLocaleDateString("en-US"),
            customer_count: Number(req.body.customer_count),
            payment_mode: req.body.payment_mode,
            time: req.body.time,
          })
          .then((result) => {
            res.status(201).json(result.value);
          })
          .catch((err) => {
            res.status(500).json({ error: "Could not create a document" });
          });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: "Could not check for existing user" });
    });
});
//Modify Hotel
app.put("/hotel/:id", (req, res) => {
  const id = Number(req.params.id);

  const updateData = {};
  if (req.body.Room_type) updateData.Room_type = req.body.Room_type;
  if (req.body.rent) updateData.rent = Number(req.body.rent);
  if (req.body.name) updateData.name = req.body.name;
  if (req.body.check_in_date)
    updateData.check_in_date = new Date(
      req.body.check_in_date
    ).toLocaleDateString("en-US");
  if (req.body.check_out_date)
    updateData.check_out_date = new Date(
      req.body.check_out_date
    ).toLocaleDateString("en-US");
  if (req.body.room_count) updateData.room_count = Number(req.body.room_count);
  if (req.body.customer_count)
    updateData.customer_count = Number(req.body.customer_count);
  if (req.body.payment_mode) updateData.payment_mode = req.body.payment_mode;
  if (req.body.compliment) updateData.compliment = req.body.compliment;

  db.collection("Hotel")
    .findOne({ id: id })
    .then((document) => {
      if (!document) {
        res.status(404).json({ error: "Id does not exist." });
        return;
      }

      db.collection("Hotel")
        .updateOne({ id: id }, { $set: updateData }, { returnOriginal: false })
        .then((result) => {
          res.status(200).json(result);
        })
        .catch((err) => {
          res.status(500).json({ error: err });
        });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

//Modify Restaurant
app.put("/restaurant/:id", (req, res) => {
  const id = Number(req.params.id);

  const updateData = {};
  if (req.body.Table_type) updateData.Table_type = req.body.Table_type;
  if (req.body.TableNo) updateData.TableNo = Number(req.body.TableNo);
  if (req.body.rent) updateData.rent = Number(req.body.rent);
  if (req.body.name) updateData.name = req.body.name;
  if (req.body.date)
    updateData.date = new Date(req.body.date).toLocaleDateString("en-US");
  if (req.body.customer_count)
    updateData.customer_count = Number(req.body.customer_count);
  if (req.body.payment_mode) updateData.payment_mode = req.body.payment_mode;
  if (req.body.time) updateData.time = req.body.time;
  db.collection("Restaurant")
    .updateOne({ id: id }, { $set: updateData }, { returnOriginal: false })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

//Delete Hotel
// app.delete("/task/:_id", (req, res) => {
//   const id = req.params._id;

//   db.collection("Task")
//     .deleteOne({ _id: new ObjectId(id) })
//     .then((result) => {
//       if (result.deletedCount === 0) {
//         res.status(404).json({ message: "Invalid item" });
//       } else {
//         res.status(200).json(result);
//       }
//     })
//     .catch((err) => {
//       res.status(500).json({ error: err });
//     });
// });
app.delete("/hotel/:id", (req, res) => {
  const id = Number(req.params.id);

  db.collection("Hotel")
    .deleteOne({ id: id })
    .then((result) => {
      if (result.deletedCount === 0) {
        res.status(404).json({ message: "Invalid item" });
      } else {
        res.status(200).json(result);
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});
//Get method for deleting user details
app.get("/hotel", (req, res) => {
  let customerIds = [];
  db.collection("Hotel")
    .find()
    .sort({ id: 1 })
    .forEach((record) => customerIds.push(record.id))
    .then(() => {
      res.status(200).json(customerIds);
    })
    .catch(() => {
      res.status(500).json({ error: "Failed to fetch the customer IDs" });
    });
});

//Delete Restaurant
app.delete("/restaurant/:id", (req, res) => {
  const id = Number(req.params.id);

  db.collection("Restaurant")
    .deleteOne({ id: id })
    .then((result) => {
      if (result.deletedCount === 0) {
        res.status(404).json({ message: "Invalid item" });
      } else {
        res.status(200).json(result);
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});
//Get method for deleting user details
app.get("/restaurant", (req, res) => {
  let customerIds = [];
  db.collection("Restaurant")
    .find()
    .sort({ id: 1 })
    .forEach((record) => customerIds.push(record.id))
    .then(() => {
      res.status(200).json(customerIds);
    })
    .catch(() => {
      res.status(500).json({ error: "Failed to fetch the customer IDs" });
    });
});
