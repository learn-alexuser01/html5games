function Pig(name){
  this.p1 = new Player("p1"),
  this.p2 = new Player("p2"),
  this.currentPlayer = this.p1
}

Pig.prototype.swapPlayers = function(){
  // disable all buttons
  var buttons = ["p1_rollButton", 
                 "p1_holdButton", 
                 "p2_rollButton", 
                 "p2_holdButton"]

  for(var i=0; i<buttons.length; i++){
    var button = document.getElementById(buttons[i])
    button.setAttribute("disabled")
  }                 

  // set currentPlayer
  if(this.currentPlayer === this.p1){
    this.currentPlayer = this.p2
  }else{
    this.currentPlayer = this.p1
  }

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