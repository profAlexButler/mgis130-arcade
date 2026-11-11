# HANDOFF

**Goal:** Build a browser-based arcade website featuring simple HTML/CSS/JS games for visitors to play.

**Live link and repo:** mgis130-arcade (GitHub Pages)

**Files:**
- index.html - Main arcade landing page.
- games.js - Central registry array containing game info cards.
- script.js - Builds arcade cards dynamically from games.js.
- style.css - Arcade site theme and responsive card styling.
- games/beer-pong.html - College bar themed Beer Pong arcade game.
- games/taco-catch.html - Taco catch game.
- games/asteroids.html - Asteroids shooter game.
- games/pitfall.html - Platformer jungle game.
- games/minecraft.html - Block craft building game.
- games/snake.html - Snake arcade game.
- games/saucer-storm.html - Space saucer shooter game.

**Working now:** Arcade home page and all existing games are functional.

**Last session:** Added `games/beer-pong.html` with Option A aim/power timing controls, ping pong table aesthetic, and updated `games.js`.

**Next step:** Test `games/beer-pong.html` in browser, commit files, and verify on GitHub Pages.

**Decisions:**
- Single-file standalone structure for all game files inside `games/`.
- Color scheme for arcade matching `#12101f` background, `#ff5fd2` pink, `#4de8ff` cyan, and `"Courier New", monospace` font.
- Beer Pong controls set to Option A: Space to lock aim angle, Space again to set throw power.

**APIs and data:** None (local browser storage / static JS config).

**How to check it:** Open `index.html` in browser, click "Beer Pong" card, press Space to lock aim angle and power bar, and check if ball launches into red cups.