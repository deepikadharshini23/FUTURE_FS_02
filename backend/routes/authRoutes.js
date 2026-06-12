
const express = require("express");
const router = express.Router();

const db = require("../db");

console.log("🔥 authRoutes FILE LOADED");

router.get("/test", (req, res) => {
    res.send("AUTH ROUTE WORKING");
});

router.post("/login", (req, res) => {

     console.log("🔥 LOGIN ROUTE HIT");

    const { username, password } = req.body;

    db.query(
        "SELECT * FROM users WHERE username=? AND password=?",
        [username, password],
        (err, results) => {

            if (err) {
                return res.status(500).json(err);
            }

            if (results.length === 0) {
                return res.status(401).json({
                    message: "Invalid credentials"
                });
            }

            res.json({
                message: "Login successful"
            });

        }
    );

});

module.exports = router;