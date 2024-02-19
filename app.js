const express = require(`express`);
const router = require("./routes");
const app = express();
app.use(express.json());
const port = 3500;

app.use(`/api`, router);
app.listen(port, () => console.log(`server running on port ${port}`));
