var bg = document.getElementById("particles-js");
document.addEventListener("keydown",function(event){
    bg.style.backgroundColor = getRandomColor();
    key = event.key;
    playMusic(key);
    console.log(event);
});
function playMusic(key){
    switch(key){
        case "d":
            var audio = new Audio("Kick1.wav");
            audio.play();
        break;
        case "c":
            var audio = new Audio("kick2.mp3");
            audio.play();
        break;
        case "a":
            var audio = new Audio("kick.mp3");
            audio.play();
        break;
        case "z":
            var audio = new Audio("Clap1.wav");
            audio.play();
        break;
    }
}
function getRandomColor(){
    var letters = "0123456789ABCDEF";
    var color= "#";
    for ( var i=0;i<6;i++){
        color = color + letters[Math.floor(Math.random()* 16)]
    }
    return color;
}