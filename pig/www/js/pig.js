function Pig(name){
  this.p1 = new Player("p1"),
  this.p2 = new Player("p2"),
  this.currentPlayer = this.p1,
  this.winningScore = 100
}

Pig.prototype.swapPlayers = function(){
  // add a new line for dice
  // so each turn has it's own line
  var diceDiv = document.getElementById(this.currentPlayer.name + "_dice")
  diceDiv.insertAdjacentHTML("beforeEnd", "<br>")

  // disable all buttons
  this.disableAllButtons()

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
  var result = this.currentPlayer.roll()

  // show dice roll
  var diceDiv = document.getElementById(this.currentPlayer.name + "_dice")
  diceDiv.insertAdjacentHTML("beforeEnd", this.currentPlayer.dice.display())
  
  // update bucket
  var bucketDiv = document.getElementById(this.currentPlayer.name + "_bucket")
  bucketDiv.innerHTML = this.currentPlayer.bucket

  // swap players (if necessary)
  if(result === 1){    
    this.swapPlayers()
  }else{
    var holdButton = document.getElementById(this.currentPlayer.name + "_holdButton") 
    holdButton.removeAttribute("disabled")
  }
  
  return result
}


Pig.prototype.hold = function(){
  this.currentPlayer.hold()

  // update webpage
  var bucketDiv = document.getElementById(this.currentPlayer.name + "_bucket")
  bucketDiv.innerHTML = this.currentPlayer.bucket
  var scoreDiv = document.getElementById(this.currentPlayer.name + "_score")
  scoreDiv.innerHTML = this.currentPlayer.score

  if(!this.checkForWinner()){
    this.swapPlayers()  
  }
}

Pig.prototype.checkForWinner = function(){
  var result = false
  if(this.currentPlayer.score >= this.winningScore){
    // add border
    var currentPlayer = document.getElementById(this.currentPlayer.name) 
    currentPlayer.className = currentPlayer.className + " winner"

    // add "WINNER"
    var h2 = document.querySelector(".currentPlayer h2")
    h2.insertAdjacentHTML("beforeEnd", " -- WINNER!!!")

    // disable all buttons
    this.disableAllButtons()

    result = true  
  }

  return result
}

Pig.prototype.disableAllButtons = function(){
  var buttons = ["p1_rollButton", 
                 "p1_holdButton", 
                 "p2_rollButton", 
                 "p2_holdButton"]

  for(var i=0; i<buttons.length; i++){
    var button = document.getElementById(buttons[i])
    button.setAttribute("disabled")
  }                 
}
