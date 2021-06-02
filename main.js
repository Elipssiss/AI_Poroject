const CanvasSize = 1000
const GridSize = 10
const CellSize = 50
const FR = 5

class Canvascreation{
    constructor(CanvasSize, GridSize, CellSize){
        this.CanvasSize = CanvasSize
        this.GridSize = GridSize
        this.CellSize = CellSize
        this. FR = FR
    }
    setup(){
        let canvas = createCanvas(CanvasSize,CanvasSize)
        canvas.parent("sketch-holder")
        frameRate(FR)
        GridPrinter()
        Goal()
        Start()
    }
}

class GridPrinter{
    constructor(CellSize, GridSize){
        this.Cell_x = 0
        this.Cell_y = 0
        this.x = 0
        this.y = 0
        this.CellSize = CellSize
        this.GridSize = GridSize
    }
    printgrid(GridSize, CellSize){
        fill(color(255, 255, 255))
        for (; this.x<GridSize; this.x+=1){
            for (; this.y<GridSize; this.y+=1){
                cell_x = this.x*CellSize
                cell_y = this.y*CellSize
                rect(cell_y,cell_x,this.CellSize,this.CellSize)
            }
        }
    }
}   


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

var Canvas1 = new Canvascreation(CanvasSize, GridSize, CellSize)

Canvas1