require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const dbConnect = require("./config/mongo");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./uploads",
  })
);
app.use("/api", require("./routes"));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

dbConnect();
