const express=require('express');
const app=express();
require('./db/mongoose');
const User=require('./models/users')
const Task=require('./models/task')


const userRouter=require('./routers/userRouter');
const taskRouter=require('./routers/taskRouter')
app.use(express.json());

app.use(userRouter);
app.use(taskRouter);

//Port No configuration
app.listen(3000,()=>{
console.log('Listning on port no 3000');
})