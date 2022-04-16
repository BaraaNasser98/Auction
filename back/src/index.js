const app = require('./app');
let { connection } = require("./config");

import auth from './auth/controller';
import filee from './filee/filee'
auth.auth();
filee.testCRUD();

// const bcrypt = require("bcryptjs");//password hached
const jwt = require("jsonwebtoken");// token

const data = require('./createDataBase');
data.createDataBase();

const start = async () => {


    // CREATE users
    app.post('/user', async (req, res, next) => {
        const { firstname, lastname, username, birthdate, address, phonenumber, password } = req.body;

        let att = "firstname, lastname, username, birthdate, address, phonenumber, password ";
        let values = [firstname, lastname, username, birthdate, address, phonenumber, password];
        let inValues = "?,?,?,?,?,?,?";
        try {
            let sql = `INSERT INTO users (${att}) VALUES (${inValues})`;
            connection.query(sql, values, function (err, result) {
                if (err) console.log(err);
                res.json({ success: true, result });
            });
        } catch (e) {
            next(e);
        }
    });


    // GET LIST user
    app.get('/user', async (req, res, next) => {
        try {
            let sql = `SELECT * FROM users`;
            connection.query(sql, function (err, result) {
                if (err) throw err;
                res.json({ success: true, result });
            });
        } catch (e) {
            next(e);
        }
    });

    // READ SINGLE user
    app.get('/user/:id', async (req, res, next) => {
        const { id } = req.params;
        try {
            let sql = `SELECT * FROM users WHERE id = ${id} LIMIT 1`;
            connection.query(sql, function (err, result) {
                if (err) throw err;
                res.json({ success: true, result: result[0] });
            });
        } catch (e) {
            next(e);
        }
    });


    // DELETE user
    app.delete('/user/:id', async (req, res, next) => {
        const { id } = req.params;
        try {
            let sql = `DELETE FROM users WHERE id = ${id}`;
            connection.query(sql, function (err, result) {
                if (err) throw err;
                res.json({ success: true, result });
            });
        } catch (e) {
            next(e);
        }
    });


    // UPDATE user
    app.put('/user/:id', (req, res) => {
        let { id } = req.params;
        let { firstname, lastname, username, birthdate, address, phonenumber, password } = req.body;
        let str = "";
        let values = [];

        if (firstname) {
            str += " firstname = ?,";
            values.push(firstname);
        }
        if (lastname) {
            str += " lastname = ?,";
            values.push(lastname);
        }
        if (username) {
            str += " username = ?,";
            values.push(username);
        }
        if (birthdate) {
            str += " birthdate = ?,";
            values.push(birthdate);
        }

        if (address) {
            str += " address = ?,";
            values.push(address);
        }

        if (phonenumber) {
            str += " phonenumber = ?,";
            values.push(phonenumber);
        }
        if (password) {


            str += " password = ?,";
            values.push(password);
        }

        str = str.slice(0, -1);
        str += " WHERE id= ?"
        values.push(id);

        let sql = `UPDATE users SET ${str}`;
        connection.query(sql, values, function (err, result) {
            if (err) throw err;
            res.send({ success: true, result });
        });


    });


    // CREATE Post
    app.post('/post', async (req, res, next) => {
        const { image, description, locationaddress, pricestart, isaccepted, bigindate, enddate, isactive, id_user } = req.body;
        let att = "image, description, locationaddress, pricestart, isaccepted, bigindate, enddate, isactive, id_user ";
        let values = [image, description, locationaddress, pricestart, isaccepted, bigindate, enddate, isactive, id_user];
        let inValues = "?,?,?,?,?,?,?,?,?";
        try {
            let sql = `INSERT INTO post (${att}) VALUES (${inValues})`;
            connection.query(sql, values, function (err, result) {
                if (err) throw err;
                res.json({ success: true, result });
            });
        } catch (e) {
            next(e);
        }
    });


    // GET LIST post
    app.get('/post', async (req, res, next) => {
        try {
            let sql = `SELECT * FROM post`;
            connection.query(sql, function (err, result) {
                if (err) throw err;
                res.json({ success: true, result });
            });
        } catch (e) {
            next(e);
        }
    });

    // READ SINGLE post
    app.get('/post/:id', async (req, res, next) => {
        const { id } = req.params;
        try {
            let sql = `SELECT * FROM post WHERE id = ${id} LIMIT 1`;
            connection.query(sql, function (err, result) {
                if (err) throw err;
                res.json({ success: true, result: result[0] });
            });
        } catch (e) {
            next(e);
        }
    });

    // get all post that been accepted
    app.get('/postaccepted', async (req, res, next) => {

        try {
            // let sql = `SELECT * FROM post WHERE post.isaccepted = true`;
            let sql = `SELECT
                post.*,
                auction.price,
                auction.id_user,
                users.firstname
                FROM post
                LEFT OUTER JOIN auction on auction.id_post = post.id
                LEFT JOIN users on users.id = auction.id_user
                WHERE post.isaccepted = true
                AND auction.price in (
                    null,
                    (SELECT MAX(price) FROM auction AS a
                    WHERE a.id_post = post.id)
                   
                );`
            connection.query(sql, function (err, result) {
                if (err) throw err;
                res.json({ success: true, result });
            });
        } catch (e) {
            next(e);
        }
    });



    // DELETE post
    app.delete('/post/:id', async (req, res, next) => {
        const { id } = req.params;
        try {
            let sql = `DELETE FROM post WHERE id = ${id}`;
            connection.query(sql, function (err, result) {
                if (err) throw err;
                res.json({ success: true, result });
            });
        } catch (e) {
            next(e);
        }

    });

    // UPDATE post
    app.put('/post/:id', (req, res) => {

        let { id } = req.params;
        let str = "";
        let values = [];

        let {
            bigindate,
            enddate,
            image,
            description,
            locationaddress,
            pricestart,
            isaccepted,
            isactive
        } = req.body;

        if (image) {
            str += " image = ?,";
            values.push(image);
        }
        if (description) {
            str += " description = ?,";
            values.push(description);
        }
        if (locationaddress) {
            str += " locationaddress = ?,";
            values.push(locationaddress);
        }

        if (pricestart) {
            str += " pricestart = ?,";
            values.push(pricestart);
        }
        if (isaccepted) {
            str += " isaccepted = ?,";
            values.push(isaccepted);
        }

        if (bigindate) {
            str += " bigindate = ?,";
            values.push(bigindate);
        }
        if (enddate) {
            str += " enddate = ?,";
            values.push(enddate);
        }
        if (isactive) {
            str += " isactive = ?,";
            values.push(isactive);
        }

        str = str.slice(0, -1);
        str += " WHERE id= ?"
        values.push(id);

        let sql = `UPDATE post SET ${str}`;
        connection.query(sql, values, function (err, result) {
            if (err) throw err;
            res.send({ success: true, result });
        });
    });



    // CREATE Auction
    app.post('/auction', async (req, res, next) => {

        const { date, price, id_post, id_user } = req.body;
        let att = " date, price ,id_post,id_user";
        let values = [date, price, id_post, id_user];
        let inValues = "?,?,?,?";

        try {
            let sql = `INSERT INTO auction (${att}) VALUES (${inValues})`;
            connection.query(sql, values, function (err, result) {
                if (err) throw err;
                res.json({ success: true, result });
            });
        } catch (e) {
            next(e);
        }


    });



    // GET LIST auction
    app.get('/auction', async (req, res, next) => {
        try {
            let sql = `SELECT * FROM auction`;
            connection.query(sql, function (err, result) {
                if (err) throw err;
                res.json({ success: true, result });
            });
        } catch (e) {
            next(e);
        }
    });

    // GET LIST auction
    app.get('/auctionmaxprice/:id', async (req, res, next) => {
        try {
            let { id } = req.params;
            let sql = `SELECT  max(price) AS maxPrice FROM auction where id_post=` + id;
            connection.query(sql, function (err, result) {
                if (err) throw err;
                res.json({ success: true, result: result[0] });
            });
        } catch (e) {
            next(e);
        }
    });



    // READ SINGLE auction
    app.get('/auction/:id', async (req, res, next) => {
        const { id } = req.params;
        try {
            let sql = `SELECT * FROM auction WHERE id = ${id} LIMIT 1`;
            connection.query(sql, function (err, result) {
                if (err) throw err;
                res.json({ success: true, result: result[0] });
            });
        } catch (e) {
            next(e);
        }
    });


    // DELETE auction
    app.delete('/auction/:id', async (req, res, next) => {
        const { id } = req.params;
        try {
            let sql = `DELETE FROM auction WHERE id = ${id}`;
            connection.query(sql, function (err, result) {
                if (err) throw err;
                res.json({ success: true, result });
            });
        } catch (e) {
            next(e);
        }

    });



    // UPDATE auction
    app.put('/auction/:id', (req, res) => {
        let { id } = req.params;
        let { date, price } = req.body;
        let str = "";
        let values = [];

        if (date) {
            str += " date = ?,";
            values.push(date);
        }
        if (price) {
            str += " price = ?,";
            values.push(price);
        }

        str = str.slice(0, -1);
        str += " WHERE id= ?"
        values.push(id);

        let sql = `UPDATE auction SET ${str}`;
        connection.query(sql, values, function (err, result) {
            if (err) throw err;
            res.send({ success: true, result });
        });
    });



    // CREATE mssg
    app.post('/mssg', async (req, res, next) => {
        const { title, Email, description } = req.body;
        let att = "title, Email, description ";
        let values = [title, Email, description];
        let inValues = "?,?,?";
        try {
            let sql = `INSERT INTO mssg (${att}) VALUES (${inValues})`;
            connection.query(sql, values, function (err, result) {
                if (err) throw err;
                res.json({ success: true, result });
            });
        } catch (e) {
            next(e);
        }
    });

    // DELETE mssg
    app.delete('/mssg/:id', async (req, res, next) => {
        const { id } = req.params;
        try {
            let sql = `DELETE FROM mssg WHERE id = ${id}`;
            connection.query(sql, function (err, result) {
                if (!result) {
                    res.json({ error: false })
                }
                res.json({ success: true, result });
            });
        } catch (e) {
            next(e);
        }
    });

    app.get('/mssg', async (req, res, next) => {
        try {
            let sql = `SELECT * FROM mssg`;
            connection.query(sql, function (err, result) {
                if (!result) {
                    res.json({ error: false })
                }
                res.json({ success: true, result });
            });
        } catch (e) {
            next(e);
        }
    });


    //JOIN 
    app.get('/postdetails/:id', async (req, res, next) => {
        let { id } = req.params;
        try {
            let sql = `SELECT * 
        FROM users 
        INNER JOIN post on users.id = post.id_user         
        WHERE users.id=${id}`;
            connection.query(sql, function (err, result) {
                if (err) throw err;
                res.json({ success: true, result: result });
            });
        } catch (e) {
            next(e);
        }
    });

    app.get('/auctiondetails', async (req, res, next) => {
        let { id } = req.params;
        try {
            let sql = `SELECT 
            auction.*,
            users.firstname,
            users.lastname,
            users.username,
            users.phonenumber
            


        FROM auction 
        INNER JOIN users on users.id = auction.id_user         
        INNER JOIN post on post.id = auction.id_post`;
            connection.query(sql, function (err, result) {
                if (err) throw err;
                res.json({ success: true, result: result });
            });
        } catch (e) {
            next(e);
        }
    });


    //LOGIN
    app.post('/login', async (req, res, next) => {
        const { username, password } = req.body;
        try {

            let sql_p = `SELECT * FROM users`;
            let log = ``;

            connection.query(sql_p, async function (err, datas) {
                console.log(datas)
                if (!datas) {
                    res.json({ error: false });
                    return;
                }
                let user = await datas.find(r => r.username == username);

                if (!user) {
                    res.json({ error: false });
                    return;
                }

                if (user) {
                    log = `UPDATE users SET token = ? WHERE id = ? `;
                    let isMatch = (password == user.password)

                    if (!isMatch) {
                        res.json({ error: false });
                        return;
                    }
                    if (isMatch) {
                        let payload = { id: user.id };
                        let token = jwt.sign(payload, "randomString", { expiresIn: 10000 });

                        connection.query(log, [token, user.id], function (err, result) {
                            if (!result) {
                                res.json({ error: false });
                                return;
                            }

                            res.json({ success: true, result });
                        });
                    }
                }
            });

        } catch (e) {
            next(e);
        }
    });




    //LOGOUT
    app.post('/logout', async (req, res, next) => {
        const { username } = req.body;
        try {

            let sql_p = `SELECT * FROM users`;
            let log = ``;

            connection.query(sql_p, function (err, datas) {
                if (err) throw err;
                let user = datas.find(r => r.username == username);

                if (user) {
                    log = `UPDATE users SET token = ? WHERE id = ? `;
                    connection.query(log, [null, user.id], function (err, result) {
                        if (err) throw err;
                        res.json({ success: true, result });
                    });
                }
            });

        } catch (e) {
            next(e);
        }
    });




}

app.get('/', (req, res) => res.send("ok"));

app.listen(process.env.PORT || 9000, () => console.log('server listening on port 9000'));
start();
