const pauseTime = 333 //how long to pause in between clues
const waitTime = 1000 //how long to wait before starting playback of the clue sequence

var holdTime = 1000
var pattern = []
var progress = 0
var gamePlaying = false
var tonePlaying = false
var volume = .5
var guessCounter = 0
var wrongGuesses = 0 //count of total wrong guesses
var wasWrong = 0 //check to see if last guess was incorrect

function populate(){ //create random pattern
  for(let i=0;i<=7;i++){
    pattern.push(Math.floor(Math.random()*5+1))
  }
}

function startGame(){
  progress = 0;
  gamePlaying = true;
  document.getElementById("start_button").classList.add("hidden")
  document.getElementById("stop_button").classList.remove("hidden")
  populate()
  console.log(progress)
  console.log(pattern)
  playClueSequence()
}

function stopGame(){
  gamePlaying = false;
  document.getElementById("stop_button").classList.add("hidden")
  document.getElementById("start_button").classList.remove("hidden")
  holdTime = 1000
  pattern = []
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,  //C
  2: 293.6,  //D
  3: 329.6,  //E
  4: 349.2,  //F
  5: 392,    //G
  6: 440     //A
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}

function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn)
    playTone(btn,holdTime)
    setTimeout(clearButton,holdTime,btn)
  }
}

function playClueSequence(){
  guessCounter = 0
  context.resume()
  let delay = waitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += holdTime 
    delay += pauseTime
  }
  if(wasWrong == wrongGuesses){ //playback should not shortten if last guess was incorrect
    holdTime -= 100 //decreases for how long a button flashes for after each turn
    
  }else{
    wasWrong = wrongGuesses
  }
  console.log(holdTime)
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.")
}

function winGame(){
  stopGame();
  alert("Game Over. You won!")
}

function guess(btn){
  console.log("user guessed: " + btn)
  if(!gamePlaying){
    return;
  }
  //is guess correct
  if(pattern[guessCounter] != btn){
    //if not
    wrongGuesses += 1
    if(wrongGuesses == 3){ //lose game on third wrong
        loseGame()
    }
    playClueSequence() //replay the last sequence
  }
  else{
    //if guess is true
    //is turn over
    if(guessCounter == progress){
      //if turn is over
      //is this the last turn
      if(progress == pattern.length - 1){
        //if it is last turn
        winGame()
      }
      else{
        //if it isn't last turn
        progress++;
        playClueSequence()
      }
    }
    else{
      //if turn is not over
      guessCounter++
    }
  }
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)