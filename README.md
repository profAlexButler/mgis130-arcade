# The Arcade

A small website of browser games. The home page lists every game; each game is its own HTML file in the `games/` folder.

## How the site is put together

```
index.html      The home page. Has an empty spot where the game cards go.
games.js        The list of games (title, file, description, controls).
script.js       Reads the list in games.js and builds one card per game.
style.css       The arcade's look (colors, fonts, card layout).
games/          One HTML file per game.
  taco-catch.html
  asteroids.html
  pitfall.html
```

The home page never names a game directly. It reads `games.js`, so the list in that file is the single place that says which games exist.

## Rules for adding a game

1. **One file per game.** Put it in `games/`, named in lowercase with hyphens (for example `games/snake.html`).
2. **The file runs on its own.** HTML, CSS and JavaScript all inside that one file (in `<style>` and `<script>` tags). No other files, no images to upload, no API keys. Shapes drawn on a canvas, or emoji, are fine.
3. **A way back.** Near the top of `<body>`, include this link:
   `<a href="../index.html">&larr; Back to the arcade</a>`
4. **Matches the arcade.** Background `#12101f`, pink `#ff5fd2`, cyan `#4de8ff`, font `"Courier New", monospace`.
5. **Start and restart.** The game waits for the player to press space or click before it starts, and shows a game over screen with the score and a way to play again.
6. **Add it to the list.** Add one entry to the `GAMES` list in `games.js`:

```js
{
  title: "Snake",
  file: "games/snake.html",
  description: "One sentence about the game.",
  controls: "Which keys or mouse moves to use"
}
```

Remember the comma between entries. `index.html`, `script.js` and `style.css` do not change when a game is added.

## Hosting

The site runs on GitHub Pages from the `main` branch. After a change is pushed, the live site updates in a minute or two.
