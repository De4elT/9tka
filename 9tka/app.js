function graczVsGracz(){
    

  
const PLAYER1 = 'fa-mountain';
const PLAYER2 = 'fa-mountain';
const PLAYER3 = 'fa-dragon';
const PLAYER4 = 'fa-spider';
let round = 1;
let counter = 0;
let xscore = 0;
let oscore = 0;


const board = [
    ['', '', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', '', ''],
];



const boxes = [...document.querySelectorAll('.box')];
boxes.forEach(box => box.addEventListener('click', pick));



function pick(event) {
    var { row, column } = event.target.dataset;
    const turn = round % 2 === 0 ? PLAYER2 : PLAYER1;
    const turn1 = round % 2 === 0 ? PLAYER3 : PLAYER4;



    if (round < 10) {



        //1

        console.log(event.target.dataset);

        if ((row == 2 || row == 3) && (column == 2 || column == 3)) {

            if ((board[2][2] == '') && (board[2][3] == '') && (board[3][3] == '') && (board[3][2] == '')) {
                event.target.classList.add(turn);
                board[row][column] = turn;
                textColor()
                round++;
            }
        }
        //2
        if ((row == 2 || row == 3) && (column == 4 || column == 5 || column == 6)) {

            if ((board[3][4] == '') && (board[3][5] == '') && (board[3][6] == '') && (board[2][4] == '') && (board[2][5] == '') && (board[2][6] == '')) {
                event.target.classList.add(turn);
                board[row][column] = turn;
                textColor()
                round++;
            }
        }
        //3
        if ((row == 2 || row == 3) && (column == 7 || column == 8)) {

            if ((board[2][7] == '') && (board[2][8] == '') && (board[3][7] == '') && (board[3][8] == '')) {
                event.target.classList.add(turn);
                board[row][column] = turn;
                textColor()
                round++;
            }
        }
        //4
        if ((row == 4 || row == 5 || row == 6) && (column == 2 || column == 3)) {

            if ((board[4][2] == '') && (board[4][3] == '') && (board[5][2] == '') && (board[5][3] == '') && (board[6][2] == '') && (board[6][3] == '')) {
                event.target.classList.add(turn);
                board[row][column] = turn;
                textColor()
                round++;
            }
        }
        //5
        if ((row == 4 || row == 5 || row == 6) && (column == 4 || column == 5 || column == 6)) {

            if ((board[4][4] == '') && (board[4][5] == '') && (board[4][6] == '') && (board[5][4] == '') && (board[5][5] == '') && (board[5][6] == '') && (board[6][4] == '') && (board[6][5] == '') && (board[6][6] == '')) {
                event.target.classList.add(turn);
                board[row][column] = turn;
                textColor()
                round++;
            }
        }
        //6
        if ((row == 4 || row == 5 || row == 6) && (column == 7 || column == 8)) {

            if ((board[4][7] == '') && (board[4][8] == '') && (board[5][7] == '') && (board[5][8] == '') && (board[6][7] == '') && (board[6][8] == '')) {
                event.target.classList.add(turn);
                board[row][column] = turn;
                textColor()
                round++;
            }
        }
        //7
        if ((row == 7 || row == 8) && (column == 2 || column == 3)) {

            if ((board[7][2] == '') && (board[7][3] == '') && (board[8][2] == '') && (board[8][3] == '')) {
                event.target.classList.add(turn);
                board[row][column] = turn;
                textColor()
                round++;
            }
        }
        //8
        if ((row == 7 || row == 8) && (column == 4 || column == 5 || column == 6)) {

            if ((board[7][4] == '') && (board[7][5] == '') && (board[7][6] == '') && (board[8][4] == '') && (board[8][5] == '') && (board[8][6] == '')) {
                event.target.classList.add(turn);
                board[row][column] = turn;
                textColor()
                round++;
            }
        }
        //9
        if ((row == 7 || row == 8) && (column == 7 || column == 8)) {

            if ((board[7][7] == '') && (board[7][8] == '') && (board[8][7] == '') && (board[8][8] == '')) {
                event.target.classList.add(turn);
                board[row][column] = turn;
                textColor()
                round++;
            }
        }

    }
    else
        if (round >= 10 && round <= 45) {
            //gÃ³rna ramka
            if ((row == 0) && (column == 1 || column == 2 || column == 3 || column == 4 || column == 5 || column == 6 || column == 7 || column == 8 || column == 9)) {
                if ((board[0][1] == '') || (board[0][2] == '') || (board[0][3] == '') || (board[0][4] == '') || (board[0][5] == '') || (board[0][6] == '') || (board[0][7] == '') || (board[0][8] == '') || (board[0][9] == '')) {
                    if (board[row][column] != "") return;
                    event.target.classList.add(turn1);
                    board[row][column] = turn1;
                    textColor()
                    round++;
                    console.log(round);
                }
            }

            //lewa ramka
            if ((row == 1 || row == 2 || row == 3 || row == 4 || row == 5 || row == 6 || row == 7 || row == 8 || row == 9) && (column == 0)) {
                if ((board[1][0] == '') || (board[2][0] == '') || (board[3][0] == '') || (board[4][0] == '') || (board[5][0] == '') || (board[6][0] == '') || (board[7][0] == '') || (board[8][0] == '') || (board[9][0] == '')) {
                    if (board[row][column] != "") return;
                    event.target.classList.add(turn1);
                    board[row][column] = turn1;
                    textColor()
                    round++;
                    console.log(round);
                }
            }
            //prawa ramka
            if ((row == 1 || row == 2 || row == 3 || row == 4 || row == 5 || row == 6 || row == 7 || row == 8 || row == 9) && (column == 10)) {

                if ((board[1][9] == '') || (board[2][9] == '') || (board[3][9] == '') || (board[4][9] == '') || (board[5][9] == '') || (board[6][9] == '') || (board[7][9] == '') || (board[8][9] == '') || (board[9][9] == '')) {
                    if (board[row][column] != "") return;
                    event.target.classList.add(turn1);
                    board[row][column] = turn1;
                    textColor()
                    round++;
                    console.log(round);
                }
            }
            //dolna ramka
            if ((row == 10) && (column == 1 || column == 2 || column == 3 || column == 4 || column == 5 || column == 6 || column == 7 || column == 8 || column == 9)) {

                if ((board[10][1] == '') || (board[10][2] == '') || (board[10][3] == '') || (board[10][4] == '') || (board[10][5] == '') || (board[10][6] == '') || (board[10][7] == '') || (board[10][8] == '') || (board[10][9] == '')) {
                    if (board[row][column] != "") return;
                    event.target.classList.add(turn1);
                    board[row][column] = turn1;
                    textColor()
                    round++;
                    console.log(round);
                }
            }




        }
        else if (round > 45) {
            //lewo
            if ((row == 1 || row == 2 || row == 3 || row == 4 || row == 5 || row == 6 || row == 7 || row == 8 || row == 9) && (column == 0)) {


                let j = 0;

                if ((board[row][0] !== '') && (board[row][0] == turn1)) {
                    for (let i = 1; j < 1; i++) {
                        if (board[row][i] == '') {

                            board[row][i] = board[row][i - 1];
                            board[row][i - 1] = '';
                        }
                        else {


                            j = 1;
                            event.target.classList.remove(turn1);
                            if (board[row][column] != "") {
                                textColor()
                                round++
                                return;
                            }
                            var myfield = document.getElementById((row * 10) + i - 1);
                            console.log(myfield.dataset);
                            myfield.classList.add(turn1);



                        }
                    }
                    textColor()
                    round++;
                }



            }

            //prawo 

            if ((row == 1 || row == 2 || row == 3 || row == 4 || row == 5 || row == 6 || row == 7 || row == 8 || row == 9) && (column == 10)) {


                let j = 0;

                if ((board[row][10] !== '') && (board[row][10] == turn1)) {
                    for (let i = 9; j < 1; i--) {
                        if (board[row][i] == '') {

                            board[row][i] = board[row][i + 1];
                            board[row][i + 1] = '';
                        }
                        else {

                            j = 1;

                            event.target.classList.remove(turn1);
                            if (board[row][column] != "") {
                                textColor()
                                round++
                                return;
                            }
                            var myfield = document.getElementById((row * 10) + i + 1);
                            console.log(myfield.dataset);
                            myfield.classList.add(turn1);
                        }
                    }
                    textColor()
                    round++;
                }



            }

            //gora
            if ((column == 1 || column == 2 || column == 3 || column == 4 || column == 5 || column == 6 || column == 7 || column == 8 || column == 9) && (row == 0)) {


                let j = 0;

                if ((board[0][column] !== '') && (board[0][column] == turn1)) {
                    for (let i = 1; j < 1; i++) {
                        if (board[i][column] == '') {

                            board[i][column] = board[i - 1][column];
                            board[i - 1][column] = '';
                        }
                        else {

                            j = 1;

                            event.target.classList.remove(turn1);
                            if (board[row][column] != "") {
                                textColor()
                                round++
                                return;
                            }
                            var myfield = document.getElementById((i - 1) + column);
                            console.log(myfield.dataset);
                            myfield.classList.add(turn1);
                        }
                    }
                    textColor()
                    round++;
                }



            }

            //dol 

            if ((column == 1 || column == 2 || column == 3 || column == 4 || column == 5 || column == 6 || column == 7 || column == 8 || column == 9) && (row == 10)) {


                let j = 0;

                if ((board[10][column] !== '') && (board[10][column] == turn1)) {
                    for (let i = 9; j < 1; i--) {
                        if (board[i][column] == '') {

                            board[i][column] = board[i + 1][column];
                            board[i + 1][column] = '';
                        }
                        else {

                            j = 1;

                            event.target.classList.remove(turn1);
                            if (board[row][column] != "") {
                                textColor();
                                round++
                                return;
                            }
                            var myfield = document.getElementById((i + 1) + column);
                            console.log(myfield.dataset);
                            myfield.classList.add(turn1);
                        }
                    }
                    textColor();
                    round++;
                }



            }

        }
    if (round >= 82) {
 
        let xpoints = 0;
        let opoints = 0;


        let header = document.querySelector("h2");
        header.innerText = "1SCORE: " + xscore + " 2SCORE: " + oscore;
        header.innerText = round;



        for (let i = 1; i < 4; i++) {

            for (let j = 1; j < 4; j++) {
                if (board[i][j] == 'fa-dragon') {
                    xpoints = xpoints + 1;
                }
                if (board[i][j] == 'fa-spider') {
                    opoints = opoints + 1;
                }
            }
        }
        if (xpoints > opoints) {
            xscore = xscore + 1;
            console.log("W sektorze wygrywa 1" + xpoints);
        }
        if (opoints > xpoints) {
            oscore = oscore + 1;
            console.log("W sektorze wygrywa 2" + opoints);
        }
        if (opoints == xpoints) {
            console.log("Remis" + opoints);
        }


        //2

        xpoints = 0;
        opoints = 0;

        for (let i = 1; i < 4; i++) {

            for (let j = 4; j < 7; j++) {
                if (board[i][j] == 'fa-dragon') {
                    xpoints = xpoints + 1;
                }
                if (board[i][j] == 'fa-spider') {
                    opoints = opoints + 1;
                }
            }
        }

        if (xpoints > opoints) {
            xscore = xscore + 1;
            console.log("W sektorze wygrywa 1" + xpoints);
        }
        if (opoints > xpoints) {
            oscore = oscore + 1;
            console.log("W sektorze wygrywa 2" + opoints);
        }
        if (opoints == xpoints) {
            console.log("Remis" + opoints);
        }

        //3
        xpoints = 0;
        opoints = 0;

        for (let i = 1; i < 4; i++) {

            for (let j = 7; j < 10; j++) {
                if (board[i][j] == 'fa-dragon') {
                    xpoints = xpoints + 1;
                }
                if (board[i][j] == 'fa-spider') {
                    opoints = opoints + 1;
                }
            }
        }

        if (xpoints > opoints) {
            xscore = xscore + 1;
            console.log("W sektorze wygrywa 1" + xpoints);
        }
        if (opoints > xpoints) {
            oscore = oscore + 1;
            console.log("W sektorze wygrywa 2" + opoints);
        }
        if (opoints == xpoints) {
            console.log("Remis" + opoints);
        }

        //4

        xpoints = 0;
        opoints = 0;

        for (let i = 4; i < 7; i++) {

            for (let j = 1; j < 4; j++) {
                if (board[i][j] == 'fa-dragon') {
                    xpoints = xpoints + 1;
                }
                if (board[i][j] == 'fa-spider') {
                    opoints = opoints + 1;
                }
            }
        }

        if (xpoints > opoints) {
            xscore = xscore + 1;
            console.log("W sektorze wygrywa 1" + xpoints);
        }
        if (opoints > xpoints) {
            oscore = oscore + 1;
            console.log("W sektorze wygrywa 2" + opoints);
        }
        if (opoints == xpoints) {
            console.log("Remis" + opoints);
        }

        //5

        xpoints = 0;
        opoints = 0;

        for (let i = 4; i < 7; i++) {

            for (let j = 4; j < 7; j++) {
                if (board[i][j] == 'fa-dragon') {
                    xpoints = xpoints + 1;
                }
                if (board[i][j] == 'fa-spider') {
                    opoints = opoints + 1;
                }
            }
        }

        if (xpoints > opoints) {
            xscore = xscore + 1;
            console.log("W sektorze wygrywa 1" + xpoints);
        }
        if (opoints > xpoints) {
            oscore = oscore + 1;
            console.log("W sektorze wygrywa 2" + opoints);
        }
        if (opoints == xpoints) {
            console.log("Remis" + opoints);
        }

        //6

        xpoints = 0;
        opoints = 0;

        for (let i = 4; i < 7; i++) {

            for (let j = 7; j < 10; j++) {
                if (board[i][j] == 'fa-dragon') {
                    xpoints = xpoints + 1;
                }
                if (board[i][j] == 'fa-spider') {
                    opoints = opoints + 1;
                }
            }
        }

        if (xpoints > opoints) {
            xscore = xscore + 1;
            console.log("W sektorze wygrywa 1" + xpoints);
        }
        if (opoints > xpoints) {
            oscore = oscore + 1;
            console.log("W sektorze wygrywa 2" + opoints);
        }
        if (opoints == xpoints) {
            console.log("Remis" + opoints);
        }

        //7

        xpoints = 0;
        opoints = 0;

        for (let i = 7; i < 10; i++) {

            for (let j = 1; j < 4; j++) {
                if (board[i][j] == 'fa-dragon') {
                    xpoints = xpoints + 1;
                }
                if (board[i][j] == 'fa-spider') {
                    opoints = opoints + 1;
                }
            }
        }

        if (xpoints > opoints) {
            xscore = xscore + 1;
            console.log("W sektorze wygrywa 1" + xpoints);
        }
        if (opoints > xpoints) {
            oscore = oscore + 1;
            console.log("W sektorze wygrywa 2" + opoints);
        }
        if (opoints == xpoints) {
            console.log("Remis" + opoints);
        }

        //8

        xpoints = 0;
        opoints = 0;

        for (let i = 7; i < 10; i++) {

            for (let j = 4; j < 7; j++) {
                if (board[i][j] == 'fa-dragon') {
                    xpoints = xpoints + 1;
                }
                if (board[i][j] == 'fa-spider') {
                    opoints = opoints + 1;
                }
            }
        }

        if (xpoints > opoints) {
            xscore = xscore + 1;
            console.log("W sektorze wygrywa 1" + xpoints);
        }
        if (opoints > xpoints) {
            oscore = oscore + 1;
            console.log("W sektorze wygrywa 2" + opoints);
        }
        if (opoints == xpoints) {
            console.log("Remis" + opoints);
        }

        //9

        xpoints = 0;
        opoints = 0;

        for (let i = 7; i < 10; i++) {

            for (let j = 7; j < 10; j++) {

                if (board[i][j] == 'fa-dragon') {
                    xpoints = xpoints + 1;

                }
                if (board[i][j] == 'fa-spider') {
                    opoints = opoints + 1;
                }
            }
        }

        if (xpoints > opoints) {
            xscore = xscore + 1;
            console.log("W sektorze wygrywa 1" + xpoints);
        }
        if (opoints > xpoints) {
            oscore = oscore + 1;
            console.log("W sektorze wygrywa 2" + opoints);
        }
        if (opoints == xpoints) {
            console.log("Remis" + opoints);
        }


        if (xscore > oscore) {
            header = document.querySelector("h2");
            header.innerText = "Dragons WINS!";
        }

        if (oscore > xscore) {
            header = document.querySelector("h2");
            header.innerText = "Spiders WINS!";
        }

        if (oscore == xscore) {
            header = document.querySelector("h2");
            header.innerText = "Spiders WINS!";
        }


        header = document.querySelector("h3");
        header.innerText = "Sectors conquered by Dragons: " + xscore + "     ||    Sectors conquered by Spiders: " + oscore;
        round++;
    }
    function textColor() {
        if (round % 2 === 0) {
            var element2 = document.getElementById("dragons");
            var element = document.getElementById("spiders");
            element.style.color = "green";
            element2.style.color = "lightgrey";
        }
        else {
            var element = document.getElementById("spiders");
            var element2 = document.getElementById("dragons");
            element2.style.color = "red";
            element.style.color = "lightgrey";
        }

    }

}
}
