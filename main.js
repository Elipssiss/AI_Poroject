const CanvasSize = 1000
const GridSize = 20
const CellSize = 25
const FR = 5
const Num_Walls = GridSize * 4

class Grid
{
  constructor(Gridsize, CellSize)
  {
      this.Gridsize = Gridsize
      this.CellSize = CellSize
  }

  draw()
  {
      fill(color(255, 255, 255))
      for (var x = 0; x<GridSize; x+=1){
          for (var y = 0; y<GridSize; y+=1){
              rect(x*CellSize, y*CellSize, CellSize, CellSize)
          }
      }
  }
}



class All_Walls
{
  constructor()
  {
      this.Walls_x = []
      this.Walls_y = []  
      for (var i = 0; i<Num_Walls; i++){
          var wall_x = Math.floor(Math.random()*(GridSize-1))*CellSize
          var wall_y = Math.floor(Math.random()*(GridSize-1))*CellSize
          this.Walls_x.push(wall_x)
          this.Walls_y.push(wall_y)
      }    
  }
  draw(){
      for (var i = 0; i<Num_Walls; i++)
      {
          fill(color(0,0,0))
          rect(this.Walls_x[i], this.Walls_y[i],CellSize,CellSize)
      }
  }
}


class Agent
{
  constructor()
  {
      this.x = Math.floor(Math.random()*(GridSize-1))*CellSize
      this.y = Math.floor(Math.random()*(GridSize-1))*CellSize
  }
  draw()
  {
      fill(color(102, 204, 255))
      rect(this.x, this.y,CellSize,CellSize)             
  }
    
}

class Goal
{
  constructor()
  {
      this.x = Math.floor(Math.random()*(GridSize-1))*CellSize 
      this.y = Math.floor(Math.random()*(GridSize-1))*CellSize
  }
  draw(){
      fill(color(50, 168, 82))
      rect(this.x, this.y,CellSize,CellSize)
      
  }

}


var Grid1 = new Grid()

var Goal1 = new Goal()

var Agent1 = new Agent()

var Walls1 = new All_Walls

function setup()
{
  let canvas = createCanvas(CanvasSize,CanvasSize)
  canvas.parent("sketch-holder")
  frameRate(FR)  
  Grid1.draw(GridSize,CellSize)  
}

function draw()
{

  Walls1.draw()
  
  Goal1.draw()

  if(!(Agent1.x == Goal1.x && Agent1.y == Goal1.y)){
    var Temp_x = randomdirection(Agent1.x)
    if(Temp_x<(CellSize*GridSize)){
      Agent1.x = Temp_x
    }
    var Temp_y = randomdirection(Agent1.y)
    if(Temp_y<(CellSize*GridSize)){
      Agent1.y = Temp_y
    }
    Agent1.draw()
    
    
  }
}

function randomdirection(coordinate){
  return coordinate + (Math.floor(Math.random()*3)-1)*CellSize
}

  

