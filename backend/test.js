const project = require("./modals/projects")
const scene = require("./modals/scenes")
const object = require("./modals/objects")
// import User from "./modals/user"

const object1 = new object({
    name:"ball",
    rank:1,
    position:{x:1,y:2},
    dimensions:{x:12,y:12},
    sprite:"test"
})

const scene1 = new scene({
    name:"blyat",
    position:1,
    objects:[object1,2]
})

const test = new project({
    name: "pacman",
    scenes: [scene1,2,3],
    files: [1,2,3]
})

test.save((err,test)=>{
    console.log("saved")
    if (err) return console.error(err);
})


exports = test