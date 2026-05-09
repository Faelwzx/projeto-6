const moneyInput = document.getElementById("money");
const gameSelect = document.getElementById("game");
const convertBtn = document.getElementById("convertBtn");

const result = document.getElementById("result");
const resultText = document.getElementById("resultText");
const gameImage = document.getElementById("gameImage");

const historyList = document.getElementById("historyList");

const themeToggle = document.getElementById("themeToggle");

convertBtn.addEventListener("click", () => {

  const money = Number(moneyInput.value);

  const game = gameSelect.value;

  if(money <= 0 || !money){

    result.style.display = "block";

    gameImage.style.display = "none";

    resultText.innerHTML =
      "Digite um valor válido.";

    return;
  }

  let coins = 0;

  let gameName = "";

  let image = "";

  if(game === "robux"){

    coins = money * 80;

    gameName = "Robux";

    image = "./img/robux.png";
  }

  else if(game === "vbucks"){

    coins = money * 100;

    gameName = "V-Bucks";

    image = "./img/vbucks.png";
  }

  else if(game === "gems"){

    coins = money * 60;

    gameName = "Gemas";

    image = "./img/gems.png";
  }

  else if(game === "cod"){

    coins = money * 120;

    gameName = "CP";

    image = "./img/cod.png";
  }

  gameImage.src = image;

  gameImage.style.display = "block";

  result.style.display = "block";

  resultText.innerHTML =
    `R$ ${money.toFixed(2)} equivalem a <br>
    <strong>${coins} ${gameName}</strong>`;

  const li = document.createElement("li");

  li.innerHTML =
    `R$ ${money.toFixed(2)} → ${coins} ${gameName}`;

  historyList.prepend(li);

});

themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("light");

  if(document.body.classList.contains("light")){

    themeToggle.innerHTML = "☀️";
  }

  else{

    themeToggle.innerHTML = "🌙";
  }

});

const particles = document.querySelector(".particles");

for(let i = 0; i < 50; i++){

  const span = document.createElement("span");

  span.style.left = Math.random() * 100 + "%";

  span.style.animationDuration =
    (Math.random() * 10 + 5) + "s";

  span.style.opacity = Math.random();

  span.style.width =
    span.style.height =
    (Math.random() * 8 + 4) + "px";

  particles.appendChild(span);

}