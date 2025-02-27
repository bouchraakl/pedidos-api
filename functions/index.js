const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const pedidosRoutes = require("./routes/pedidosRoutes");
app.use("/api", pedidosRoutes);

exports.api = functions.https.onRequest(app);
