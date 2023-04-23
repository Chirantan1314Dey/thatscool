const mysql = require('mysql');

var con = mysql.createConnection({
    host:"bupqonpuabfnntbiiqsh-mysql.services.clever-cloud.com",
    user:"u8wkp4qy2hiqvr3d",
    password:"HAZzJGl978v8XTOiexAp",
    database:"bupqonpuabfnntbiiqsh"
  });

  module.exports = con;