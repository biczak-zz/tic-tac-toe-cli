const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let horizontalBorder = '---+---+---';
let space1 = ' 1';
let space2 = '2';
let space3 = '3 ';
let space4 = ' 4';
let space5 = '5';
let space6 = '6 ';
let space7 = ' 7';
let space8 = '8';
let space9 = '9 ';
let verticalBorder = ' | ';
let turn = false;
const availableSpaces = [1, 2, 3, 4, 5, 6, 7, 8, 9];

rl.question("Would you like to play? (y/n) \n", (answer, cb) => {
    if (answer.toLowerCase() === 'y') {
        return gameStart();
    }
});
const prompt = (turn, spaces) => {
        rl.question("Please Select an Available Space \n", (answer, cb) => {
            switch(Number(answer)) {
                case 1:
                if(space1 === ' 1' && turn === true) {
                    space1 = ' X';
                    spaces.splice(spaces.indexOf(answer), 1);
                    return nextMove(spaces);
                } else if(space1 === ' 1' && turn === false) {
                    space1 = ' O';
                    spaces.splice(spaces.indexOf(answer), 1);
                    return nextMove(spaces);
                } else {
                    rl.write("Invalid Entry! \n");
                    return prompt(turn, spaces);
                }
                case 2:
                    line1 = ' 1 | X | 3';
                    spaces.splice(spaces.indexOf(answer), 1);
                    return nextMove(spaces);
                case 3:
                    line1 = ' 1 | 2 | X';
                    spaces.splice(spaces.indexOf(answer), 1);
                    return nextMove(spaces);
                case 4:
                    line2 = ' X | 5 | 6';
                    spaces.splice(spaces.indexOf(answer), 1);
                    return nextMove(spaces);
                case 5:
                    line2 = ' 4 | X | 6';
                    spaces.splice(spaces.indexOf(answer), 1);
                    return nextMove(spaces);
                case 6:
                    line2 = ' 4 | 5 | X';
                    spaces.splice(spaces.indexOf(answer), 1);
                    return nextMove(spaces);
                case 7:
                    line3 = ' X | 8 | 9';
                    spaces.splice(spaces.indexOf(answer), 1);
                    return nextMove(spaces);
                case 8:
                    line3 = ' 7 | X | 9';
                    spaces.splice(spaces.indexOf(answer), 1);
                    return nextMove(spaces);
                case 9:
                    line3 = ' 7 | 8 | X';
                    spaces.splice(spaces.indexOf(answer), 1);
                    return nextMove(spaces);
                default:
                    rl.write("That is not a valid space. Here are the available spaces", spaces);
                    return prompt(spaces);
            }
    });
}
const gameStart = (veritcalBorder, horizontalBorder, space1, space2, space3, space4, space5, space6, space7, space8, space9, availableSpaces) => {
    console.log(space1,verticalBorder,space2,veritcalBorder,space3, "\n",horizontalBorder, "\n",space4,verticalBorder,space5,veritcalBorder,space6, "\n",horizontalBorder, "\n",space7,verticalBorder,space8,veritcalBorder,space9);
    const spaces = availableSpaces.slice();
    rl.write("Player 1's Turn! \n \n");
    prompt(spaces);
};

const nextMove = (board, spaces) => {
    console.log(line1,'\n',border,'\n',line2,'\n',border,'\n',line3);
    if(turn === true) {
        rl.write("Player 1's Turn! \n");
    } else {
        rl.write("Player 2's Turn! \n");
    }
    return prompt(board, spaces);
}
gameStart(verticalBorder, horizontalBorder, space1, space2, space3, space4, space5, space6, space7, space8, space9, availableSpaces);