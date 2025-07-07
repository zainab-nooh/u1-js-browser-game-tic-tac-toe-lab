//1) Define the required variables used to track the state of the game.
let board
let turn 
let winner
let tie 
//2) Store cached element references.
const squareEls = document.querySelectorAll('.sqr')
console.log(squareEls)
const messageEl = document.querySelector('#message')
console.log(messageEl)

const resetBtnEl = document.querySelector('#reset')
console.log(resetBtnEl)



//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

function init() {
   board = ['','','',
            '','','',
            '','',''] 
   turn = 'X'
   winner = false
   tie = false

   render()
}

init()

//4) The state of the game should be rendered to the user.

function render(){
updateBoard()
updateMessage()
}

function updateBoard(){
    //step that works on iteration for the board elemnts
     board.forEach((cell, index) => {
        const squareEl = squareEls[index]

        //styleing step 
        squareEl.textContent = cell
    });
}

function updateMessage(){
    //game is still in progress, shows who is player's trun
    if(winner == false && tie == false){
        messageEl.textContent = `It's ${turn}'s turn.`
    }
    // shows tie message
    else if (winner == false && tie == true){
        messageEl.textContent = `It's a tie`
    }
    //otherwise , a victory accured (Won message)
    else {
        messageEl.textContent = `Congratulations ! Player ${turn} wins .-.`
    }

}
//5) Define the required constants.
//Deifining all winnig posibilities (options)
const winningCombos = [
    [0,1,2],//option1: top row
    [3,4,5],//option2: middle row
    [6,7,8],//option3: bottom row
    [0,3,6],//option4: left column
    [1,4,7],//option5: middle column
    [2,5,8],//option6: right column
    [0,4,8],//option7: top left to bottom right
    [2,4,6],//option8: last one  top right to bottom left


]

//6) Handle a player clicking a square with a `handleClick` function.

function handleClick(event){
    const squareIndex = parseInt(event.target.id)
    console.log('Square Element has been clicked:', squareIndex)

    //managing validity of a move 
if (board[squareIndex] !== ''){
    console.log('Square is alredy taken')
    return
}

if (winner) {
    console.log('Game over')
    return
}

//invoke placePiece fuction witha parameter squareIndex
placePiece(squareIndex)

checkForWinner()
checkForTie()
switchPlayerTurn()
render()

}

function placePiece(index) {
    board[index] = turn

    console.log('Board after placing piece:', board)
}

function checkForWinner() {
    //top row 
    if (board[0] !== '' && board[0] == board[1] && board[0] == board[2]){
        winner = true
        return
    }

    //middle row
    if (board[3] !== '' && board[3] == board[4] && board[3] == board[5]) {
        winner = true
        return
    }

    //bottom row 
    if (board[6] !== '' && board[6] == board[7] && board[6] == board[8]) {
        winner = true
        return    
    }

    //left column 
    if (board[0] !== '' && board[0] == board[3] && board[0] == board[6]) {
        winner = true
        return    
    }

    //middle column 
    if (board[1] !== '' && board[1] == board[4] && board[1] == board[7]) {
        winner = true
        return    
    }  
    
    //right column 
    if (board[2] !== '' && board[2] == board[5] && board[2] == board[8]) {
        winner = true
        return    
    } 
    
    //top left bottom right 
    if (board[0] !== '' && board[0] == board[4] && board[0] == board[8]) {
        winner = true
        return    
    }   
    
    //top right bottom left 
    if (board[2] !== '' && board[2] == board[4] && board[2] == board[6]) {
        winner = true
        return    
    }      
    }

function checkForTie() {
    if (winner){
        return
    }

    if (!board.includes('')) {
        tie = true
    }

}

function switchPlayerTurn() {
    if (winner){
        return
    }

    if (turn === 'X') {
        turn = 'O'
    }else {
        turn = 'X'
    }
}



//7) Create Reset functionality.
resetBtnEl.addEventListener('click', init)

squareEls.forEach((square) => {
    square.addEventListener('click', handleClick)
})















/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Functions --------------------------------*/



/*----------------------------- Event Listeners -----------------------------*/


