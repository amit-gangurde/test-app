
const express=require('express');
const router=express.Router();



//Get All User
router.get('/users',(req,res)=>{
    User.find({}).then((users)=>{
        res.send(users);    
    }).catch((e)=>{
      res.status(500).send(e);
    })
    })
    

//get User by id
router.get('/users/:id',(req,res)=>{
    //console.log(req.params.id);
 const _id=req.params.id;

 User.findById(_id).then((user)=>{
     if(!user)
     {
         return res.status(404).send();
     }
   
    res.send(user);

 }).catch((e)=>{
    res.status(500).send(e); 

 })
})


// post User 
router.post('/users',async(req,res)=>{
 
    const user=new User(req.body);
  try {
      await user.save();
      res.status(201).send(user)
      
  } catch (error) {
      res.status(400).send(error)      
  }

})



//patch Http

router.patch('/users/:id',async(req,res)=>{
    const aloowtoUpdate=['name','email','password','age'];
    

try {
    const user=await User.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
   if(!user)
   {
       res.status(200).send();
   }
   else{
       res.send(user);
   }

} catch (error) {
    res.send(error);
    
}
})


module.exports=router;