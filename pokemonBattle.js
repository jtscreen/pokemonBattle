let usersPokemon;
let userAttack;

let enemyPokemon;
let enemyAttack;

let background1;
let turn = true;
let announceText;

let pHealth = [100, 100]
let userMoves = ['Vine Whip', 'Tackle', 'Razor Leaf', 'Bite']
let enemyMoves = ['Scratch', 'Flamethrower', 'Fire Punch', 'Dragon Rage']

function preload(){
    audio = loadSound('music.mp3');
}

function setup () {
  window.addEventListener('keypress', function (event) {
    if (event.keyCode == 13) {
      setTimeout(function () {
        turnStart(userAttack)
      }, 100)
    }
  })

  createCanvas(500, 500)
  background(255)
  background1 = loadImage('image/bg.jpg')

  renderMoveList()

  usersPokemon = loadImage('image/bulbasaur.png')
  enemyPokemon = loadImage('image/charmander.png')

  audio.play();

}

function randomNumber (MaxInt) {
  return Math.floor(Math.random() * MaxInt + 1)
}

function draw () {

  image(background1, 0, 0)
  image(enemyPokemon, 320, 110)
  image(usersPokemon, 50, 250)
  // user health
  fill(255, 0, 0)
  rect(100, 250, 100, 5)
  fill(0, 255, 0)
  rect(100, 250, pHealth[0], 5)
  // enemy health
  fill(255, 0, 0)
  rect(270, 100, 100, 5)
  fill(0, 255, 0)
  rect(270, 100, pHealth[1], 5)
  renderMoveList()
  renderMoves()
  if (announceText != undefined) {
    text(announceText, 16, 379)
  }

  if(pHealth[1] <= 0){

  }
}

// @Do not edit
function mouseClicked () {
  if (mouseX > 0 && mouseX < 250 && mouseY > 350 && mouseY < 450) {
    console.log('1')
    if (turn) {
      userAttack = userMoves[0]
    }
    turn = false
  }
  else if (mouseX > 0 && mouseX < 250 && mouseY > 450 && mouseY < 500) {
    console.log('2')
    if (turn) {
      userAttack = userMoves[1]
    }
    turn = false
  }
  else if (mouseX > 250 && mouseX < 500 && mouseY > 350 && mouseY < 450) {
    console.log('3')
    if (turn) {
      userAttack = userMoves[2]
    }
    turn = false
  }
  else if (mouseX > 250 && mouseX < 500 && mouseY > 450 && mouseY < 500) {
    console.log('4')
    if (turn) {
      damage = Math.ceil(Math.random() * 30)
      userAttack = userMoves[3]
    }
    turn = false
  }
  announcement('Press Enter to Attack!')
}

function renderMoveList () {
  fill(0, 0, 255)
  rect(0, 350, 500, 50)
  fill(255, 0, 0)
  rect(0, 400, 250, 50)
  rect(250, 400, 250, 50)
  rect(0, 450, 250, 50)
  rect(250, 450, 250, 50)
}

function renderMoves () {
  fill(255)
  textFont('Arial')
  textSize(20)
  text(userMoves[0], 75, 435)
  text(userMoves[1], 75, 485)
  text(userMoves[2], 300, 435)
  text(userMoves[3], 300, 485)
}
function turnStart (userAttack) {
  if (userAttack == userMoves[0]) {
    console.log('Bulbasaur used ' + userAttack + '!')
    announcement('Bulbasaur used ' + userAttack + '!')
    damage = Math.ceil(Math.random() * 20)
    if (pHealth[1] - damage > 0) {
      pHealth[1] -= damage
    }else {
      pHealth[1] = 0
      win()
    }
  }else if (userAttack == userMoves[1]) {
    console.log('Bulbasaur used ' + userAttack + '!')
    announcement('Bulbasaur used ' + userAttack + '!')
    damage = Math.ceil(Math.random() * 15)
    if (pHealth[1] - damage > 0) {
      pHealth[1] -= damage
    }else {
      pHealth[1] = 0
      win()
    }
  }else if (userAttack == userMoves[2]) {
    console.log('Bulbasaur used ' + userAttack + '!')
    announcement('Bulbasaur used ' + userAttack + '!')
    damage = Math.ceil(Math.random() * 15)
    if (pHealth[1] - damage > 0) {
      pHealth[1] -= damage
    }else {
      pHealth[1] = 0
      win()
    }
  }else {
    console.log('Bulbasaur used ' + userAttack + '!')
    announcement('Bulbasaur used ' + userAttack + '!')
    damage = Math.ceil(Math.random() * 30)
    if (pHealth[1] - damage > 0) {
      pHealth[1] -= damage
    }else {
      pHealth[1] = 0
      win()
    }
  }
  turn = true
  setTimeout(function () {
    enemyTurn()
  }, 2000)
}
function announcement (announce) {
  fill(255)
  textFont('Arial')
  announceText = announce
  text(announceText, 16, 359)
}
function turnCond () {
  mouseClicked()
  turn = false
}

function enemyTurn () {
  enemyAttack = enemyMoves[Math.floor(Math.random() * enemyMoves.length)];

  if (enemyAttack == enemyMoves[0]) {
    console.log('Charmander used ' + enemyAttack + '!')
    announcement('Charmander used ' + enemyAttack + '!')
    question()
    damage = Math.ceil(Math.random() * 20)
    if (pHealth[0] - damage > 0) {
      pHealth[0] -= damage
    }else {
      pHealth[0] = 0
      lose()
    }
  }else if (enemyAttack == enemyMoves[1]) {
    console.log('Charmander used ' + enemyAttack + '!')
    announcement('Charmander used ' + enemyAttack + '!')
    question()
    damage = Math.ceil(Math.random() * 15)
    if (pHealth[0] - damage > 0) {
      pHealth[0] -= damage
    }else {
      pHealth[0] = 0
      lose()
    }
  }else if (enemyAttack == enemyMoves[2]) {
    console.log('Charmander used ' + enemyAttack + '!')
    announcement('Charmander used ' + enemyAttack + '!')
    question()
    damage = Math.ceil(Math.random() * 15)
    if (pHealth[0] - damage > 0) {
      pHealth[0] -= damage
    }else {
      pHealth[0] = 0
      lose()
    }
  }else {
    console.log('Charmander used ' + enemyAttack + '!')
    announcement('Charmander used ' + enemyAttack + '!')
    question()
    damage = Math.ceil(Math.random() * 30)
    if (pHealth[0] - damage > 0) {
      pHealth[0] -= damage
    }else {
      pHealth[0] = 0
      lose()
    }
    question()
  }
}

function win(){
    announcement("Charmander has fainted!");
    userMoves = 0
    enemyMoves = 0
}

function lose(){
    announcement("You fainted!");
    userMoves = 0
    enemyMoves = 0
}

function question(){
    setTimeout(function () {
        announcement('What wil Bulbasaur do?')
      }, 2000)
}