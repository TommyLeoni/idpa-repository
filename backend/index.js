const fileUpload = require("express-fileupload");
const apiRoutes = require("./routes/api");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(fileUpload());
app.use(express.json());

/* app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
}); */

app.use("/api", apiRoutes);

app.listen(port , () => {
    console.log(`Server running on port ${port}`);
})