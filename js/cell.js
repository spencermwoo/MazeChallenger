// Daniel Shiffman
// http://codingrainbow.com
// http://patreon.com/codingrainbow

function Cell(i, j) {
  this.i = i;
  this.j = j;
  this.walls = [true, true, true, true];
  this.visited = false;
  this.path = false;
  this.animate = false;
  this.points = false;
  this.s = false;
  this.e = false;

  this.checkNeighbors = function() {
    var neighbors = [];

    var top    = grid[index(i, j -1)];
    var right  = grid[index(i+1, j)];
    var bottom = grid[index(i, j+1)];
    var left   = grid[index(i-1, j)];

    if (top && top.path) {
      neighbors.push(top);
    }
    else if (right && right.path) {
      neighbors.push(right);
    }
    else if (bottom && bottom.path) {
      neighbors.push(bottom);
    }
    else if (left && left.path) {
      neighbors.push(left);
    }

    // if (neighbors.length > 0) {
    //   var r = floor(random(0, neighbors.length));
    //   return neighbors[r];
    // } else {
    //   return undefined;
    // }

  }
  this.highlight = function() {
    var x = this.i*w;
    var y = this.j*w;
    noStroke();
    fill(0, 0, 255, 100);
    rect(x, y, w, w);
  }

  this.show = function() {
    var x = this.i*w;
    var y = this.j*w;
    stroke(0);
    if (this.walls[0]) {
      line(x    , y    , x + w, y);
    }
    if (this.walls[1]) {
      line(x + w, y    , x + w, y + w);
    }
    if (this.walls[2]) {
      line(x + w, y + w, x    , y + w);
    }
    if (this.walls[3]) {
      line(x    , y + w, x    , y);
    }

    if (this.s) {
      noStroke();
      fill(50, 255, 30);
      rect(x, y, w, w);
    }
    else if (this.e){

      noStroke();
      fill(255, 0, 0);
      rect(x, y, w, w);
    }else if (this.points){

      noStroke(); 
      fill(255, 210, 0);
      rect(x, y, w, w);
    }else if (this.animate){
      noStroke(); 
      fill(255, 255, 255);
      rect(x, y, w, w);
    }

    if (this.visited) {
      noStroke();
      fill(255, 0, 255, 100);
      rect(x, y, w, w);
    }
  }
}