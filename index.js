var ran1 = Math.floor(Math.random()*6)+1;
var loc = "dice" + ran1 + ".png" ;
document.querySelectorAll("img")[0].setAttribute("src", loc);

var ran2 = Math.floor(Math.random()*6)+1;
var loc1 = "dice" + ran2 + ".png" ;
document.querySelectorAll("img")[1].setAttribute("src", loc1);

if(ran1>ran2)
{
    document.querySelector("h1").innerHTML="🚩Player 1 won!!! ";
}
if(ran1<ran2)
{
    document.querySelector("h1").innerHTML="Player 2 won🚩!!! ";
}
if(ran1===ran2)
{
    document.querySelector("h1").innerHTML="It was a tie!!! ";
}
