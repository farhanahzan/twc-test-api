const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const authRoutes = require("./Routes/AuthRoutes.js")
const contactRoutes = require("./Routes/ContactRoutes")
const cookieParser = require('cookie-parser')

const app = express();
const port = process.env.PORT || 6000
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`server started on port ${port}`);
    });
  })
  .catch((err) => {
    console.log('Error in connecting DB');
  });
app.use(
  cors({
    origin: [process.env.ORIGIN],
    method: ['GET', 'POST', 'DELETE','PUT'],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use("/", authRoutes)
app.use('/', contactRoutes);

