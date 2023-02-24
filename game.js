
 window.onload = function() {
    var start = document.getElementById('start');
    var end = document.getElementById('end');
    var status = document.getElementById('status');
    var boundaries = document.getElementsByClassName('boundary');
    var score = document.getElementsByClassName('example')[0];
    var stt = status.innerHTML
    var game = false

    start.addEventListener('mouseover',startGame)
    end.addEventListener('mouseover',endGame)
    start.addEventListener('click',resetGame)

    for ( var i=0 ; i <boundaries.length ; i++ ) {
        boundaries[i].addEventListener('mouseover',loseGame)
    }

    function startGame () {
        console.log("start")
        game = true
    }

    function endGame () {
        console.log("end")
        if (game) {
            if (status.innerHTML == "You Lost"){
                status.innerHTML = "You Lost"
            }
            else{
                status.innerHTML = "You Win"
                score.innerHTML = 5
            }
        }
    }

    function resetGame () {
        console.log("reset")
        for ( var i=0 ; i <boundaries.length ; i++ ) {
            boundaries[i].style.backgroundColor = null
        }
        status.innerHTML = stt
        score.innerHTML = ""
    }

    function loseGame () {
        console.log("lose")
        if (game) {
            if (status.innerHTML == "You Win"){
                status.innerHTML = "You Win"
            }
            else{
                for ( var i=0 ; i <boundaries.length ; i++ ) {
                    boundaries[i].style.backgroundColor ='red'
                }
                status.innerHTML = "You Lost"
                score.innerHTML = -10
            }
        }
    }
    
    // Make the div move with the mouse.
    document.addEventListener('mousemove',function(e) {  
        if (game){
            var x = e.offsetX
            var y = e.offsetY
            start.style.left = x + "px";
            start.style.top = y + "px";
        }
    })
    

}
