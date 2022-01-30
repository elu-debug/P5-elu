// From Daniel Shiffman's Coding Challenge #145: 2D Raycasting
// https://youtu.be/TOEi6T2mtHo

let walls = []
let particle

function setup() {
  createCanvas(windowWidth, windowHeight)
  
  walls.push(new Boundary(0    , 0     , width, 0))
  walls.push(new Boundary(width, 0     , width, height))
  walls.push(new Boundary(width, height, 0    , height))
  walls.push(new Boundary(0    , height, 0    , 0))
  
  for (let i = 0; i < 5; i++) {
    let x1 = random(width)
    let y1 = random(height)
    let x2 = random(width)
    let y2 = random(height)
    wall = new Boundary(x1, y1, x2, y2)
    walls.push(wall)
  }
  
  particle = new Particle(100, 200)
}

function draw() {
  background(0)
  
  particle.update(mouseX, mouseY)
  particle.show()
  particle.look(walls)
  
  for (let wall of walls) {
    wall.show()
  }
}