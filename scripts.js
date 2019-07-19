window.onload = function(){
    var stage = document.getElementById("stage")
    var ctx = stage.getContext("2d")
    document.addEventListener("keydown", keyPush)
    setInterval(game, 100)

    const velocity = 1
    var vx = 0
    var vy = 0
    var px = 10
    var py = 15
    var tp = 20
    var qp = 20
    var ax = 15
    var ay = 15

    var trail = [];
    tail = 5


    function game(){
        px += vx
        py += vy
        if(px < 0){
            px = qp - 1

        }
        if(px > qp - 1){
            px = 0

        }
        if(py < 0){
            py = qp - 1
        }
        if(py > qp -1){
            py = 0
        }

    ctx.fillStyle = "black"
    ctx.fillRect(0,0, stage.width, stage.height)
   
ctx.fillStyle = "green"
ctx.fillRect(ax*tp, ay*tp, tp, tp)

ctx.fillStyle = "gray"
for (var i = 0; i < trail.length; i++){
    ctx.fillRect(trail[i].x*tp, trail[i].y*tp, tp, tp)

    if(trail[i].x == px && trail[i].y == py){
        vx = vy = 0
        tail = 4
    }
}


trail.push({x:px, y:py })
    while (trail.length > tail){
        trail.shift()
    }

    if(ax==px && ay==py){
        tail++
        ax = Math.floor(Math.random()*qp)
        ay = Math.floor(Math.random()*qp)
    }
}
    function keyPush(event){
        switch(event.keyCode){
            case 37: //left
            vx = - velocity
            vy = 0;
            break;

            case 38: //up
            vx = 0
            vy = - velocity
            break;

            case 39: //right
            vx = velocity
            vy = 0;
            break;

            case 40: //down
            vx = 0
            vy = velocity;
            break;

            case 65: //left
            vx = - velocity
            vy = 0;
            break;

            case 87: //up
            vx = 0
            vy = - velocity
            break;

            case 68: //right
            vx = velocity
            vy = 0;
            break;

            case 83: //down
            vx = 0
            vy = velocity;
            break;

            default:

            break;
        }
    }
}