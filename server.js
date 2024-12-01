import express from'express';
import dotenv from "dotenv";
import connectDB from './config/db.js';
dotenv.config();
const app = express();
app.use(express.json());
connectDB();
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
      console.error("Bad JSON:", err.message);
      return res.status(400).send({ error: "Invalid JSON payload" });
    }
    next();
  });
  



  app.post("/endpoint", (req, res) => {
    console.log("Headers:", req.headers);
    console.log("Body:", req.body);
    res.send("Received");
  });
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });