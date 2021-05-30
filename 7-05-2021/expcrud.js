//develop an express web application to perforn crud operations on employee data .

var express=require("express")
var firebase=require("firebase")

var app=express();
app.use(express.urlencoded())
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDmxgKDX73124xH2g4926sDO0g6NOX0vuM",
    authDomain: "exp2-c1326.firebaseapp.com",
    projectId: "exp2-c1326",
    storageBucket: "exp2-c1326.appspot.com",
    messagingSenderId: "736017548994",
    appId: "1:736017548994:web:f2d99b586eac8569021d5b",
    measurementId: "G-G1DZ4CCCD9"
  };
  firebase.initializeApp(firebaseConfig);

  var dbRef=firebase.database().ref().child("employee")

  app.get("/employee",(req,res)=>{
      dbRef.once("value",(snap)=>{
          res.send(snap.val())
      })
  })
  app.get("/employee/:eid",(req,res)=>{
    var eid=req.params.eid
    dbRef.child(eid).once("value",(snap)=>{
        res.send(snap.val())
    })
  })
  app.post("/addEmployee",(req,res)=>{
     var eid=req.body.eid
      dbRef.child(eid).set({
          eid:req.body.eid,
          ename:req.body.ename,
          ebranch:req.body.ebranch
      })
      res.send("Inserted Successfully")
  })
  app.delete("/deleteEmployee/:eid",(req,res)=>{
      var eid=req.params.eid
      dbRef.child(eid).remove()
      res.send("Deleted successfully")
  })
  app.listen(3000,()=>{
    console.log("Server Started.......")
  })