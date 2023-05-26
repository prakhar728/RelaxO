const express = require('express')
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/healthCheck',(req,res)=>{
    return res.json('Beep Beep Boop Boop. Server is working')
})
app.listen(PORT,()=>{
    console.log('Server is now Active');
})