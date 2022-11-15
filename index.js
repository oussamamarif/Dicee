
function clickbody(){
    var randomNumber1 = Math.random();
var randomNumber2 = Math.random();
randomNumber1 = (randomNumber1 * 6) + 1 ;
randomNumber2 = (randomNumber2 * 6) + 1 ;
var random1 =Math.floor(randomNumber1);
var random2 = Math.floor(randomNumber2);

document.getElementsByClassName("img1")[0].setAttribute("src"
,"images/dice"+random1+".png");
document.getElementsByClassName("img2")[0].setAttribute("src"
,"images/dice"+random2+".png");

if( random1 > random2){
    document.querySelector("h1").innerHTML = " player 1 wins !"
    
}
else if( random2 > random1 ){
    document.querySelector("h1").innerHTML = " player 2 wins !"
}else{
    document.querySelector("h1").innerHTML = " DRAW !"
    
}

}

