const mysql = require("mysql");

const database = {
    mySQL() {
        const connection = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "myDB",
        });

        connection.connect(function (error) {
            if (error) {
                throw error;
            } else {
                console.log("mysql connect successfuly");
            }
        });

        return connection;
    },
};

module.exports = database.mySQL();
