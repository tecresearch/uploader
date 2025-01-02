const mongoose=require('mongoose');
const DB_URL=process.env.MONGO_URL;

mongoose.connect(DB_URL)
.then(()=>{
    console.log(`Mongodb connected successfully`);
})
.catch((err)=>{
  console.log(err.message);
});