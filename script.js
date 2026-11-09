// Builds the arcade's home page from the GAMES list in games.js.
// You should not need to change this file to add a game.

const list = document.getElementById("game-list");

GAMES.forEach(function (game) {
  const card = document.createElement("a");
  card.className = "card";
  card.href = game.file;
  card.innerHTML =
    "<h2>" + game.title + "</h2>" +
    "<p>" + game.description + "</p>" +
    "<p class='controls'>" + game.controls + "</p>" +
    "<span class='play'>PLAY</span>";
  list.appendChild(card);
});

document.getElementById("game-count").textContent = GAMES.length;
