
const express=require('express');
const router=express.Router();



//Post Method For Task
router.post('/tasks',(req,res)=>{
    const task=new Task(req.body); 
    task.save().then(()=>{   
        res.send(task);
    }).catch((e)=>{    
        res.status(400).send(e); 
    })
   
   })
   

//Get perticular task
router.get('/tasks/:id',async(req,res)=>{
    //console.log(req.params.id);
    const __id=req.params.id;
    
    try {
    
        const user=await Task.findById(__id);
        if(!user)
        {
            return res.status(404).send()
        }
        res.send(user);
    
        
    } catch (error) {
    
        res.status(500).send();
    }
})    



module.exports=router;