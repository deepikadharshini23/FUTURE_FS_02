
const express = require("express");
const router = express.Router();

const db = require("../db");

console.log("🔥 leadRoutes FILE LOADED");
console.log("🔥 STATS ROUTE REGISTERED");



// GET ALL

router.get("/", (req, res) => {

    console.log("Reading from MySQL");

    db.query(
        "SELECT * FROM leads",
        (err, results) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json(results);
        }
    );

});


// ADD LEAD
router.post("/", (req, res) => {

    const { name, email, phone, company } = req.body;

    const sql = `
        INSERT INTO leads
        (name, email, phone, company, status)
        VALUES (?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [name, email, phone, company, "new"],
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: "Lead added successfully",
                id: result.insertId
            });

        }
    );

});
   

// UPDATE STATUS
router.put("/:id", (req, res) => {

    const { status } = req.body;

    db.query(
        "UPDATE leads SET status = ? WHERE id = ?",
        [status, req.params.id],
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: "Status updated"
            });

        }
    );

});

//  NOTES ROUTE 
router.post("/:id/notes", (req, res) => {

    const note = req.body.note;

    db.query(
        "UPDATE leads SET notes = ? WHERE id = ?",
        [note, req.params.id],
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: "Note saved successfully"
            });

        }
    );

});

router.delete("/:id", (req, res) => {

    db.query(
        "DELETE FROM leads WHERE id = ?",
        [req.params.id],
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: "Lead deleted successfully"
            });

        }
    );

});

router.put("/:id/edit", (req, res) => {

    const { name, email, phone, company } = req.body;

    db.query(
        `
        UPDATE leads
        SET
            name = ?,
            email = ?,
            phone = ?,
            company = ?
        WHERE id = ?
        `,
        [
            name,
            email,
            phone,
            company,
            req.params.id
        ],
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: "Lead updated successfully"
            });

        }
    );

});


module.exports = router;