function Dice(sides){
  this.sides = sides || 6
  this.value = 1
}

Dice.prototype.roll = function(){
  var min = 1
  var max = this.sides
  this.value = Math.floor(Math.random() * (max - min + 1) + min);
  return this.value
}

Dice.prototype.display = function(){
  var out = this.value
  switch(this.value){
    case 1:
      out = "&#9856;"
      break
    case 2:
      out = "&#9857;"
      break
    case 3:
      out = "&#9858;"
      break
    case 4:
      out = "&#9859;"
      break
    case 5:
      out = "&#9860;"
      break
    case 6:
      out = "&#9861;"
      break
    default:
      out = this.value
      break
  }
  return out
}

