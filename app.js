const express = require("express");
const bodyParser = require("body-parser"); 
const app = express();
var tasks=["Book","Pencil","Eraser"];
var workItems=[];

app.set('view engine' , 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
    app.get("/",  function(req,res){
        var today = new Date();
        var currentDay = today.getDay();
        var day="";
        
        var options={
            weekday:"long",
            day:"numeric",
            month:"long",

        };
        var day = today.toLocaleDateString("en-US",options);
        res.render("listen", {listTitle:day , ListItem:tasks});
     
        res.send();
    });
app.get("/about", function(req,res){
    res.render("about");
});
    app.post("/", function(req,res){
        
        let task = req.body.newItem;
        if(req.body.list==="Work"){
            workItems.push(task);
            res.redirect("/work")
        }
        else{
            tasks.push(task);
            res.redirect("/");
        }
        console.log("The task is "+ task);
    }); 
    app.get("/work", function(req,res){
        res.render("listen", {listTitle:"Work List" ,ListItem:workItems});
    });
    // app.post("/work", function(req,res){
    //     var item = req.body.newItem;
    //     res.redirect("/work");
    // });

    app.listen(3000, function(){
        console.log("Server started at port 3000");
    });