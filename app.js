// buat server express
const express = require("express");
const router = require("./routes");
const app = express();
const port = 4000;

app.use(express.json()); // agar bisa menerima data dari client dalam bentuk JSON dari method post
app.use("/api", router);

app.listen(port, () => console.log(`server running on port ${port}`));
