var arr = [ "red" , "blue", "yellow" ,"green"];
var gameSequence = [];
var level = 1;
var userChosenSequence =[];

// game starts with keypress 

$(document).keypress(function() {
    nextSequence();
    }); 

function nextSequence() {
    userChosenSequence = [];
    $("h1#level-title").text("Level " + level)
    level++; 
    var n = Math.floor(4*(Math.random()));
    var randomChosenColour = arr[n];
    gameSequence.push(randomChosenColour); 
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
   var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
   audio.play(); 

} 
    function checkAnswer(currentLevel){ 
        
         if(userChosenSequence[currentLevel]===gameSequence[currentLevel])
         {  
            if( userChosenSequence.length===gameSequence.length)
            {  
                setTimeout( function() { nextSequence() },1000);
            }
        }
        else 
        {
                playsound("wrong");
                animateButton(userChosenSequence[currentLevel]);
                $("h1").text("game over try again, press any key to restart");
                alert("hi");
                startover();
        }
        
    
      
    }

    $(".btn").click(function() { 
        var userChosenColour = $(this).attr("id");
        userChosenSequence.push(userChosenColour);
        animateButton(userChosenColour);
        playsound(userChosenColour);
        //alert("hi");
        checkAnswer((userChosenSequence.length)-1);
    });

    function animateButton(colour) {
        $("#" + colour).fadeIn(100).fadeOut(100).fadeIn(100);
    }

    function playsound(colour) {
        var audio1= new Audio("sounds/" + colour + ".mp3");
        audio1.play();
    }
   function startover()
   {   alert("hi");
    gameSequence = [];
    level = 1;
     userChosenSequence =[];
   }
    
   
  
 