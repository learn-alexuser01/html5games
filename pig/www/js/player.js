function Player(name){
  this.name = name
}

Player.prototype.roll = function(){
  var bucketDiv = document.getElementById(this.name + "_bucket")
  var total = new Number(bucketDiv.innerHTML)
  var dice = new Dice()
  var result = dice.roll()

  // show dice roll
  var diceDiv = document.getElementById(this.name + "_dice")
  diceDiv.insertAdjacentHTML("beforeEnd", dice.display())

  // get buttons
  var rollButton = document.getElementById(this.name + "_rollButton")
  var holdButton = document.getElementById(this.name + "_holdButton")

  // update bucket
  if(result === 1){
    total = 0
    rollButton.setAttribute("disabled")
    holdButton.setAttribute("disabled")
  }else{
    total += result
    holdButton.removeAttribute("disabled")
  }
  
  bucketDiv.innerHTML = total
  return total
}

Player.prototype.hold = function(){

}