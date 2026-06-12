console.log("🔥 SERVER STARTED FILE:", __filename);
const express = require("express");
console.log("Before DB");
require("./db");
console.log("After DB");
const app = express();

app.use((req, res, next) => {
    console.log("➡️", req.method, req.url);
    next();
});

//const leadRoutes = require("./routes/leadRoutes");
//const authRoutes = require("./routes/authRoutes");
      
//app.use(express.json());
//app.use("/api/auth", authRoutes);

// Manual CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS"
    );

    if (req.method === "OPTIONS") {
        return res.sendStatus(200);
    }

    next();
});

app.use(express.json());
const leadRoutes = require("./routes/leadRoutes");
const authRoutes = require("./routes/authRoutes");

// ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/leads", leadRoutes);

app.get("/", (req, res) => {
    res.send("CRM Backend Running");
});



app.listen(3000, () => {
    console.log("Server running on port 3000");
});