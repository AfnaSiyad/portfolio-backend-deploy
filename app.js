const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

const userRoutes = require("./routes/userRoutes");



app.use('/api/v1',userRoutes)

module.exports = app;