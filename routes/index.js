var express=require("express");
const { isAdmin } = require("../middleware/middleware.js");
var router=express.Router();
alluser            =require("../models/user.js"),
middleware = require("../middleware/middleware.js");
a    =require("../models/user.js"),

//HOME
router.get("/",function(req,res)
{
    res.render("home");
});;

//REgISTER
router.get("/register",function(req,res)
{
    res.render("register");
});

// login
router.get("/login",function(req,res)
{
    res.render("login");
});


//signout
router.get("/logout",function(req,res)
{
    req.logout();
    res.redirect("/thanks");
});

module.exports = router;
