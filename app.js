 const express = require("express");
 const bodyParser = require('body-parser')

 const app = express();
 const port = 3000;

 app.use(express.static('public'));
 app.use(bodyParser.urlencoded({ extended: false }))

 app.post("/",(req,res)=>{
     console.log(req.body);
     res.send("THX!");
 })

 app.listen(port,()=>console.log("App listening at port "+port));
