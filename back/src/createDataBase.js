let { connection } = require("./config");

const bcrypt = require("bcryptjs");

const createDataBase = async () => {

    var users = `CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTO_INCREMENT,
        role INTEGER NOT NULL DEFAULT 0,
        firstname TEXT,
        lastname TEXT,
        username TEXT UNIQUE,
        birthdate DATE ,
        address TEXT,
        phonenumber TEXT , 
        password VARCHAR(255) NOT NULL UNIQUE,
        token TEXT 
        )`;



    var post = `CREATE TABLE IF NOT EXISTS post (
            id INTEGER PRIMARY KEY AUTO_INCREMENT,
            fileSrc TEXT,
            description TEXT,
            locationaddress TEXT,
            pricestart TEXT,
            isaccepted TEXT DEFAULT 0,
            bigindate DATE,
            enddate  DATE,
            isactive TEXT DEFAULT 0,
            id_user INTEGER NOT NULL,
            FOREIGN KEY (id_user) REFERENCES users(id)
            )`; 

    var auction = `CREATE TABLE IF NOT EXISTS auction (
                id INTEGER PRIMARY KEY AUTO_INCREMENT,
                date DATE ,
                price  TEXT,
                id_post INTEGER NOT NULL,
                id_user INTEGER NOT NULL,
                FOREIGN KEY (id_post) REFERENCES post(id),
                FOREIGN KEY (id_user) REFERENCES users(id)
                )`;
                
                var mssg = `CREATE TABLE IF NOT EXISTS mssg (
                    id INTEGER PRIMARY KEY AUTO_INCREMENT,
                    title TEXT,
                    Email TEXT,
                    description TEXT
                   
                 
                )`;

    const database = [users, post, auction, mssg]
    database.map(sql => {
        connection.query(sql, function (err, result) {
            if (err) throw err;
        });
    });
}
module.exports = { createDataBase };