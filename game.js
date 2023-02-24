
 window.onload = function() {
    var start = document.getElementById('start');
    var end = document.getElementById('end');
    var status = document.getElementById('status');
    var boundaries = document.getElementsByClassName('boundary');
    var mainScore = document.getElementsByClassName('example')[0];
    var stt = status.innerHTML
    var score = 0

    // document.addEventListener('mousemove',function(e) {  
    //     var pos1 = start.getBoundingClientRect();
    //     var x = e.offsetX
    //     var y = e.offsetY
    //     start.style.left = x + "px";
    //     start.style.top = y + "px";
    //     console.log(pos1)
    // })
    

    start.addEventListener('mouseover',startGame)
    end.addEventListener('mouseover',endGame)
    start.addEventListener('click',resetGame)

    for ( var i=0 ; i <boundaries.length ; i++ ) {
        boundaries[i].addEventListener('mouseover',loseGame)
    }

    function startGame () {
        console.log("start")
    }
    
    function endGame () {
        console.log("end")
        if (status.innerHTML == "You Lost"){
            status.innerHTML = "You Lost"
        }
        else{
            status.innerHTML = "You Win"
            mainScore.innerHTML = 5
        }
    }

    function resetGame () {
        console.log("reset")
        for ( var i=0 ; i <boundaries.length ; i++ ) {
            boundaries[i].style.backgroundColor = null
        }
        status.innerHTML = stt
        mainScore.innerHTML = ""
    }

    function loseGame () {
        console.log("lose")
        if (status.innerHTML == "You Win"){
            status.innerHTML = "You Win"
        }
        else{
            for ( var i=0 ; i <boundaries.length ; i++ ) {
                boundaries[i].style.backgroundColor ='red'
            }
            status.innerHTML = "You Lost"
            mainScore.innerHTML = -10
        }
    }
    
    
    // // Get the positions of each div element
    // //const pos1 = start.getBoundingClientRect();
    // const pos2 = end.getBoundingClientRect();
    // alert(pos1.right)
    // console.log(pos2)
    // if (pos1.right == pos2.left ||
    //     pos1.bottom == pos2.top )
    //     {
    //         console.log("The two buttons are not touching.");
    //         alert("The Start buttons touching the end .")
    //     }
    //     else {
    //         console.log("The two buttons are touching!");
    //         alert("The Start buttons touching the end .")

    //     }


}
