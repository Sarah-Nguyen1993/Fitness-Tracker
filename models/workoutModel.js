const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const WorkoutSchema = new Schema({
    exercises: [
        {
            type:{
                type: String,
                required: "Exercise type is required"
            },
            name: {
                type: String,
                required: "Exercise name is required",
                trim: true,
            },
            duration: {
                type: Number,
                required: "Duration is required"
            },
            distance: {
                type: Number
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
        }
    ],
    
    day: {
        type: Date,
        default: () => new Date()
    },
},
{
    toJSON:{ virtuals:true}
}
);
WorkoutSchema.virtual("totalWorkoutDuration").get(function(){
    return this.exercises.reduce((total,exercise) => {
        return total + exercise.duration;
    }, 0);
})
const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;