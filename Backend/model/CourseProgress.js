const mongoose =require('mongoose');

const courseProgress = new mongoose.Schema({
    courseID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course",
    },
    completedVedioes:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Subsection",
        }
    ]
});

module.exports =mongoose.model("courseProgress",courseProgress);
