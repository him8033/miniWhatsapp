const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const path = require("path");

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
main()
    .then(() => {
        console.log("mongoose connections successfuly");
    })
    .catch((err) => {
        console.log(err);
    })

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

app.get("/",(req,res) => {
    res.send("Root is working");
})

app.listen(port,() => {
    console.log("app is listening on port:",port);
})