import express from "express";
import { PORT } from "./config/env";
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the Subscription Tracker API!");
});


app.listen(PORT, hostname : () => {
    console.log(`Server is running on port ${PORT}`);
});


export default app;
