import express from "express";

import userRoutes from "./routes/users.js";

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRoutes);

app.get("/", (req, res) => res.send("Hello from Homepage."));

app.listen(PORT, () => console.log("Server Running on Port 5000"));

/*
1. Run on terminal -> npm init -y
2. Install express
3. Add in package.json -> "type":"module", to allow usimg import statement in index.js
4. In package.json, under scripts, remove the test key and add "start":"nodemon index.js"
*/
