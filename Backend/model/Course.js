// 2nd Session lecture 1 1,14,44

const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    couresName:{
        type:String,
        trim:true,
    },
    courseDescription:{
        type:String,

    },
    instructor:{
        type:mongoose.Schema.Types.ObjectId,

    },
    whatYouWillLearn:{
        type:String, 
    },
    courseContent:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Section",
        }
    ],
    ratingAndRevives:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"RatingAndReview"
    }],
    Price:{
        type:Number,
    },
    thumbNail:{
        type:String,
    },
    tag:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Tag",
    },
    studentsEnrolled:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }]
})


module.exports=mongoose.model("Course",courseSchema);