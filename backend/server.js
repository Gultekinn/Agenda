const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
const cardRoute = require('./app/routes/Card.route')
const userRoute = require('./app/routes/AuthRoutes')
app.use('/api/users', userRoute)
const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.use(express.json({ limit: "20mb" }));
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
mongoose.set("strictQuery", true);

const path = require('path')
const uploadPath=path.join(__dirname,'public')
app.use('/public',express.static(uploadPath))
app.use(cors({credentials:true,origin:'http://localhost:3000'}))
mongoose.connect("mongodb+srv://gultekin:gulu2003@cluster0.ez8varc.mongodb.net/").then(()=>{
    console.log("connected")
})

app.use('/cards',cardRoute)

app.use('/auth', userRoute)

app.listen(7075, () => {
    console.log("server running")
})