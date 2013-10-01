function Player(name){
  this.name = name
  this.dice = new Dice()
  this.score = 0
  this.bucket = 0
}

Player.prototype.roll = function(){
  var result = this.dice.roll()
  
  // update bucket
  if(result === 1){
    this.bucket = 0
  }else{
    this.bucket += result
  }
  return result
}

Player.prototype.hold = function(){
  this.score += this.bucket
  this.bucket = 0
  return this.score
}