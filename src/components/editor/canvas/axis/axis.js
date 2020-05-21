export default function createAxis(viewport,PIXI){
    const x_axis = viewport.addChild(new PIXI.Sprite(PIXI.Texture.WHITE))
    x_axis.position.set(0,viewport.screenHeight-25)
    x_axis.width = viewport.screenWidth
    x_axis.height = 1

    const y_axis = viewport.addChild(new PIXI.Sprite(PIXI.Texture.WHITE))
    y_axis.position.set(25,viewport.screenHeight)
    y_axis.height = -viewport.screenHeight
    y_axis.width = 1

    // changing size of axes depending upon amount of zoom
    viewport.addListener("zoomed",()=>{x_axis.height = viewport.worldScreenHeight/400
        x_axis.width = viewport.worldScreenWidth
        x_axis.position.set(viewport.left,x_axis.y)
        y_axis.height = viewport.worldScreenHeight
        y_axis.width = x_axis.height
        y_axis.position.set(y_axis.x,viewport.bottom)
    })

    viewport.addListener("zoomed-end",()=>{x_axis.height = viewport.worldScreenHeight/400
        x_axis.width = viewport.worldScreenWidth
        x_axis.position.set(viewport.left,x_axis.y)
        y_axis.height = viewport.worldScreenHeight
        y_axis.width = x_axis.height
        y_axis.position.set(y_axis.x,viewport.bottom)
    })

    // changing position of axes depending upon position of vieport
    viewport.addListener("moved",()=>{x_axis.height = viewport.worldScreenHeight/400
        x_axis.width = viewport.worldScreenWidth
        x_axis.position.set(viewport.left,x_axis.y)
        y_axis.height = viewport.worldScreenHeight
        y_axis.width = x_axis.height
        y_axis.position.set(y_axis.x,viewport.bottom)
    })

    viewport.addListener("moved-end",()=>{x_axis.height = viewport.worldScreenHeight/400
        x_axis.width = viewport.worldScreenWidth
        x_axis.position.set(viewport.left,x_axis.y)
        y_axis.height = viewport.worldScreenHeight
        y_axis.width = x_axis.height
        y_axis.position.set(y_axis.x,viewport.bottom)
    })
}