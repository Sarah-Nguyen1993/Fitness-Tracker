const db = require("../models");
module.exports = (app) => {
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({}, (err, data) => {
      if (err) throw err;
      else {
        res.json(data);
      }
    });
  });

  app.post("/api/workouts", (req, res) => {
    db.Workout.create({}).then((newWorkout) => {
      res.json(newWorkout);
    });
  });

 
};



