//set vars
// var x = document.getElementsByClassName('box');
var player = document.getElementById('playerTurn');
var reset = document.getElementById('reset');

//var to see which player plays
var xturn=true;

//dumb way of creating the vars
var box0 = document.getElementById('0');
var box1 = document.getElementById('1');
var box2 = document.getElementById('2');
var box3 = document.getElementById('3');
var box4 = document.getElementById('4');
var box5 = document.getElementById('5');
var box6 = document.getElementById('6');
var box7 = document.getElementById('7');
var box8 = document.getElementById('8');


//
// for (var i = 0; i < 9; i++) {       //create var for box ids with FOR loop
//   var boxi = document.getElementById('i');
//    console.log(box);
//  }
// console.log(x,xturn);

// for (var i = 0; i < x.length; i++) {
//   x[i].addEventListener('click',function(event) {
//     if (xturn===true) {
//       x[i].innerHTML = "X";
//       xturn=false;
//       console.log("X MARK");
//     }else {
//       x[i].innerHTML = "O";
//       xturn=true;
//       console.log("Y MARK");
//     }
//   });
// }

// //create the function for applying the mark
// function MARK() {
//   if (xturn===true) {
//         box0.innerHTML = "X";
//         xturn=false;
//         console.log("X MARK");
//       }else {
//         box0.innerHTML = "O";
//         xturn=true;
//         console.log("Y MARK");
//       }
// }

//Need to try to create functions for many things here

//DUMB way to MARK the boxes
box0.addEventListener('click', function(event) {   //click event
  if (xturn===true) {         //check who is playing
        box0.innerHTML = "X";    //write the MARK
        xturn=false;           //switch player
        console.log("X MARK");  //check
        player.innerHTML = "It is O's turn";  //display the player turn
      }else {
        box0.innerHTML = "O";
        xturn=true;
        console.log("Y MARK");
        player.innerHTML = "It is X's turn";
      }

    });
box1.addEventListener('click',function(event) {
  if (xturn===true) {
        box1.innerHTML = "X";
        xturn=false;
        console.log("X MARK");
        player.innerHTML = "It is O's turn";
    }else {
        box2.innerHTML = "O";
        xturn=true;
        console.log("Y MARK");
        player.innerHTML = "It is X's turn";
            }
    });

box2.addEventListener('click',function(event) {
    if (xturn===true) {
        box2.innerHTML = "X";
        xturn=false;
          console.log("X MARK");
        player.innerHTML = "It is O's turn";
      }else {
        box2.innerHTML = "O";
        xturn=true;
          console.log("Y MARK");
        player.innerHTML = "It is X's turn";
          }
    });
box3.addEventListener('click',function(event) {
    if (xturn===true) {
        box3.innerHTML = "X";
        xturn=false;
          console.log("X MARK");
        player.innerHTML = "It is O's turn";
      }else {
        box3.innerHTML = "O";
        xturn=true;
          console.log("Y MARK");
        player.innerHTML = "It is X's turn";
          }
    });
box4.addEventListener('click',function(event) {
    if (xturn===true) {
        box4.innerHTML = "X";
        xturn=false;
          console.log("X MARK");
        player.innerHTML = "It is O's turn";
      }else {
        box4.innerHTML = "O";
        xturn=true;
          console.log("Y MARK");
        player.innerHTML = "It is X's turn";
        }
    });

box5.addEventListener('click',function(event) {
    if (xturn===true) {
        box5.innerHTML = "X";
        xturn=false;
          console.log("X MARK");
        player.innerHTML = "It is O's turn";
      }else {
        box5.innerHTML = "O";
        xturn=true;
          console.log("Y MARK");
        player.innerHTML = "It is X's turn";
        }
    });
box6.addEventListener('click',function(event) {
    if (xturn===true) {
        box6.innerHTML = "X";
        xturn=false;
          console.log("X MARK");
        player.innerHTML = "It is O's turn";
      }else {
        box6.innerHTML = "O";
        xturn=true;
          console.log("Y MARK");
        player.innerHTML = "It is X's turn";
        }
    });
box7.addEventListener('click',function(event) {
    if (xturn===true) {
        box7.innerHTML = "X";
        xturn=false;
          console.log("X MARK");
        player.innerHTML = "It is O's turn";
        }else {
        box7.innerHTML = "O";
        xturn=true;
          console.log("Y MARK");
        player.innerHTML = "It is X's turn";
        }
    });
box8.addEventListener('click',function(event) {
    if (xturn===true) {
        box8.innerHTML = "X";
        xturn=false;
          console.log("X MARK");
        player.innerHTML = "It is O's turn";
      }else {
        box8.innerHTML = "O";
        xturn=true;
          console.log("Y MARK");
        player.innerHTML = "It is X's turn";
          }
    });

//reset the board action
reset.addEventListener('click',function(event) {
    box0.innerHTML = "";
    box1.innerHTML = "";
    box2.innerHTML = "";
    box3.innerHTML = "";
    box4.innerHTML = "";
    box5.innerHTML = "";
    box6.innerHTML = "";
    box7.innerHTML = "";
    box8.innerHTML = "";
})

//Check for winning conditions
//still dumb code
if ((box0==="X" && box1==="X" && box2==="X") ||
  (box0==="X" && box3==="X" && box6==="X") ||
  (box0==="X" && box4==="X" && box8==="X") ||
  (box1==="X" && box4==="X" && box7==="X") ||
  (box2==="X" && box5==="X" && box8==="X") ||
  (box3==="X" && box4==="X" && box5==="X") ||
  (box6==="X" && box7==="X" && box8==="X")) {
  alert("PLAYER X WON. WELL DONE!");
  console.log("check x win");
} else if ((box0==="Y" && box1==="Y" && box2==="Y") ||
  (box0==="Y" && box3==="Y" && box6==="Y") ||
  (box0==="Y" && box4==="Y" && box8==="Y") ||
  (box1==="Y" && box4==="Y" && box7==="Y") ||
  (box2==="Y" && box5==="Y" && box8==="Y") ||
  (box3==="Y" && box4==="Y" && box5==="Y") ||
  (box6==="Y" && box7==="Y" && box8==="Y")) {
  alert("PLAYER Y you have WON. WELL DONE!");
// } else if (box0!=="" && box1!=="" && box2!==""
//   && box3!=="" && box4!=="" && box5!=="" &&
//   box6!=="" && box7!=="" && box8!=="") {
//     alert("SAD FACE :'( It is a DRAW");
// }

//other idea for checking win conditions is to create an array for each player's moves
//when this array reaches specific values then theh conditions are met and the message
//is shown
//e.g arrayX=[0,1,2]=WIN!
