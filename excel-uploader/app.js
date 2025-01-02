const express=require('express');
const app=express();
require('dotenv').config({ path: './config/.env' });//load the env file
const PORT=process.env.PORT ||8081 ;//load the PORT from env
require('./config/connection');//initiate the database connection



//starting the server
app.listen(PORT,()=>{
    console.log(`Server is on running on port  ${PORT}`);
});
