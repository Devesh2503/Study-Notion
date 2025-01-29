const mongoose =require('mongoose');

const userSchema =new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true,
    },
    lastNmae:{
        type:String,
        required:true,
        trim:true, 
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
    },
    accountType:{
        type:String,
        enum:["Admin","Student","Instructor"],
        required:true

    },
    additionalDetails:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Profile",
        required:"true",
    },
    courses:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Course",
        }
    ],
    image:{
        type:String,
        required:true,
    },
    courseProgress:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"CourseProgress", 
        }
    ]
});

module.exports =mongoose.model("User",userSchema);

/// 1.6.30  megaBackend class 1