document.addEventListener("DOMContentLoaded", () => {    
    const die1 = document.querySelector("#die1");
    const ctx1 = die1.getContext("2d");
    const die2 = document.querySelector("#die2");
    const ctx2 = die2.getContext("2d");
    const content = document.querySelector("#message");
    content.value = "Click either dice to get started!";
    // boolean to control win condition
    let firstRoll = true;
    // point variable for if came continues past first roll
    let point;

    // initial dice configuration
    draw1(ctx1);
    draw1(ctx2);

    function rollDice() {
    // force text area to scroll to bottom by default
    setTimeout(() => {
        content.scrollTop = content.scrollHeight;
    }, 0);

    // clear out the canvas
    ctx1.clearRect(0, 0, ctx1.canvas.width, ctx1.canvas.height);
    ctx2.clearRect(0, 0, ctx2.canvas.width, ctx2.canvas.height);

    // find a random number of pips and redraw the die
    let rand1 = 1 + Math.floor(Math.random() * 6);
    let rand2 = 1 + Math.floor(Math.random() * 6);
    // add randoms together to find point value
    let total = rand1 + rand2;

    switch (rand1) {
        case 1:
        draw1(ctx1);
        break;
        case 2:
        draw2(ctx1);
        break;
        case 3:
        draw1(ctx1);
        draw2(ctx1);
        break;
        case 4:
        draw4(ctx1);
        break;
        case 5:
        draw4(ctx1);
        draw1(ctx1);
        break;
        case 6:
        draw4(ctx1);
        draw2mid(ctx1);
        break;
    }

    switch (rand2) {
        case 1:
        draw1(ctx2);
        break;
        case 2:
        draw2(ctx2);
        break;
        case 3:
        draw1(ctx2);
        draw2(ctx2);
        break;
        case 4:
        draw4(ctx2);
        break;
        case 5:
        draw4(ctx2);
        draw1(ctx2);
        break;
        case 6:
        draw4(ctx2);
        draw2mid(ctx2);
        break;
    }

    // game logic
    if (firstRoll) {
        switch (total) {
        case 7:
        case 11:
            // content.append("You win!\n");
            content.value += "You win!\n";
            break;
        case 2:
            content.value += "Snake eyes! You lose!\n";
            break;
        case 3:
        case 12:
            content.value += "Craps! You lose!\n";
            break;
        default:
            // assign total to new point variable and prepare to roll again
            point = total;
            content.value +=
                "You rolled a " +
                point +
                ". If you roll another " +
                point +
                " then you win! If you roll a 7 you crap out.\n";
            firstRoll = false;
        }
    } else {
        switch (total) {
        case point:
            content.value += "You did it! You rolled another " + point + " and won!\n";
            firstRoll = true;
            break;
        case 7:
            content.value += "Crap! You rolled a 7(" + total + ") and lost!\n";
            content.value += "Let's roll again!\n";
            firstRoll = true;
            break;
        default:
            content.value += 
                "You didn't crap out! You just need to roll another " +
                point +
                " and you win!\n"
            ;
            firstRoll = false;
        }
    }
    }

    die1.addEventListener("click", rollDice);
    die2.addEventListener("click", rollDice);

    function draw1(x) {
    x.beginPath();
    x.arc(50, 50, 4, 0, 2 * Math.PI);
    x.fillStyle = "black";
    x.fill();
    x.stroke();
    }

    function draw2(x) {
    // first pip
    x.beginPath();
    x.arc(20, 20, 4, 0, 2 * Math.PI);
    x.fillStyle = "black";
    x.fill();
    x.stroke();

    // second pip
    x.beginPath();
    x.arc(80, 80, 4, 0, 2 * Math.PI);
    x.fillStyle = "black";
    x.fill();
    x.stroke();
    }

    // draw3 = draw1() + draw2()

    function draw4(x) {
    // first pip
    x.beginPath();
    x.arc(20, 20, 4, 0, 2 * Math.PI);
    x.fillStyle = "black";
    x.fill();
    x.stroke();

    // second pip
    x.beginPath();
    x.arc(80, 20, 4, 0, 2 * Math.PI);
    x.fillStyle = "black";
    x.fill();
    x.stroke();

    // third pip
    x.beginPath();
    x.arc(80, 80, 4, 0, 2 * Math.PI);
    x.fillStyle = "black";
    x.fill();
    x.stroke();

    // fourth pip
    x.beginPath();
    x.arc(20, 80, 4, 0, 2 * Math.PI);
    x.fillStyle = "black";
    x.fill();
    x.stroke();
    }

    // draw5 = draw4() + draw1()

    // middle 2 pips fill in 4 to make 6
    function draw2mid(x) {
    // left pip
    x.beginPath();
    x.arc(20, 50, 4, 0, 2 * Math.PI);
    x.fillStyle = "black";
    x.fill();
    x.stroke();

    // right pip
    x.beginPath();
    x.arc(80, 50, 4, 0, 2 * Math.PI);
    x.fillStyle = "black";
    x.fill();
    x.stroke();
    }
});

// Show/hide the rules div
// Set initial display style for the rules div
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("rules").style.display = "none";
});

document.getElementById("rulesLink").addEventListener("click", function(event) {
    event.preventDefault();
    let rulesDiv = document.getElementById("rules");
    if (rulesDiv.style.display === "none" || rulesDiv.style.display === "") {
        rulesDiv.style.display = "block";
    } else {
        rulesDiv.style.display = "none";
    }
});
