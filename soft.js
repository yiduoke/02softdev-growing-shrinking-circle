var c = document.getElementById('canvas');
var stop = document.getElementById('stop');
var circle = document.getElementById('circle');
var dvd = document.getElementById('dvd');
var ctx = c.getContext('2d');
var requestID;

var option; //-1 is circle, 1 is DVD
var x_velocity = Math.floor(Math.random() * 5)-10;
var y_velocity = Math.floor(Math.random() * 5)-10;
var x_pos = 250;
var y_pos = 250;
var radius = 0;
var growing = 1;

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
    else if (option == 1){
        ctx.clearRect(0, 0, 500, 500);
        ctx.beginPath();
        if (x_pos <= 20 || x_pos >= 480){
            x_velocity *= -1;
        }
        if (y_pos <= 20 || y_pos >= 480){
            y_velocity *= -1;
        }

        x_pos += x_velocity;
        y_pos += y_velocity;
        ctx.arc(x_pos, y_pos, radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();  
    }

    requestID = window.requestAnimationFrame( draw );
    console.log(requestID);
}

var circleAnimation = function(){
    // window.cancelAnimationFrame( requestID );
    stopit();
    option = -1;
    radius = 0;
    growing = 1;

    draw();
}

var dvdAnimation = function(){
    // window.cancelAnimationFrame(requestID);
    stopit();
    radius = 20;
    option = 1;
    draw();
}

var stopit = function(){
    window.cancelAnimationFrame(requestID);
    x_velocity = Math.floor(Math.random() * 5)-10;
    y_velocity = Math.floor(Math.random() * 5)-10;
    x_pos = 250;
    y_pos = 250;
}

window.requestAnimationFrame( draw );

circle.addEventListener("click", circleAnimation);
dvd.addEventListener("click", dvdAnimation);
stop.addEventListener("click", stopit);