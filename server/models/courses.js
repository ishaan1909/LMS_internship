import mongoose from "mongoose";
const { Schema } = mongoose;

const coursesSchema =  new Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
          },
          imageURL: {
            type: String,
            trim: true,
            required: true,
          },
          content:{
            type : String,
            trim : true,
            required:true
          }
    },
    { timestamps: true }
)
const courseModel = mongoose.model("Courses", coursesSchema)
export default courseModel;