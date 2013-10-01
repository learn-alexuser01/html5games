function Pig(name){
  this.p1 = new Player("p1"),
  this.p2 = new Player("p2"),
  this.currentPlayer = this.p1
}

Pig.prototype.swapPlayers = function(){
  // add a new line for dice
  // so each turn has it's own line
  var diceDiv = document.getElementById(this.currentPlayer.name + "_dice")
  diceDiv.insertAdjacentHTML("beforeEnd", "<br>")

  // disable all buttons
  var buttons = ["p1_rollButton", 
                 "p1_holdButton", 
                 "p2_rollButton", 
                 "p2_holdButton"]

  for(var i=0; i<buttons.length; i++){
    var button = document.getElementById(buttons[i])
    button.setAttribute("disabled")
  }                 

  // remove background color
  var divs = ["p1", "p2"]
  for(var i=0; i<divs.length; i++){
    var div = document.getElementById(divs[i])
    div.className = div.className.replace("currentPlayer", "")
  }

  // set currentPlayer
  if(this.currentPlayer === this.p1){
    this.currentPlayer = this.p2
  }else{
    this.currentPlayer = this.p1
  }

  // add background color
  var currentPlayer = document.getElementById(this.currentPlayer.name) 
  currentPlayer.className = currentPlayer.className + " currentPlayer"

  // enable roll button
  var rollButton = document.getElementById(this.currentPlayer.name + "_rollButton") 
  rollButton.removeAttribute("disabled") 



  return this.currentPlayer
}

Pig.prototype.roll = function(){
  // update bucket
  var result = this.currentPlayer.roll()
  var bucketDiv = document.getElementById(this.currentPlayer.name + "_bucket")
  bucketDiv.innerHTML = this.currentPlayer.bucket

  // show dice roll
  var diceDiv = document.getElementById(this.currentPlayer.name + "_dice")
  diceDiv.insertAdjacentHTML("beforeEnd", this.currentPlayer.dice.display())

  // swap players (if necessary)
  if(result === 1){    
    this.swapPlayers()
  }else{
    var holdButton = document.getElementById(this.currentPlayer.name + "_holdButton") 
    holdButton.removeAttribute("disabled")
  }
  
  return result
}