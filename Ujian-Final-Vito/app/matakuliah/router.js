var express = require('express');
var router = express.Router();
const {index, getUserById} = require("./controller");
/* GET home page. */
router.get("/matakuliah", index );
router.get("matakuliah/:id", getUserById)
module.exports = router;
