//Express
const express = require('express');
const dataMember = require('./members.js');
const dataUsers = require('./users.js');
const moment = require('moment');

const app = express();

app.get('/', (req, res) => {
  res.send('This Is the Home Page');
});

app.get('/about', (req, res) => {
  res.json({
    status: 'success',
    message: 'response success',
    description: 'Exercise #03',
    date: moment().format(),
    data: dataMember,
  });
});

app.get('/users', (req, res) => {
  res.json(dataUsers);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});


/*const http        = require("http");
const dataMember  = require("./members.js");
const dataUsers   = require("./users.js");
const moment      = require("moment");

const server = http.createServer((req, res) =>{
    const url = req.url;
    res.statusCode = 200;

    if (url === "/"){
        res.setHeader('Content-Type', 'text/plain');
        res.write("This Is the Home Page");
    }
    else if (url === "/about"){
        res.setHeader('Content-Type', 'text/plain');
        res.write(
            JSON.stringify({
                status: "success",
                message: "response success",
                description: "Exercise #03",
                date:moment().format(),
                data: dataMember,
            })
        )
    }
    else if (url === "/users"){
        res.setHeader("conten-type", "text/json");
        res.write(JSON.stringify(dataUsers));
    }
    res.end();
})

const hostname = '127.0.0.1'; // atau localhost
const port = 3000;
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

*/
