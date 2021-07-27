// =============================UI================================
$(".rules-btn").click(() => {
  $(".rules-modal").toggle();
});

$(".close_btn").click(() => {
  $(".rules-modal").hide();
});

$("body").click(() => {
  $(".rules-modal").hide();
});

$(".rules-btn").click((e) => {
  e.stopPropagation();
});

let arr = [...$(".optn")];
console.log(arr);

// ====================PLAYER=============================
let player_optn = "";

$(".optn").click(function () {
  console.log(this.classList[1]);
  player_optn = this.classList[1];

  $("#major").hide();
  $("#page2").css("display", "flex");
  let obj = this.cloneNode(true);
  $(".play").append(obj);
  compChance();
  compare();
});

// ===========================COMPUTER======================
let comp_optn = "";

const options = ["scis", "spk", "pap", "lz", "rck"];

function compChance() {
  let idx = Math.floor(Math.random() * 5);
  console.log(options[idx]);

  console.log(arr[idx], options[arr]);
  comp_optn = options[idx];

  let optn = arr[idx].cloneNode(true);
  $(".com").append(optn);
}

// ======================COMPARISONS================================
let score = document.querySelector(".score").textContent;
console.log(score);

function compare() {
  if (player_optn == comp_optn) {
    drawMatch();
  }
  if (player_optn == "scis") {
    if (comp_optn == "spk") {
      playerLose();
    } else if (comp_optn == "pap") {
      playerWins();
    } else if (comp_optn == "lz") {
      playerWins();
    } else if (comp_optn == "rck") {
      playerLose();
    }
  }
  if (player_optn == "spk") {
    if (comp_optn == "scis") {
      playerWins();
    } else if (comp_optn == "pap") {
      playerLose();
    } else if (comp_optn == "lz") {
      playerLose();
    } else if (comp_optn == "rck") {
      playerWins();
    }
  }
  if (player_optn == "pap") {
    if (comp_optn == "spk") {
      playerWins();
    } else if (comp_optn == "scis") {
      playerLose();
    } else if (comp_optn == "lz") {
      playerLose();
    } else if (comp_optn == "rck") {
      playerWins();
    }
  }
  if (player_optn == "lz") {
    if (comp_optn == "spk") {
      playerWins();
    } else if (comp_optn == "pap") {
      playerWins();
    } else if (comp_optn == "scis") {
      playerLose();
    } else if (comp_optn == "rck") {
      playerLose();
    }
  }
  if (player_optn == "rck") {
    if (comp_optn == "spk") {
      playerLose();
    } else if (comp_optn == "pap") {
      playerLose();
    } else if (comp_optn == "lz") {
      playerWins();
    } else if (comp_optn == "scis") {
      playerWins();
    }
  }
}

function playerWins() {
  $(".text-el").show();
  $(".heading").text("YOU WIN");
  score++;
  $(".score").text(score);
}

function playerLose() {
  $(".text-el").show();
  $(".heading").text("YOU LOSE");
}

function drawMatch() {
  $(".text-el").show();
  $(".heading").text("DRAW");
}

// ==============================PLAY AGAIN================================
$(".btn").click(() => {
  $(".play").html("");
  $("#page2").css("display", "none");
  $(".com").html("");
  $("#major").show();
});
