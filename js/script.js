var pipe1_hg;
var hole1_hg;
var pipe2_hg;
let sound_die = new Audio('die sound.mp3')
let sound_point = new Audio('point sound.mp3')

setInterval(() => {
    pipe1_hg=Math.floor(Math.random()*10)+30;
    hole1_hg=Math.floor(Math.random()*20)+20;
    document.getElementById("pipe1").style.height=pipe1_hg+"%";
    document.getElementById("pipe2").style.top=pipe1_hg+hole1_hg+"%";
    document.getElementById("pipe2").style.height=100-(pipe1_hg+hole1_hg)+"%";

}, 4000);
var elem=document.getElementById("bird");

//gravity functionality
setInterval(() => {
    var x=parseInt(window.getComputedStyle(elem).getPropertyValue("top"));
    if(x<=510 && x>=5){
        elem.style.top=(x+3)+"px";
    }
    else{
        sound_die.play();
        alert("You Lost !! your score is: "+score);
        elem.style.top=100+"px";
        window.location.reload();
    }
}, 30);


//fly functionality
function jump(){
    var fly=parseInt(window.getComputedStyle(elem).getPropertyValue("top"));
    if(fly>=14){
        elem.style.top=(fly-40)+"px";
    }
}
document.addEventListener('keyup', event =>{
    if(event.code==='Space'){
        jump();
    }
})

//score functionality
var score=0;
setInterval(() => {
 score++;
 document.getElementById("scr").innerHTML=score;
 if(score%20==0)
 {
    sound_point.play();
 }
}, 500);


//obstacle functionality
function checkcollision(elm1,elm2){
    var elm1Rect=elm1.getBoundingClientRect();
    var elm2Rect=elm2.getBoundingClientRect();
    
    return(elm1Rect.right >= elm2Rect.left && 
        elm1Rect.left <= elm2Rect.right) && 
        (elm1Rect.bottom>=elm2Rect.top && 
            elm1Rect.top<=elm2Rect.bottom);
}
setInterval(() => {
    if(checkcollision(document.getElementById("bird"),document.getElementById("pipe1"))){
        elem.style.top=513+"px";
        setTimeout(() => {
            sound_die.play();
            alert("You Lost !! Your Score is: "+score);
            return;
        }, 10);
        window.location.reload();
    }
    else if(checkcollision(document.getElementById("bird"),document.getElementById("pipe2"))){
        elem.style.top=513+"px";
        setTimeout(() => {
            sound_die.play();
            alert("You Lost!! Your Score is: "+score);
            return;
        }, 10);
        window.location.reload();
    }
}, 100);
