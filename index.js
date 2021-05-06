var arr = new Array();
var userArr = new Array();

var started = false;
var level = 0;

$(document).keypress(function() {
    if (!started) {
      $("#level-title").text("Level " + level);
      gameBegin();
      started = true;
    }
  });

$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    userArr.push(userChosenColour);
    getSounds(userChosenColour);
    checkArray(userArr.length-1);
  });

function getSounds(id){
    switch(id){
        case 'green' :
            var green = new Audio("sounds/green.mp3");
            green.play();
            $("#green").addClass("pressed");
            setTimeout(function(){
                $("#green").removeClass("pressed");
            },200);
            break;
        case 'yellow' :
            var yellow = new Audio("sounds/yellow.mp3");
            yellow.play();
            $("#yellow").addClass("pressed");
            setTimeout(function(){
                $("#yellow").removeClass("pressed");
            },200);
            break;
        case 'red' :
            var red = new Audio("sounds/red.mp3");
            red.play();
            $("#red").addClass("pressed");
            setTimeout(function(){
                $("#red").removeClass("pressed");
            },200);
            break;
        case 'blue' :
            var blue = new Audio("sounds/blue.mp3");
            blue.play();
            $("#blue").addClass("pressed");
            setTimeout(function(){
                $("#blue").removeClass("pressed");
            },200);
            break;
        case 'wrong' :
            var wrong = new Audio("sounds/wrong.mp3");
            wrong.play();

        default :
            console.log(id);
    }
}

function randomNumber(){
    var randomNumberChosen = Math.floor(Math.random() * 4) + 1;
    var colorChosen = randomColor(randomNumberChosen);
    return colorChosen;

}

function randomColor(number){
    if(number === 1){
        return "green";
    }else if(number == 2){
        return "red";
    }else if(number == 3){
        return "yellow";
    }else{
        return "blue";
    }
}



function gameBegin(){
    userArr = [];
    $("#level-title").text("Level " + level);
    var color = randomNumber();
    arr.push(color);
    getSounds(color);
    level++;

     
}
function checkArray(length){
    if (arr[length] === userArr[length]) {
        if (userArr.length === arr.length){
          setTimeout(function () {
            gameBegin()
          }, 1000);
        }
      } else {
        getSounds("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");
  
        setTimeout(function () {
          $("body").removeClass("game-over");
        }, 200);
  
        startOver();
      }
}

function startOver() {
    level = 0;
    arr = [];
    started = false;
  }

