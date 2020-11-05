const router = require("express").Router();
let Workout = require("../models/workout.js");
const { route } = require("./html-routes.js");

// const id = location.search.split("=")[1];

router.get("/api/workouts", function(req, res) {
    Workout.find({})
        .then(workouts => {
            res.json(workouts)
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/api/workouts/range", function(req, res) {
    Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.post("/api/workouts", ({ body }, res) => {
    // console.log(location.search.split("=")[1])
    console.log(body)

    Workout.create(body)
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
})

router.put("/api/workouts/:id", (req, res) => {
    // console.log(req.body)
    console.log(req.params.id)
    let body = req.body
    // console.log("body: " + JSON.parse(body))
    let workoutId = req.params.id
    Workout.update({_id: workoutId},{$push: {exercises: body}})
    .then(workout => {
        res.json(workout)
    })
    .catch(err => {
        res.json(err);
    });
})


module.exports = router