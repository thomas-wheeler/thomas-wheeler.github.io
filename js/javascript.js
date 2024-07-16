class Player
{
    constructor(firstRoundScore,SecondRoundScore,thirdRoundScore)
    {
        this.firstRoundScore = firstRoundScore;
        this.SecondRoundScore = SecondRoundScore;
        this.thirdRoundScore = thirdRoundScore;
    }
}

Player.prototype.calculateFinalScore = function()
{
    finalScore = parseInt(this.firstRoundScore) + parseInt(this.SecondRoundScore) + parseInt(this.thirdRoundScore);
    return finalScore;
}

animationFrameHandler = "";
currentImage1 = 1;
currentImage2 = 1;

function firstRoll()
{
    player1round1score = "";

    if ( currentImage1 == 1 || currentImage2 == 1)
    {
        player1round1score = 0;
    }
    else if (currentImage1 == currentImage2)
    {
        player1round1score = (currentImage1 + currentImage2) * 2;
    }
    else
    {
        player1round1score = currentImage1 + currentImage2;
    }

    $("#player1-roll1-dice1").attr("src",`images/dice-${currentImage1}.png`);
    $("#player1-roll1-dice1").attr("alt",`dice-${currentImage1}`);
    $("#player1-roll1-dice2").attr("src",`images/dice-${currentImage2}.png`);
    $("#player1-roll1-dice2").attr("alt",`dice-${currentImage2}`);

    currentImage1 = Math.floor(Math.random()*6) + 1
    currentImage2 = Math.floor(Math.random()*6) + 1

    animationFrameHandler = requestAnimationFrame(firstRoll);
}

$("#start-first-roll").click(function()
{
    $("#player1-roll1-dice1").css("display","inline");
    $("#player1-roll1-dice2").css("display","inline");
    $("#start-first-roll").css("display","none");
    $("#stop-first-roll").css("display","inline");

    animationFrameHandler = requestAnimationFrame(firstRoll);
    clearTimeout(timeOut);
});

$("#stop-first-roll").click(function()
{
    $("#player1-total-score").css("display","block");
    $("#player2-total-score").css("display","block");
    $("#stop-first-roll").css("display","none");
    $("#player2-first-roll").css("display","block");
    $("#player1-second-roll").css("display","block");
    $("#start-second-roll").css("display","block");

    currentImage1 = Math.floor(Math.random()*6) + 1
    currentImage2 = Math.floor(Math.random()*6) + 1
    $("#player2-roll1-dice1").attr("src",`images/dice-${currentImage1}.png`);
    $("#player2-roll1-dice1").attr("alt",`dice-${currentImage1}`);
    $("#player2-roll1-dice2").attr("src",`images/dice-${currentImage2}.png`);
    $("#player2-roll1-dice2").attr("alt",`dice-${currentImage2}`);
    $("#player2-roll1-dice1").css("display","inline");
    $("#player2-roll1-dice2").css("display","inline");

    player2round1score = "";

    if ( currentImage1 == 1 || currentImage2 == 1)
    {
        player2round1score = 0;
    }
    else if (currentImage1 == currentImage2)
    {
        player2round1score = (currentImage1 + currentImage2) * 2;
    }
    else
    {
        player2round1score = currentImage1 + currentImage2;
    }

    cancelAnimationFrame(animationFrameHandler);

    $("#player1-first-roll").append(`: ${player1round1score}`)
    $("#player2-first-roll").append(`: ${player2round1score}`)
    $("#player1-total-score").html(`Total Score: ${player1round1score}`);
    $("#player2-total-score").html(`Total Score: ${player2round1score}`);

});

function secondRoll()
{
    player1round2score = "";

    if ( currentImage1 == 1 || currentImage2 == 1)
    {
        player1round2score = 0;
    }
    else if (currentImage1 == currentImage2)
    {
        player1round2score = (currentImage1 + currentImage2) * 2;
    }
    else
    {
        player1round2score = currentImage1 + currentImage2;
    }

    $("#player1-roll2-dice1").attr("src",`images/dice-${currentImage1}.png`);
    $("#player1-roll2-dice1").attr("alt",`dice-${currentImage1}`);
    $("#player1-roll2-dice2").attr("src",`images/dice-${currentImage2}.png`);
    $("#player1-roll2-dice2").attr("alt",`dice-${currentImage2}`);

    currentImage1 = Math.floor(Math.random()*6) + 1
    currentImage2 = Math.floor(Math.random()*6) + 1

    animationFrameHandler = requestAnimationFrame(secondRoll);
}

$("#start-second-roll").click(function()
{
    $("#player1-roll2-dice1").css("display","inline");
    $("#player1-roll2-dice2").css("display","inline");
    $("#start-second-roll").css("display","none");
    $("#stop-second-roll").css("display","inline");

    animationFrameHandler = requestAnimationFrame(secondRoll);
    clearTimeout(timeOut);
});

$("#stop-second-roll").click(function()
{
    $("#stop-second-roll").css("display","none");
    $("#player2-second-roll").css("display","block");
    $("#player1-third-roll").css("display","block");
    $("#start-third-roll").css("display","block");

    currentImage1 = Math.floor(Math.random()*6) + 1
    currentImage2 = Math.floor(Math.random()*6) + 1
    $("#player2-roll2-dice1").attr("src",`images/dice-${currentImage1}.png`);
    $("#player2-roll2-dice1").attr("alt",`dice-${currentImage1}`);
    $("#player2-roll2-dice2").attr("src",`images/dice-${currentImage2}.png`);
    $("#player2-roll2-dice2").attr("alt",`dice-${currentImage2}`);
    $("#player2-roll2-dice1").css("display","inline");
    $("#player2-roll2-dice2").css("display","inline");

    player2round2score = "";

    if ( currentImage1 == 1 || currentImage2 == 1)
    {
        player2round2score = 0;
    }
    else if (currentImage1 == currentImage2)
    {
        player2round2score = (currentImage1 + currentImage2) * 2;
    }
    else
    {
        player2round2score = currentImage1 + currentImage2;
    }

    cancelAnimationFrame(animationFrameHandler);

    $("#player1-second-roll").append(`: ${player1round2score}`)
    $("#player2-second-roll").append(`: ${player2round2score}`)
    $("#player1-total-score").html(`Total Score: ${player1round1score+player1round2score}`);
    $("#player2-total-score").html(`Total Score: ${player2round1score+player2round2score}`);

});

function thirdRoll()
{
    player1round3score = "";

    if ( currentImage1 == 1 || currentImage2 == 1)
    {
        player1round3score = 0;
    }
    else if (currentImage1 == currentImage2)
    {
        player1round3score = (currentImage1 + currentImage2) * 2;
    }
    else
    {
        player1round3score = currentImage1 + currentImage2;
    }

    $("#player1-roll3-dice1").attr("src",`images/dice-${currentImage1}.png`);
    $("#player1-roll3-dice1").attr("alt",`dice-${currentImage1}`);
    $("#player1-roll3-dice2").attr("src",`images/dice-${currentImage2}.png`);
    $("#player1-roll3-dice2").attr("alt",`dice-${currentImage2}`);

    currentImage1 = Math.floor(Math.random()*6) + 1
    currentImage2 = Math.floor(Math.random()*6) + 1

    animationFrameHandler = requestAnimationFrame(thirdRoll);
}

$("#start-third-roll").click(function()
{
    $("#player1-roll3-dice1").css("display","inline");
    $("#player1-roll3-dice2").css("display","inline");
    $("#start-third-roll").css("display","none");
    $("#stop-third-roll").css("display","inline");

    animationFrameHandler = requestAnimationFrame(thirdRoll);
    clearTimeout(timeOut);
});

$("#stop-third-roll").click(function()
{
    $("#stop-third-roll").css("display","none");
    $("#player2-third-roll").css("display","block");

    currentImage1 = Math.floor(Math.random()*6) + 1
    currentImage2 = Math.floor(Math.random()*6) + 1
    $("#player2-roll3-dice1").attr("src",`images/dice-${currentImage1}.png`);
    $("#player2-roll3-dice1").attr("alt",`dice-${currentImage1}`);
    $("#player2-roll3-dice2").attr("src",`images/dice-${currentImage2}.png`);
    $("#player2-roll3-dice2").attr("alt",`dice-${currentImage2}`);
    $("#player2-roll3-dice1").css("display","inline");
    $("#player2-roll3-dice2").css("display","inline");

    player2round3score = "";

    if ( currentImage1 == 1 || currentImage2 == 1)
    {
        player2round3score = 0;
    }
    else if (currentImage1 == currentImage2)
    {
        player2round3score = (currentImage1 + currentImage2) * 2;
    }
    else
    {
        player2round3score = currentImage1 + currentImage2;
    }

    cancelAnimationFrame(animationFrameHandler);

    $("#player1-third-roll").append(`: ${player1round3score}`);
    $("#player2-third-roll").append(`: ${player2round3score}`);

    player1 = new Player(player1round1score, player1round2score, player1round3score);
    player2 = new Player(player2round1score, player2round2score, player2round3score);

    $("#player1-total-score").html(`Final Score: ${player1.calculateFinalScore()}`);
    $("#player2-total-score").html(`Final Score: ${player2.calculateFinalScore()}`);

    if (player1.calculateFinalScore() == player2.calculateFinalScore())
    {
        $("#result").html("It's a tie!");
    }
    else if (player1.calculateFinalScore() > player2.calculateFinalScore())
    {
        $("#result").html("Player 1 wins!");
    }
    else
    {
        $("#result").html("Player 2 wins!");
    }

    $("#result").css("display","block");
    $("#results-box").css("display","block");
    $("#play-again").css("display","block");

});

$("#play-again").click(function()
{
    window.location.reload();
});
