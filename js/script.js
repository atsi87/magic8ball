
const answer = document.getElementById("answer");
const questionButton = document.getElementById('questionButton');
questionButton.addEventListener("click", function () {
    const magicball = getRandomIntInclusive(1, 20);
    console.log(magicball);
answer.src = `../img/magic8ball_${magicball}.png`;
});

function getRandomIntInclusive(min, max) {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);
  return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue); 
}



