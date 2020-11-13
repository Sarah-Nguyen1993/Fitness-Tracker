const db = require("../models");
module.exports = (app) => {
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({}, (err, data) => {
        if (err) throw err;
        res.json(data);
    });
  });

  app.post("/api/workouts", (req, res) => {
    db.Workout.create({}).then((newWorkout) => {
      res.json(newWorkout);
    });
  });

  app.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(req.params.id, {$push:{exercises:req.body}},{new:true}, 
        (err,data) => {
            if (err) throw err;
            res.json(data)
       })
});

    app.get("/api/workouts/range", (req,res)=> {
        db.Workout.find({}).limit(7).exec((err,data) => {
            if (err) throw err;
            res.json(data)
        })
    });
 
};



