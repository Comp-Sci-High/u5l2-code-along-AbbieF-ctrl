const express = require("express");
// import your mongoose

// install your mongoose
const mongoose = require("mongoose");
const app = express();

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

// create a studentSchema with name, grade, advisory, and fav subject

const studentSchema = new mongoose.Schema({
  name: {type: String, required: true},
  grade: {type: Number, default: 9},
  favSubject: {type: String, required: true}
})

// connect your schema to a model called Student

const Student = mongoose.model("Student", studentSchema, "Students")

// create a route hanlder for /g12 that returns every student in grade 12

app.get("/g12", async (req, res) => {
const students = await Student.find({ })
res.json(students)
})

app.post('/student/save', async (req, res) => {
  const me = await new Student({
    name: req.body.name,
    grade: req.body.grade,
    favSubject: req.body.favSubject
  }).save()
  res.json(student)
})

// (OYO) create a route hanlder for /me that returns yourself without using your name in the query

// (OYO) create a route hanlder for /friend that returns someone at your table using their name in the query

// Write an async function called startServer
// inside make sure to connect to mongoose w/ your SRV string
// (make sure your call you name your database myClass!)
// Save a document to mongoDB about yourself 
// (OYO) save 2 more documents about students at your table
// make sure to start your server 

async function startServer(){
await mongoose.connect("mongodb+srv://SE12AbiF:CSH2025@cluster0.ebb1f.mongodb.net/codealong?retryWrites=true&w=majority&appName=Cluster0")

const me = await new Student({
  name: "Castro",
  grade: 13,
  favSubject: "Art"
}).save()

const abi = await new Student({
  name: "Abigail",
  grade: 12,
  favSubject: "Software Enginnering"
}).save()

const andry = await new Student({
  name: "Andry",
  grade: 11,
  favSubject: "Music"
}).save()

app.listen(3000, () => {
  console.log("Server is running")
})
}

startServer()

// call startServer

// if you finished all the excersizes try these 
