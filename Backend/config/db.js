const mongoose =require('mongoose');

const dbConnect = ()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{console.log("DB connected sucessfully")})
    .catch((error)=>{
        console.log("DB connection falied")
        console.error(error);
        process.exit(1);
    })
}