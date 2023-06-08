const leftBtn = document.getElementsByClassName("btn")[0];
const rightBtn = document.getElementsByClassName("btn")[1];
//dice Image
const left_dice = document.getElementById("left_dice");
const right_dice = document.getElementById("right_dice");
//initial position
let redpos = 1;
let bluepos = 1;
//mover's movement
const redMover = document.getElementById("redMover");
const blueMover = document.getElementById("blueMover");
// current position displayer.
const left_pos = document.getElementById("left_position");
const right_pos = document.getElementById("right_position");
//restart button
const restartE1 = document.getElementById("restart");
const winnerImg = document.getElementById("winnerimg");
let angle = 360;
//coordinates
const coordinates = [
  // 1  --------first row-----------
  {
    left: 1,
    bottom: 1,
  },
  // 2
  {
    left: 5,
    bottom: 1,
  },
  // 3
  {
    left: 9,
    bottom: 1,
  },
  // 4
  {
    left: 13,
    bottom: 1,
  },
  // 5
  {
    left: 17,
    bottom: 1,
  },
  // 6
  {
    left: 21,
    bottom: 1,
  },
  // 7
  {
    left: 25,
    bottom: 1,
  },
  // 8
  {
    left: 29,
    bottom: 1,
  },
  // 9
  {
    left: 33,
    bottom: 1,
  },
  // 10
  {
    left: 37,
    bottom: 1,
  },

  // 11  ----------second row--------------
  {
    left: 37,
    bottom: 5,
  },
  // 12
  {
    left: 33,
    bottom: 5,
  },
  // 13
  {
    left: 29,
    bottom: 5,
  },
  // 14
  {
    left: 25,
    bottom: 5,
  },
  // 15
  {
    left: 21,
    bottom: 5,
  },
  // 16
  {
    left: 17,
    bottom: 5,
  },
  // 17
  {
    left: 13,
    bottom: 5,
  },
  // 18
  {
    left: 9,
    bottom: 5,
  },
  // 19
  {
    left: 5,
    bottom: 5,
  },
  // 20
  {
    left: 1,
    bottom: 5,
  },
  // 21  --------third row---------------
  {
    left: 1,
    bottom: 9,
  },
  // 22
  {
    left: 5,
    bottom: 9,
  },
  // 23
  {
    left: 9,
    bottom: 9,
  },
  // 24
  {
    left: 13,
    bottom: 9,
  },
  // 25
  {
    left: 17,
    bottom: 9,
  },
  // 26
  {
    left: 21,
    bottom: 9,
  },
  // 27
  {
    left: 25,
    bottom: 9,
  },
  // 28
  {
    left: 29,
    bottom: 9,
  },
  // 29
  {
    left: 33,
    bottom: 9,
  },
  // 30
  {
    left: 37,
    bottom: 9,
  },
  // 31 ----------fourth row-------------
  {
    left: 37,
    bottom: 13,
  },
  // 32
  {
    left: 33,
    bottom: 13,
  },
  // 33
  {
    left: 29,
    bottom: 13,
  },
  // 34
  {
    left: 25,
    bottom: 13,
  },
  // 35
  {
    left: 21,
    bottom: 13,
  },
  // 36
  {
    left: 17,
    bottom: 13,
  },
  // 37
  {
    left: 13,
    bottom: 13,
  },
  // 38
  {
    left: 9,
    bottom: 13,
  },
  // 39
  {
    left: 5,
    bottom: 13,
  },
  // 40
  {
    left: 1,
    bottom: 13,
  },
  // 41 ------------fifth row---------
  {
    left: 1,
    bottom: 17,
  },
  // 42
  {
    left: 5,
    bottom: 17,
  },
  // 43
  {
    left: 9,
    bottom: 17,
  },
  // 44
  {
    left: 13,
    bottom: 17,
  },
  // 45
  {
    left: 17,
    bottom: 17,
  },
  // 46
  {
    left: 21,
    bottom: 17,
  },
  // 47
  {
    left: 25,
    bottom: 17,
  },
  // 48
  {
    left: 29,
    bottom: 17,
  },
  // 49
  {
    left: 33,
    bottom: 17,
  },
  // 50
  {
    left: 37,
    bottom: 17,
  },
  // 51  ----------------sixth row----------
  {
    left: 37,
    bottom: 21,
  },
  // 52
  {
    left: 33,
    bottom: 21,
  },
  // 53
  {
    left: 29,
    bottom: 21,
  },
  // 54
  {
    left: 25,
    bottom: 21,
  },
  // 55
  {
    left: 21,
    bottom: 21,
  },
  // 56
  {
    left: 17,
    bottom: 21,
  },
  // 57
  {
    left: 13,
    bottom: 21,
  },
  // 58
  {
    left: 9,
    bottom: 21,
  },
  // 59
  {
    left: 5,
    bottom: 21,
  },
  // 60
  {
    left: 1,
    bottom: 21,
  },
  // 61     --------seventh row ------
  {
    left: 1,
    bottom: 25,
  },
  // 62
  {
    left: 5,
    bottom: 25,
  },
  // 63
  {
    left: 9,
    bottom: 25,
  },
  // 64
  {
    left: 13,
    bottom: 25,
  },
  // 65
  {
    left: 17,
    bottom: 25,
  },
  // 66
  {
    left: 21,
    bottom: 25,
  },
  // 67
  {
    left: 25,
    bottom: 25,
  },
  // 68
  {
    left: 29,
    bottom: 25,
  },
  // 69
  {
    left: 33,
    bottom: 25,
  },
  // 70
  {
    left: 37,
    bottom: 25,
  },
  // 71   ------eighth row-----
  {
    left: 37,
    bottom: 29,
  },
  // 72
  {
    left: 33,
    bottom: 29,
  },
  // 73
  {
    left: 29,
    bottom: 29,
  },
  // 74
  {
    left: 25,
    bottom: 29,
  },
  // 75
  {
    left: 21,
    bottom: 29,
  },
  // 76
  {
    left: 17,
    bottom: 29,
  },
  // 77
  {
    left: 13,
    bottom: 29,
  },
  // 78
  {
    left: 9,
    bottom: 29,
  },
  // 79
  {
    left: 5,
    bottom: 29,
  },
  // 80
  {
    left: 1,
    bottom: 29,
  },
  // 81   -------ninth row-----
  {
    left: 1,
    bottom: 33,
  },
  // 82
  {
    left: 5,
    bottom: 33,
  },
  // 83
  {
    left: 9,
    bottom: 33,
  },
  // 84
  {
    left: 13,
    bottom: 33,
  },
  // 85
  {
    left: 17,
    bottom: 33,
  },
  // 86
  {
    left: 21,
    bottom: 33,
  },
  // 87
  {
    left: 25,
    bottom: 33,
  },
  // 88
  {
    left: 29,
    bottom: 33,
  },
  // 89
  {
    left: 33,
    bottom: 33,
  },
  // 90
  {
    left: 37,
    bottom: 33,
  },
  // 91- -----tenth row-----
  {
    left: 37,
    bottom: 37,
  },
  // 92
  {
    left: 33,
    bottom: 37,
  },
  // 93
  {
    left: 29,
    bottom: 37,
  },
  // 94
  {
    left: 25,
    bottom: 37,
  },
  // 95
  {
    left: 21,
    bottom: 37,
  },
  // 96
  {
    left: 17,
    bottom: 37,
  },
  // 97
  {
    left: 13,
    bottom: 37,
  },
  // 98
  {
    left: 9,
    bottom: 37,
  },
  // 99
  {
    left: 5,
    bottom: 37,
  },
  // 100
  {
    left: 1,
    bottom: 37,
  },
];

//button click Events
//left
leftBtn.addEventListener("click", () => {
  leftBtn.style.display = "none";
  rightBtn.style.display = "block";
  let dice_no = generate_dice();
  left_dice.style.transform = `rotate(${angle}deg)`;
  angle += 360;
  left_dice.src = `./${dice_no}.png`;

  if (bluepos + dice_no <= 100) {
    //checking if it exceeds 100 position.
    if (bluepos <= 100) {
      bluepos = bluepos + dice_no;
      left_pos.innerText = bluepos;
      moveBlue(bluepos, dice_no);
      checkScenarioblue(bluepos);
      left_pos.innerText = bluepos;
    }
  }
});
//right
rightBtn.addEventListener("click", () => {
  leftBtn.style.display = "block";
  rightBtn.style.display = "none";
  let dice_no = generate_dice();
  right_dice.style.transform = `rotate(${angle}deg)`;
  angle += 360;
  right_dice.src = `./${dice_no}.png`;

  if (redpos + dice_no <= 100) {
    //checking if it exceeds 100 position.
    if (redpos <= 100) {
      redpos = redpos + dice_no;
      right_pos.innerText = redpos;
      moveRed(redpos, dice_no);
      checkScenariored(redpos);
      right_pos.innerText = redpos;
    }
  }
});

//generate dice number.

const generate_dice = () => {
  let dice = Math.trunc(Math.random() * 6 + 1);
  return dice;
};

const images = {
  1: "one.png",
  2: "two.png",
  3: "three.png",
  4: "four.png",
  5: "five.png",
  6: "six.png",
};

const snake = {
  41: 17,
  27: 4,
  86: 36,
  79: 57,
  98: 12,
  69: 31,
  91: 68,
};

const ladder = {
  7: 33,
  24: 59,
  46: 74,
  70: 88,
  64: 95,
};

//blue movement
const moveBlue = (current_pos, diceno) => {
  if (current_pos <= 100) {
    let coords = coordinates[current_pos - 1];
    if (current_pos == 100) {
      blueMover.style.left = coords.left + "rem";
      blueMover.style.bottom = coords.bottom + "rem";
      //call winning function
      winner("blue");
    }
    blueMover.style.left = coords.left + "rem";
    blueMover.style.bottom = coords.bottom + "rem";
  }
};

//red movement
const moveRed = (current_pos, diceno) => {
  if (current_pos <= 100) {
    let coords = coordinates[current_pos - 1];
    if (current_pos == 100) {
      redMover.style.left = coords.left + 0.5 + "rem";
      redMover.style.bottom = coords.bottom + 0.5 + "rem";
      //calling winner function
      winner("red");
    }
    redMover.style.left = coords.left + 0.5 + "rem";
    redMover.style.bottom = coords.bottom + 0.5 + "rem";
  }
};

//-----------checking schenario for snake bite and ladder---------
//for blue player
const checkScenarioblue = (position) => {
  console.log("checking for position", position);
  if (Object.keys(snake).includes(position.toString())) {
    let recoordinate = snake[position]; //snake bites reallocate cooors.
    bluepos = recoordinate;
    //removements
    let coords = coordinates[bluepos - 1];
    blueMover.style.left = coords.left + "rem";
    blueMover.style.bottom = coords.bottom + "rem";
  } else if (Object.keys(ladder).includes(position.toString())) {
    let recoordinate = ladder[position]; //ladder incountered reallocate cooors.
    bluepos = recoordinate;
    //removements
    let coords = coordinates[bluepos - 1];
    blueMover.style.left = coords.left + "rem";
    blueMover.style.bottom = coords.bottom + "rem";
  }
};
//for red player
const checkScenariored = (position) => {
  console.log("checking for position", position);
  if (Object.keys(snake).includes(position.toString())) {
    let recoordinate = snake[position]; //snake bites reallocate cooors.
    redpos = recoordinate;
    //removements
    let coords = coordinates[redpos - 1];
    redMover.style.left = coords.left + 0.5 + "rem";
    redMover.style.bottom = coords.bottom + 0.5 + "rem";
  } else if (Object.keys(ladder).includes(position.toString())) {
    let recoordinate = ladder[position]; //ladder incountered reallocate cooors.
    redpos = recoordinate;
    //removements
    let coords = coordinates[redpos - 1];
    redMover.style.left = coords.left + 0.5 + "rem";
    redMover.style.bottom = coords.bottom + 0.5 + "rem";
  }
};

//winning function
const winner = (winnerIMG) => {
  document.querySelector(".winner").style.display = "block";
  winnerImg.src = `./${winnerIMG}.png`;
  rightBtn.style.display = "none";
  leftBtn.style.display = "none";
};

//restart
const restart = () => {
  window.location.reload();
  document.querySelector(".winner").style.display = "none";
};
restartE1.addEventListener("click", restart);
