const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js")

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

let chat1 = new Chat({
    from:"neha",
    to:"priya",
    msg:"send me your exam sheet",
    created_at: new Date()
})

chat1.save()
    .then((res)=>{
        console.log(res);
    })

app.get("/",(req,res) => {
    res.send("Root is working");
})

app.listen(port,() => {
    console.log("app is listening on port:",port);
})