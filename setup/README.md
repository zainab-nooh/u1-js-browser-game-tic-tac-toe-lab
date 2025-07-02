<h1>
  <span class="headline">Tic Tac Toe Lab</span>
  <span class="subhead">Setup</span>
</h1>

## Setup

Fork this repository.

Clone your newly created repo into your `~/code/ga/labs` directory with the `git clone` command:

```bash
git clone https://github.com/<your-username>/u1-js-browser-game-tic-tac-toe-lab.git
```

> Note: In the link above, where it says `<your-username>`, you should see the username from your GitHub account.

Next, `cd` into your new cloned directory, `u1-js-browser-game-tic-tac-toe-lab`:

```bash
cd u1-js-browser-game-tic-tac-toe-lab
```

Then, create a `js` directory, and a `css` directory. You can make both of these directories at the same time by adding a space between them after the `mkdir` command!

```bash
mkdir js css
```

Next, create an `app.js` file in the `js` directory, a `style.css` file in the `css` directory, and an `index.html` file in the root of the project. Create all of these files at the same time by adding a space between them after the `touch` command. These files will hold your work for this lab:

```bash
touch ./js/app.js ./css/style.css index.html
```

With the files created, open the contents of the directory in VS Code:

```bash
code .
```

### Starter code

There is some starter code associated with this lab. First the HTML for your `index.html` file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./css/style.css">
  <script defer src="./js/app.js"></script>
  <title>Tic-Tac-Toe</title>
</head>
<body>
  <h1>Tic-Tac-Toe</h1>
  <h2 id="message">Message</h2>

  <section class="board">
    <div class="sqr" id="0"></div>
    <div class="sqr" id="1"></div>
    <div class="sqr" id="2"></div>
    <div class="sqr" id="3"></div>
    <div class="sqr" id="4"></div>
    <div class="sqr" id="5"></div>
    <div class="sqr" id="6"></div>
    <div class="sqr" id="7"></div>
    <div class="sqr" id="8"></div>
  </section>
</body>
</html>
```

Take a moment to review this starter HTML. Specifically take note of these elements that will be important to the logic of this game:

- There is an `<h2>` element provided where you can display messages to the user. It has an `id` of `"message"`.
- A game board has also been created inside of the `<section>` element. It has a `"board"` class.
- The game board is made up of nine `<div>` elements. These elements all share the same class: `sqr`, and also have unique ids ranging from `0` to `8`.
  > 🧠 Think about why these might be numbered starting from 0 instead of 1. What data type have we used that starts from 0 instead of 1? This will come into play later.
- Using `id` and/or `class` attributes will help you target elements for styling and wiring up your click event listeners. These have already been added for you in this lab!

After you've reviewed that, add this CSS into your `css/style.css` file:

```css
body {
  background-color: gainsboro;
  /* Use a system font, if none are available use an available sans-sarif */
  font-family: system-ui, sans-serif;
  margin: 0;
}

.board {
  display: flex;
  flex-wrap: wrap;
  width: 325px;
}

.sqr {
  width: 30%;
  aspect-ratio: 1/1;
  border: 3px solid black;
  font-size: 64px;
  text-align: center;
}
```

While you've seen quite a bit of CSS like this before, there are a few declarations here that we should discuss:

- In the `body` rule we are using `display: flex;` and `flex-wrap: wrap;`. These declarations are related to flexbox. All you need to know about them for now is that they are helping us create the layout for our board - you don't need to touch these.
- In the `.sqr` rule there is a `width: 30%;` declaration. This sets the width of the content of each element with the `sqr` class to be 30% of the width of it's parent element. In this case all the elements with the `.sqr` class have a single parent - the `<section>` element with the `board` class. We set the width of that element to 325px above. This means that the content of each element with the `sqr` class will have a final width of about 98px.

  If you change the width declaration in the `.board` rule, you will notice that the width of the elements with the `sqr` class also changes.
- Their height will change as well, because there is a `aspect-ratio: 1/1;` declaration in the `.sqr` rule. This makes the elements with the `sqr` class square shaped - the element will be as tall as it is wide (giving it an aspect ratio of 1:1).

Finally, there is a bit of optional boilerplate you can add to your JavaScript to make it easier to find sections inside of it. Add it to your `js/app.js` if you'd like.

```js
/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Functions --------------------------------*/



/*----------------------------- Event Listeners -----------------------------*/



```

## Start the app

Open the `index.html` file in your browser and access the console output in your browser's dev tools.
