var c = document.getElementById('canvas');
var stop = document.getElementById('stop');
var circle = document.getElementById('circle');
var dvd = document.getElementById('dvd');
var ctx = c.getContext('2d');
var requestID;
var radius = 0;
var growing = 1;
var option; //-1 is circle, 1 is DVD

var draw = function(){
    if (option == -1){
        ctx.clearRect(0, 0, 500, 500);
        ctx.beginPath();
        ctx.arc(250, 250, radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
    
        if (radius == 250){
            growing = 0;
        }
        else if (radius == 0){
            growing = 1;
        }
        if (growing == 1){
            radius++;
        }
        else{
            radius--;
        }
    }

    requestID = window.requestAnimationFrame( draw );
    console.log(requestID);
}

var circleAnimation = function(){
    option = -1;
    radius = 0;
    growing = 1;
}

var dvdAnimation = function(){
    option = 1;
}

var stopit = function(){
    window.cancelAnimationFrame(requestID);
}

window.requestAnimationFrame( draw );

circle.addEventListener("click", circleAnimation);
dvd.addEventListener("click", dvdAnimation);
stop.addEventListener("click", stopit);