
const express = require("express");
const app = express();
const users = require("./users");
const morgan = require("morgan");
const e = require("express");
const port = 3000;
  

app.use(morgan("combined"));
  
app.get('/users', (req, res) => {
    res.json(users);
  });
  
app.get("/users/:name",(req,res)=>{
  forEach((e)=>{
    if(req.params.name.toLocaleLowerCase() === e.name.toLocaleLowerCase()){
      res.json(e);
    }
  })
  res.json({
    message: "Data user tidak ditemukan",
  })
});

const errorHandling = (err, req, res, next) => {
    res.json({
      status: "error",
      message: "Terjadi kesalahan pada server",
    });
  };
app.use(errorHandling);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


