
const sq0 = document.getElementById("sq0")
const sq1 = document.getElementById("sq1")
const sq2 = document.getElementById("sq2")
const sq3 = document.getElementById("sq3")
const sq4 = document.getElementById("sq4")
const sq5 = document.getElementById("sq5")
const sq6 = document.getElementById("sq6")
const sq7 = document.getElementById("sq7")
const sq8 = document.getElementById("sq8")
const holes = document.querySelectorAll(".hole")
const start = document.getElementById("startBtn")

const mole0 = document.getElementById("mole")

start.addEventListener("click", startGame)



holes.forEach(hole => {
  hole.addEventListener("click", function handleClick(e){
    let holeI = e.target.id
    console.log(holeI)
  })
})

function startGame(){
  let timer = setInterval(function() {
    molePop()
  }, 1000);
}

function molePop(){
  mole0.scr = "" 
  let i = Math.floor(Math.random() * 1)
  console.log(i)
  if(i == 0){
    mole0.scr = "../images/mole.png" 
    console.log("0 slay")
  }
  if(i == 1){
    sq1.style.backgroundImage = ""
    console.log("1 slay")
  }
  if(i == 2){
    sq2.style.backgroundImage = ""
    console.log("2 slay")
  }
  if(i == 3){
    sq3.style.backgroundImage = ""
  }
  if(i == 4){
    sq4.style.backgroundImage = ""
  }
  if(i == 5){
    sq5.style.backgroundImage = ""
  }
}