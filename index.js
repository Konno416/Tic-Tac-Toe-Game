var p1Score = 0;
var p2Score = 0;
var tie = 0;
var turn = 1;
var plTurn = 1;

function checkWinX(){
    if($(".row-1 .box.X").length === 3 
    || $(".row-2 .box.X").length === 3 
    || $(".row-3 .box.X").length === 3
    || $(".col-1.X").length === 3
    || $(".col-2.X").length === 3
    || $(".col-3.X").length === 3
    || $("#1").hasClass("X")
    &&$("#5").hasClass("X")
    &&$("#9").hasClass("X")
    || $("#3").hasClass("X")
    &&$("#5").hasClass("X")
    &&$("#7").hasClass("X")){
        return true
    }
}


function checkWinO(){
    if($(".row-1 .box.O").length === 3 
    || $(".row-2 .box.O").length === 3 
    || $(".row-3 .box.O").length === 3
    || $(".col-1.O").length === 3
    || $(".col-2.O").length === 3
    || $(".col-3.O").length === 3
    || $("#1").hasClass("O")
        &&$("#5").hasClass("O")
        &&$("#9").hasClass("O")
    || $("#3").hasClass("O")
        &&$("#5").hasClass("O")
        &&$("#7").hasClass("O")){
            return true
    }
}

function checkTie(){
    if(checkWinX()===false && checkWinO===false && turn === 10){
        return true
    }
}

function clearBoard(){
    $(".X").empty();
    $(".X").removeClass("X");
    $(".O").empty();
    $(".O").removeClass("O");
    turn = 1;
}


$(".box").click(function(){
    if(turn % 2 === 1 ){
        $(this).text("X");
        $(this).addClass("X");
        turn++;
        $("#turn").text(turn);
        plTurn = 2;
        $("#pl-turn").text(2);
        if(checkWinX()){
            p1Score++;
            $("#p1-score").text(p1Score);
            clearBoard();
        }
        else if(checkWinO()){
            p2Score++;
            $("#p2-score").text(p2Score);
            clearBoard();
        }
        else if(checkTie()){
            tie++;
            $("#tie").text(tie);
            clearBoard();
        }
    }
    else {
        $(this).text("O");
        $(this).addClass("O");
        turn++;
        $("#turn").text(turn);
        plTurn = 1
        $("#pl-turn").text(1);
        if(checkWinX()){
            p1Score++;
            $("#p1-score").text(p1Score);
        }
        else if(checkWinO()){
            p2Score++;
            $("#p2-score").text(p2Score);
        }
        else if(checkTie()){
            tie++;
            $("#tie").text(tie);
        }
    }
});