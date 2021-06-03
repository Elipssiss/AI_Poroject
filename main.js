const CanvasSize = 1000
const GridSize = 10
const CellSize = 50
const FR = 5

class Agent{
    constructor(){
        this.x = 1
        this.y = 1
    }
    x = Math.floor(Math.random()*CellSize)
    y = Math.floor(Math.random()*CellSize)
    draw(){
        fill(color(102, 204, 255))
        rect(x,y,CellSize,CellSize)
    }
}

class Goal{
    constructor(){
        this.x = 1
        this.y = 1
    }
    x = Math.floor(Math.random()*CellSize)
    y = Math.floor(Math.random()*CellSize)
    draw(){
        fill(color(50, 168, 82))
        rect(x,y,CellSize,CellSize)
    }
}




function setup(){
    let canvas = createCanvas(CanvasSize,CanvasSize)
    canvas.parent("sketch-holder")
    frameRate(FR)
    printgrid(GridSize, GridSize, CellSize)
    
    
}

function printgrid(GridSize, CellSize){
    fill(color(255, 255, 255))
    for (var x=0; x<GridSize; x+=1){
        for (var y=0; y<GridSize; y+=1){
            var cell_x = x*CellSize
            var cell_y = y*CellSize
            rect(cell_y,cell_x, CellSize, CellSize)
        }
    }
}

