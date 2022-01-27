// darkmode
const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change',() => {
    document.body.classList.toggle('dark');
});

// board
let board = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
];

// scores
let p1Score = 1;
let p2Score = 1;

// players class
class Player {
    constructor() {
        this.turn = false;
        this.win = false;
    }
}

const player1 = new Player();
const player2 = new Player();

// board class
class Space {
    constructor(id) {
        this.played = false;
        this.id = id;
    }

    addX(space) {
        $(space).append("<div class='x'>X</div>");
    }

    addO(space) {
        $(space).append("<div class='o'>O</div>");
    }
}

const space1 = new Space('00');
const space2 = new Space('01');
const space3 = new Space('02');
const space4 = new Space('10');
const space5 = new Space('11');
const space6 = new Space('12');
const space7 = new Space('20');
const space8 = new Space('21');
const space9 = new Space('22');

// no of clicks
let count = 0;

// switch turn
function switchplayer(p1, p2) {
    p1.turn = true;
    p2.turn = false;
}

// gameover message
var result = document.getElementById('result');

// game start
player1.turn = true;

$('.box').on('click', (e) => {
    if(player1.win !== true && player2.win !== true) {
        if(e.target.id === space1.id && space1.played === false) {
            if(player1.turn) {
                count += 1;
                space1.addX(e.target);
                let index = board[0].indexOf(1);
                if(index !== -1) {
                    board[0][index] = 'x';
                    $('.turn').text('Player Two Turn');    
                    $('.turn').css('color', '#D902EE');
                }
                switchplayer(player2, player1);
                space1.played = true;
            }
            else {
                count += 1;
                space1.addO(e.target);
                let index = board[0].indexOf(1);
                if(index !== -1) {
                    board[0][index] = 'o';
                    $('.turn').text('Player 1 Turn');    
                    $('.turn').css('color', 'tomato');
                }
                switchplayer(player1, player2);
                space1.played = true;
            }
        } 

        else if (e.target.id === space2.id && space2.played === false) {
            if(player1.turn) {
                count += 1;
                space2.addX(e.target); 
                let index = board[0].indexOf(2);
                if(index !== -1) {
                    board[0][index] = 'x';
                    $('.turn').text('Player Two Turn');    
                    $('.turn').css('color', '#D902EE');
                }
                switchplayer(player2, player1);
                space2.played = true;
            }
            else {
                count += 1;
                space2.addO(e.target);
                let index = board[0].indexOf(2);
                if(index !== -1) {
                    board[0][index] = 'o';
                    $('.turn').text('Player One Turn');    
                    $('.turn').css('color', 'tomato');
                }
                switchplayer(player1, player2);
                space2.played = true;
            } 
        }

        else if (e.target.id === space3.id && space3.played === false) {
            if(player1.turn) {
                count += 1;
                space3.addX(e.target);   
                let index = board[0].indexOf(3);
                if(index !== -1) {
                    board[0][index] = 'x';
                    $('.turn').text('Player Two Turn');    
                    $('.turn').css('color', '#D902EE');
                }
                switchplayer(player2, player1);
                space3.played = true;
            }
            else {
                count += 1;
                space3.addO(e.target); 
                let index = board[0].indexOf(3);
                if(index !== -1) {
                    board[0][index] = 'o';
                    $('.turn').text('Player One Turn');    
                    $('.turn').css('color', 'tomato');
                }
                switchplayer(player1, player2);
                space3.played = true;
            }   
        }

        else if (e.target.id === space4.id && space4.played === false) {
            if(player1.turn) {
                count += 1;
                space4.addX(e.target);  
                let index = board[1].indexOf(4);
                if(index !== -1) {
                    board[1][index] = 'x';
                    $('.turn').text('Player Two Turn');    
                    $('.turn').css('color', '#D902EE');
                }
                switchplayer(player2, player1);
                space4.played = true;
            }
            else {
                count += 1;
                space4.addO(e.target);
                let index = board[1].indexOf(4);
                if(index !== -1) {
                    board[1][index] = 'o';
                    $('.turn').text('Player One Turn');    
                    $('.turn').css('color', 'tomato');
                }
                switchplayer(player1, player2);
                space4.played = true;
            } 
        }

        else if (e.target.id === space5.id && space5.played === false) {
            if(player1.turn) {
                count += 1;
                space5.addX(e.target); 
                let index = board[1].indexOf(5);
                if(index !== -1) {
                    board[1][index] = 'x';
                    $('.turn').text('Player Two Turn');    
                    $('.turn').css('color', '#D902EE');
                }
                switchplayer(player2, player1);
                space5.played = true;
            }
            else {
                count += 1;
                space5.addO(e.target); 
                let index = board[1].indexOf(5);
                if(index !== -1) {
                    board[1][index] = 'o';
                    $('.turn').text('Player One Turn');    
                    $('.turn').css('color', 'tomato');
                }
                switchplayer(player1, player2);
                space5.played = true;
            }   
        }  

        else if (e.target.id === space6.id && space6.played === false) {
            if(player1.turn) {
                count += 1;
                space6.addX(e.target);
                let index = board[1].indexOf(6);
                if(index !== -1) {
                    board[1][index] = 'x';
                    $('.turn').text('Player Two Turn');    
                    $('.turn').css('color', '#D902EE');
                }
                switchplayer(player2, player1);
                space6.played = true;
            }
            else {
                count += 1;
                space6.addO(e.target);
                let index = board[1].indexOf(6);
                if(index !== -1) {
                    board[1][index] = 'o';
                    $('.turn').text('Player One Turn');    
                    $('.turn').css('color', 'tomato');
                }
                switchplayer(player1, player2);
                space6.played = true;
            } 
        }

        else if (e.target.id === space7.id && space7.played === false) {
            if(player1.turn) {
                count += 1;
                space7.addX(e.target);
                let index = board[2].indexOf(7);
                if(index !== -1) {
                    board[2][index] = 'x';
                    $('.turn').text('Player Two Turn');    
                    $('.turn').css('color', '#D902EE');
                }
                switchplayer(player2, player1);
                space7.played = true;
            }
            else {
                count += 1;
                space7.addO(e.target); 
                let index = board[2].indexOf(7);
                if(index !== -1) {
                    board[2][index] = 'o';
                    $('.turn').text('Player One Turn');    
                    $('.turn').css('color', 'tomato');
                }
                switchplayer(player1, player2);
                space7.played = true;
            }   
        }

        else if (e.target.id === space8.id && space8.played === false) {
            if(player1.turn) {
                count += 1;
                space8.addX(e.target);
                let index = board[2].indexOf(8);
                if(index !== -1) {
                    board[2][index] = 'x';
                    $('.turn').text('Player Two Turn');    
                    $('.turn').css('color', '#D902EE');
                }
                switchplayer(player2, player1);
                space8.played = true;
            }
            else {
                count += 1;
                space8.addO(e.target);
                let index = board[2].indexOf(8);
                if(index !== -1) {
                    board[2][index] = 'o';
                    $('.turn').text('Player One Turn');    
                    $('.turn').css('color', 'tomato');
                }
                switchplayer(player1, player2);
                space8.played = true;
            } 
        }

        else if (e.target.id === space9.id && space9.played === false) {
            if(player1.turn) {
                count += 1;
                space9.addX(e.target);
                let index = board[2].indexOf(9);
                if(index !== -1) {
                    board[2][index] = 'x';
                    $('.turn').text('Player Two Turn');    
                    $('.turn').css('color', '#D902EE');
                }
                switchplayer(player2, player1);
                space9.played = true;
            }
            else {
                count += 1;
                space9.addO(e.target); 
                let index = board[2].indexOf(9);
                if(index !== -1) {
                    board[2][index] = 'o';
                    $('.turn').text('Player One Turn');    
                    $('.turn').css('color', 'tomato');
                }
                switchplayer(player1, player2);
                space9.played = true;
            }   
        }

//check if playerX wins
// top row
        if(board[0][0] === "x" && board[0][1] === "x" && board[0][2] === "x") {
            $('.turn').text('Game Over');
            $('.turn').css('color', 'tomato');
            $('.p1').text ('Player 1:\xa0\xa0\xa0 '+ p1Score);
            p1Score += 1;
            player1.win = true;
            endgame(1);
        }  
        // middle row 
        else if (board[1][0] === "x" && board[1][1] === "x" && board[1][2] === "x") {
            $('.turn').text('Game Over');
            $('.turn').css('color', 'tomato');
            $('.p1').text ('Player 1:\xa0\xa0\xa0' + p1Score);
            p1Score += 1;
            player1.win = true;
            endgame(1);
        }
        // bottom row
        else if (board[2][0] === "x" && board[2][1] === "x" && board[2][2] === "x") {
            $('.turn').text('Game Over'); 
            $('.turn').css('color', 'tomato');
            $('.p1').text ('Player 1:\xa0\xa0\xa0 ' + p1Score);
            p1Score += 1;
            player1.win = true;
            endgame(1);
        }
        // first column
        else if (board[0][0] === 'x' && board[1][0] === 'x' && board[2][0] === 'x') {
            $('.turn').text('Game Over'); 
            $('.turn').css('color', 'tomato');
            $('.p1').text ('Player 1:\xa0\xa0\xa0 ' + p1Score);
            p1Score += 1;
            player1.win = true;
            endgame(1);
        }
        // second column
        else if (board[0][1] === 'x' && board[1][1] === 'x' && board[2][1] === 'x') {
            $('.turn').text('Game Over'); 
            $('.turn').css('color', 'tomato');
            $('.p1').text ('Player 1:\xa0\xa0\xa0 ' + p1Score);
            p1Score += 1;
            player1.win = true;
            endgame(1);
        }
        // third column
        else if (board[0][2] === 'x' && board[1][2] === 'x' && board[2][2] === 'x') {
            $('.turn').text('Game Over'); 
            $('.turn').css('color', 'tomato');
            $('.p1').text ('Player 1:\xa0\xa0\xa0 ' + p1Score);
            p1Score += 1;
            player1.win = true;
            endgame(1);
        }
        // diaganol right
        else if (board[0][0] === 'x' && board[1][1] === 'x' && board[2][2] === 'x') {
            $('.turn').text('Game Over');  
            $('.turn').css('color', 'tomato');
            $('.p1').text ('Player 1:\xa0\xa0\xa0 ' + p1Score);
            p1Score += 1;
            player1.win = true;
            endgame(1);
        }
        // diaganol left
        else if (board[0][2] === 'x' && board[1][1] === 'x' && board[2][0] === 'x') {
            $('.turn').text('Game Over'); 
            $('.turn').css('color', 'tomato');
            $('.p1').text ('Player 1:\xa0\xa0\xa0 ' + p1Score);
            p1Score += 1;
            player1.win = true;
            endgame(1);
        }


        else if(board[0][0] === "o" && board[0][1] === "o" && board[0][2] === "o") {
            $('.turn').text('Game Over');
            $('.turn').css('color', '#D902EE');
            $('.p2').text ('Player 2:\xa0\xa0\xa0 ' + p2Score);
            p2Score += 1;
            player2.win = true;
            endgame(2);
        }  
        
        else if (board[1][0] === "o" && board[1][1] === "o" && board[1][2] === "o") {
            $('.turn').text('Game Over');  
            $('.turn').css('color', '#D902EE');
            $('.p2').text ('Player 2:\xa0\xa0\xa0 ' + p2Score);
            p2Score += 1;
            player2.win = true;
            endgame(2);
        }

        else if (board[2][0] === "o" && board[2][1] === "o" && board[2][2] === "o") {
            $('.turn').text('Game Over');   
            $('.turn').css('color', '#D902EE');
            $('.p2').text ('Player 2:\xa0\xa0\xa0 ' + p2Score);
            p2Score += 1;
            player2.win = true;
            endgame(2);
        }

        else if (board[0][0] === 'o' && board[1][0] === 'o' && board[2][0] === 'o') {
            $('.turn').text('Game Over'); 
            $('.turn').css('color', '#D902EE');
            $('.p2').text ('Player 2:\xa0\xa0\xa0 ' + p2Score);
            p2Score += 1;
            player2.win = true;
            endgame(2);
        }

        else if (board[0][1] === 'o' && board[1][1] === 'o' && board[2][1] === 'o') {
            $('.turn').text('Game Over');  
            $('.turn').css('color', '#D902EE');
            $('.p2').text ('Player 2:\xa0\xa0\xa0 ' + p2Score);
            p2Score += 1;
            player2.win = true;
            endgame(2);
        }

        else if (board[0][2] === 'o' && board[1][2] === 'o' && board[2][2] === 'o') {
            $('.turn').text('Game Over');  
            $('.turn').css('color', '#D902EE');
            $('.p2').text ('Player 2:\xa0\xa0\xa0 ' + p2Score);
            p2Score += 1;
            player2.win = true;
            endgame(2);
        }

        else if (board[0][0] === 'o' && board[1][1] === 'o' && board[2][2] === 'o') {
            $('.turn').text('Game Over');  
            $('.turn').css('color', '#D902EE');
            $('.p2').text ('Player 2:\xa0\xa0\xa0 ' + p2Score);
            p2Score += 1;
            player2.win = true;
            endgame(2);
        }

        else if (board[0][2] === 'o' && board[1][1] === 'o' && board[2][0] === 'o') {
            $('.turn').text('Game Over');    
            $('.turn').css('color', '#D902EE');
            $('.p2').text ('Player 2:\xa0\xa0\xa0 ' + p2Score);
            p2Score += 1;
            player2.win = true;
            endgame(2);
        }

        else if(count==9){
            $('.turn').text('Game Over');    
            $('.turn').css('color', '#D902EE');
            endgame(0);
        }
    }
});


$('.reset').on('click', () => {
    result.style.display = "none";
    techstack.style.display = "none";
    player1.turn = true;
    player2.turn = false;
    player1.win = false;
    player2.win = false;
    $('.x').remove();
    $('.o').remove();
    $('.turn').text('Player One Turn');    
    $('.turn').css('color', 'tomato');
    board = [[1,2,3],[4,5,6],[7,8,9]];
    space1.played = false;
    space2.played = false;
    space3.played = false;
    space4.played = false;
    space5.played = false;
    space6.played = false;
    space7.played = false;
    space8.played = false;
    space9.played = false;
    count=0;
});


function endgame(num) {
    if (num == 0) {
        $(".text").html("Tie game!");
        $("#result").css("display", "block");
    }
    if (num == 1) {
        $(".text").html("Player 1 Wins!");
        $("#result").css("display", "block");
    }
    if (num == 2) {
        $(".text").html("Player 2 Wins!");
        $("#result").css("display", "block");
    }
}

function tech(){
    $("#techstack").css("display", "block");
}
