const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRouter = require("./routes/authRoute");

const app = express();

//1) MIDDLEWARE
app.use(cors());
app.use(express.json());
//2) ROUTE
app.use("/api/auth", authRouter);
app.get('/',(req,res)=>{
  res.send('Welocome to Server'));

//3) MONGO DB CONNECTION
mongoose
  .connect(
    "mongodb+srv://ashirbad:Ashirbad1998@cluster0.uilc5a6.mongodb.net/authentication"
  )
  .then(() => console.log("Connected to MongoDB!"))
  .catch((error) => console.log("Failed to connect to MongoDB:", error));

//4) GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

//5) SERVER
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
