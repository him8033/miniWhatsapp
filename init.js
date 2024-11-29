const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
    .then(() => {
        console.log("mongoose conn is success");
    })
    .catch((err) => {
        console.log(err);
    })

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
};

let chatData = [
    {
        from: "neha",
        to: "priya",
        msg: "send me your exam sheet",
        created_at: new Date()
    },
    {
        from: "anuj",
        to: "prashant",
        msg: "Webtech notes",
        created_at: new Date()
    },
    {
        from: "arjun",
        to: "priya",
        msg: "time of the class",
        created_at: new Date()
    },
    {
        from: "neha",
        to: "karan",
        msg: "where are you",
        created_at: new Date()
    },
    {
        from: "ankit",
        to: "shivam",
        msg: "come in class",
        created_at: new Date()
    },
    {
        from: "akash",
        to: "ankush",
        msg: "give your notes",
        created_at: new Date()
    },
    {
        from: "namrata",
        to: "sneha",
        msg: "what is class schedule",
        created_at: new Date()
    },
    {
        from: "aman",
        to: "ayush",
        msg: "what is the coaching time",
        created_at: new Date()
    },
]

Chat.insertMany(chatData);