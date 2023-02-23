
 window.onload = function() {
    var start = document.getElementById('start');
    var end = document.getElementById('end');

    document.addEventListener('mousemove',function(e) {  
        var x = e.offsetX
        var y = e.offsetY
        start.style.left = x + "px";
        start.style.top = y + "px";
    })

}
