import express from "express";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.js"
import listingRoutes from "./routes/listing.js";
import cors from "cors"
import dotenv from 'dotenv';
dotenv.config();
const app = express();
import bookingRoutes from "./routes/booking.js"
import userRoutes from "./routes/user.js"
// const bookingRoutes = require("./routes/booking.js")
// const userRoutes = require("./routes/user.js")

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

/* ROUTES */
app.use("/auth", authRoutes)
app.use("/properties", listingRoutes)
app.use("/bookings", bookingRoutes)
app.use("/users", userRoutes)

/* MONGOOSE SETUP */
const PORT = 3001;
mongoose
  .connect(process.env.MONGO_URL, {
    dbName: "Dream_Nest",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((err) => console.log(`${err} did not connect`));