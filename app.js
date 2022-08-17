const express = require("express");
const app = express();
const port = 8080;
const sql = require("./configs/database");

app.use(express.json());

app.get("/", (req, res) => {
    try {
        sql.query("SELECT * FROM users", (err, results) => {
            if (err) {
                console.log(err);
                return res.status(400).send();
            }
            res.status(200).send(results);
        });
    } catch (error) {
        res.status(500).send();
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
