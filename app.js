var express = require('express');
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");

app.get("/",function(req,res){
	res.render("landing");
})

app.get("/campgrounds",function(req,res){
	var campgrounds = [
	{name: "Salmon Creek",image:"https://goo.gl/images/y81Xs4"},
	{name: "Granite hill",image:"https://goo.gl/images/M8rbdi"},
	{name: "Mountain goat",image:"https://goo.gl/images/D8udyA"},
	{name: "Salmon Creek",image:"https://goo.gl/images/y81Xs4"},
	{name: "Granite hill",image:"https://goo.gl/images/M8rbdi"},
	{name: "Mountain goat",image:"https://goo.gl/images/D8udyA"},
	{name: "Salmon Creek",image:"https://goo.gl/images/y81Xs4"},
	{name: "Granite hill",image:"https://goo.gl/images/M8rbdi"},
	{name: "Mountain goat",image:"https://goo.gl/images/D8udyA"}
	];

	res.render("campgrounds",{campgrounds:campgrounds});
});
app.post("/campgrounds", function(req,res){
	res.send("post route");

});

app.get("/campgrounds/new", function(req,res){
	app.render("new");
})
	

app.listen(3000,function(){
	 console.log("The Yelp camp Server has been started");
});