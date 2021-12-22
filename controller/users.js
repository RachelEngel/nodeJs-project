const Users = require('../models/users');
const { findById } = require('../models/users');


const createUser = async (req,res) => {
     let newUser = new Users(req.body)
     try {
        let currentUser = await newUser.save();
         res.send(currentUser)
     } catch(err){
         res.status(500)
         res.send(err)
     }}



const getUserByName = async (req, res) => {
    const filter = { userName: req.params.name };
    try {
       const user = await Users.findOne(filter);
       if(!user)
        {
           res.status(404);
           res.send("user not found");
           return;
        }
        res.send(user)
    } catch(err){
        res.status(500); 
        res.send(err);
    }
}



    // User.findByIdAndUpdate(
    //      { _id: userId }, { $pull: { "weathers": { id: historyId } } }, { safe: true, upsert: true })
    // .then((p) => {
    //      console.log("weather is deleted from user history"); 
    //     res.send("weather is deleted from user history")
    //      return 
    // })
    // .catch((d) => { 
    //     console.log("failed to delete weather from user history"); 
    //     res.status(400)
    //     res.send("failed to delete weather from user history")
    //     return 
    // })


module.exports = { createUser, getUserByName }