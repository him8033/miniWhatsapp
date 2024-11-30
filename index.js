const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js")

app.set("view engine","ejs");
app.set("views", path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));

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

app.get("/chats",async(req,res) => {
    let chats = await Chat.find();
    res.render("index.ejs",{chats});
})

app.get("/chats/new",(req,res) =>{
    res.render("new.ejs");
})

app.post("/chats",(req,res)=>{
    let {from,msg,to} = req.body;
    let newChat = new Chat({
        from:from,
        msg:msg,
        to:to,
        created_at: new Date()
    })
    newChat.save()
        .then(()=>{
            console.log("Chat Saved Successfully");
        })
        .catch((err)=>{
            console.log(err);
        })
    res.redirect("/chats");
})

app.get("/",(req,res) => {
    res.send("Root is working");
})

app.listen(port,() => {
    console.log("app is listening on port:",port);
})