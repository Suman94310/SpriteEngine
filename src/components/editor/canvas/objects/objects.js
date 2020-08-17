// create objects can be simplified
function createObjects(viewport,PIXI,objects,objectList){
    console.log("blyat",objects)
    let createdObject = []
    for(let i=0; i<objects.length; i++){
        console.log(objects[i])
        createdObject.push(viewport.addChild(new PIXI.Sprite(PIXI.Texture.WHITE)))
        createdObject[i].position.set(objects[i].position.x,objects[i].position.y)
        createdObject[i].scale.set(objects[i].dimensions.x,objects[i].dimensions.y)
        objectList.push([createdObject[i], objects[i].id])
    }
}

function updateObjects(viewport,PIXI,objects,objectList){
    console.log("updating",objectList)
    for(let i=0; i<objectList.length; i++){
        for(let j=0; j<objects.length; j++){
            if (objectList[i][1]== objects[j].id){
                console.log("blyat")
                objectList[i][0].position.set(objects[i].position.x,objects[i].position.y)
                objectList[i][0].scale.set(objects[i].dimensions.x,objects[i].dimensions.y)
            }
        }
    }
}

function deleteObjects(viewport,PIXI,objects,objectList){
    console.log("updating")
    for(let i=0; i<objectList.length; i++){
        let flag=true
        for(let j=0; j<objects.length; j++){
            if (objectList[i].id == objects[j]){
                flag = false
            }
        }
        if(flag){
            viewport.removeChild(objectList[i][0]);
            objectList.splice(i,1)
        }
    }
}



module.exports = {createObjects:createObjects,  updateObjects:updateObjects}