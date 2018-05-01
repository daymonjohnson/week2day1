var playerHealth= 40;
var grantTheAlmightyHealth= 10;
var grantTheAlmightyLives=3;

var warrior= prompt("name your warrior")

while(playerHealth>0&&grantTheAlmightyHealth>0){
  var Number= prompt("To attack pick a number between 1000 and 1050");
  if(Number%3>0){
    playerHealth=playerHealth-(Math.floor(Math.random() * 2) +1);;
    console.log( warrior+"'s health is"+playerHealth);
  }
  else{
    grantTheAlmightyHealth=grantTheAlmightyHealth-2;
    console.log("grantthealmightys health is "+grantTheAlmightyHealth);
  }
}
if(playerHealth<1){
    console.log("Mission failed");
}
else{
    grantTheAlmightyHealth=grantTheAlmightyHealth+10;
    grantTheAlmightyLives=grantTheAlmightyLives-1;
    console.log("Grantthealmighty has 2 lives left")
}
while(playerHealth>0&&grantTheAlmightyHealth>0){
    var Number= prompt("To attack pick a number between 1000 and 1050");
    if(Number%3>0){
      playerHealth=playerHealth-(Math.floor(Math.random() * 2) +1);;
      console.log( warrior+"'s health is"+playerHealth);
    }
    else{
      grantTheAlmightyHealth=grantTheAlmightyHealth-2;
      console.log("grants health is "+grantTheAlmightyHealth);
    }
}
if(playerHealth<1){
    console.log("Mission failed");
}
else{
    grantTheAlmightyHealth=grantTheAlmightyHealth+10;
    grantTheAlmightyLives=grantTheAlmightyLives-1;
    console.log("Grant has 1 life left")
}
while(playerHealth>0&&grantTheAlmightyHealth>0){
    var Number= prompt("To attack pick a number between 1000 and 1050");
    if(Number%3>0){
      playerHealth=playerHealth-(Math.floor(Math.random() * 2) +1);;
      console.log( warrior+"'s health is"+playerHealth);
    }
    else{
      grantTheAlmightyHealth=grantTheAlmightyHealth-2;
      console.log("grants health is "+grantTheAlmightyHealth);
    }
}
if(playerHealth<1){
    console.log("Mission failed")
}
else{
    console.log("You win!!!")
}
