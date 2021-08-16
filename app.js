var express = require("express");
var app = express();

// "/" => "Hello from DHARMIK!"
app.get("/",function(req,res){
    console.log("Someone has requested for /");
    res.send("Hello from DHARMIK!!");
});

// "/bye" => "GOODBYEE!!"
app.get("/bye",function(req,res){
    console.log("Someone has requested for /bye");
    res.send("Goodbye from DHARMIK!!");
});


//"/dog" => "MEOW!!"
app.get("/cat",function(req,res){
    console.log("Someone has requested for /cat");
    res.send("MEOWWWWWW!!");
});


//Sub routes wrt categories
app.get("/c/:animal",function(req,res){
    var ani = req.params.animal.toUpperCase();
    console.log(req.params);
    res.send("WELCOME TO THE WORLD OF "+ ani +"!!" );
});



// for undefined routes
app.get("*",function(req,res){
    console.log("Someone requested for ND");
    res.send("We will be back soon with this route");
});


//Tell EXPRESS to listen to request
app.listen(process.env.PORT || 3000, function(){
    console.log("Server started!!");
});