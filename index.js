const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());

app.get("/compute" , (req, res) => {
	let num = req.query.number ; 
	let n = parseFloat(num);
	let result = Math.sqrt(n);
	let msg = "Square Root : " + result.toFixed(2) + "\n";
	fs.appendFile("result.txt" , msg, (err) => {
	if (err) 	console.log(err);
});

	res.json({"res" : msg});

});

app.listen(9000 , () => {console.log("Ready to server @ 9000");});