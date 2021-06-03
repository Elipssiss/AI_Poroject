const CanvasSize = 1000
const GridSize = 20
const CellSize = 50
const FR = 1
var goal = {x:0, y:0}

var agent = {x:0, y:0}

function Goal(){
    goal.x = Math.round(Math.floor(Math.random()*GridSize*CellSize)/CellSize)*CellSize
    goal.y = Math.round(Math.floor(Math.random()*GridSize*CellSize)/CellSize)*CellSize
    fill(color(50, 168, 82))
    rect(goal.x,goal.y,CellSize,CellSize)

}
       
function Start(){
    agent.x = Math.round(Math.floor(Math.random()*GridSize*CellSize)/CellSize)*CellSize
    agent.y = Math.round(Math.floor(Math.random()*GridSize*CellSize)/CellSize)*CellSize
    fill(color(102, 204, 255))
    rect(agent.x,agent.y,CellSize,CellSize)

}

function setup(){
    let canvas = createCanvas(CanvasSize,CanvasSize)
    canvas.parent("sketch-holder")
    frameRate(FR)
    printgrid(GridSize, GridSize, CellSize)
    Goal()
    Start()
}

function printgrid(height, length, CellSize){
    fill(color(255, 255, 255))
    for (var x=0; x<height; x+=1){
        for (var y=0; y<length; y+=1){
            var cell_x = x*CellSize
            var cell_y = y*CellSize
            rect(cell_y,cell_x,CellSize,CellSize)
        }
    }
}   

function draw(){
    do{
        agent.x += (Math.floor(Math.random()*3)-1)*CellSize
        agent.y += (Math.floor(Math.random()*3)-1)*CellSize
        fill(color(102, 204, 255))
        rect(agent.x,agent.y,CellSize,CellSize)
    }
        while (agent.x != goal.x && agent.y != goal.y);

}