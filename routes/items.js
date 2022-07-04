var express=require("express");
var router=express.Router();
a    =require("../models/user.js"),
alluser            =require("../models/user.js"),
middleware = require("../middleware/middleware.js");

// REGISTER
router.post("/register",function(req,res)
{ 
  var newUser=new User({      firstname:req.body.firstname,
                              lastname:req.body.lastname,
                              number:req.body.number,
                              dob:req.body.dob,
                              gender:req.body.gender,
                              username:req.body.username    });
                              console.log(req.body.firstname);
  console.log(req.body.password);
  User.register(newUser,req.body.password,function(err,user){
      if(err)
      {
          console.log("unable to register user");
          console.log(err);
          res.redirect("/registerfailed")
      }
      else{
          passport.authenticate("local")(req,res,function()
          {
              console.log("registered new user",req.user);
              res.locals.currentUser=req.user;
              res.redirect("/myaccount");
          });
      }
  });
});

//LOGIN
router.post("/login",passport.authenticate('local',{
  successRedirect:'/tour',
  failureRedirect:"/loginfailed"
}
)
);

module.exports = router;