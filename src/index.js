import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

//Middlewares
app.use(express.json());
app.use(cors());

//Routes
/*app.get("/", (req, res) => {
  res.send("Welcome to the Restful API service using Node.js, Express.js, and PostgreSQL database");
});*/

//error handling middleware
/*app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
}   );*/

//server running
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



