const express = require('express');
const app = express();
const port = 5000;
app.get('/', (req, res) =>{
    res.json({message:'Hii api from hosted in ec2'});
})
app.listen(port,()=>{
    console.log('SERVER IS LISTENING ON PORT ',port);
});