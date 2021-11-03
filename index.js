var p1Score = 0;
var p2Score = 0;
var tie = 0;
var turn = 1;
var plTurn = 1;

function checkWin(){
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
        p1Score = p1Score + 1;
        $("#p1-score").text(p1Score);
        console.log("Working");
    }
    else if($(".row-1 .box.O").length === 3 
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
        p2Score = p2Score + 1;
        $("#p2-score").text(p2Score);
        console.log("Working")
    }
    else if(turn === 10){
        tie = tie + 1;
        $("#tie").text(tie);
    }
}



$(".box").click(function(){
    if(turn % 2 === 1 ){
        $(this).text("X");
        $(this).addClass("X");
        turn = turn + 1;
        $("#turn").text(turn);
        plTurn = 2;
        $("#pl-turn").text(2);
        checkWin();
    }
    else {
        $(this).text("O");
        $(this).addClass("O");
        turn = turn + 1;
        $("#turn").text(turn);
        plTurn = 1
        $("#pl-turn").text(1);
        checkWin();
    }
});