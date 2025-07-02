<h1>
  <span class="headline">Tic Tac Toe Lab</span>
  <span class="subhead">Exercise Intro</span>
</h1>

## Introduction

In this lab, you will build a Tic-Tac-Toe game incorporating the web technologies and techniques you've worked with thus far:

- Git
- HTML
- CSS
- JavaScript
- DOM Manipulation

## Minimum requirements

- Display an empty tic-tac-toe board when the page is initially displayed.
- A player can click on the nine cells to make a move.
- Every click will alternate between marking an `X` and `O`.
- Display whose turn it is (X or O).
- The cell cannot be played again once occupied with an `X` or `O`.
- Provide win logic and display a winning message.
- Provide logic for a cat's game (tie), also displaying a message.
- Provide a `Reset Game` button that will clear the contents of the board.

## Items of note

Think about the below ideas as you're building this lab. Decisions have been made for you in the pseudocode that you should pay attention to because they're important notes for your future work:

- Using `id`/`class` attributes will help you target elements for styling and wiring up your click event listeners. These have already been added for you in this lab!
- Programs, including games, frequently focus on manipulating and displaying that data to a user. Decide on the data structures held in variables you will use to maintain the game's *state* (its current data or status).
- Lots of little functions with small jobs help accomplish big things!

## Pseudocode

Pseudocode is a detailed description of what an application must do, written in natural language instead of a particular programming language.

Well-written pseudocode should be easily translated into actual code. The best way to get started is to start with the big picture of what the app needs to do:

```javascript
//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.
```

Most web apps are event-driven by nature. Coding an event-driven program generally requires setting up the application when it loads (steps 1 - 5) and waiting for the user to interact with the app (steps 6 & 7).

Next, we can start expanding on these steps with detailed pseudocode.

The remainder of this exercise walks through those steps. Follow along from start to finish, and you'll have a complete game of Tic-Tac-Toe that meets the minimum requirements!
