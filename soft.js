var c = document.getElementById('canvas');
var ctx = c.getContext('2d');
var requestID;
var radius = 0;
var growing = 1;

var draw = function(){

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

    requestID = window.requestAnimationFrame( draw );
    console.log(requestID);
}

var restart = function(){
    radius = 0;
    growing = 1;
}

window.requestAnimationFrame( draw );

c.addEventListener("click", restart);