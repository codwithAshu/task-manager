const mongoose =require("mongoose");
const db_url=process.env.DB_URL;
mongoose.connect(db_url)
.then(()=>{
    console.log("mongoosedb is connected");
    
}).catch((err)=>{
    console.log(err);
    
})
