
function nightmode(){
    var night = document.getElementById("night")
    var sun = document.getElementById("sun")
    var body = document.getElementById("body")
    var header = document.getElementById("header")

    body.style.backgroundColor = "#272727"
    night.style.display = "none"
    sun.style.display = "block"
    header.style.color = "white"
}

function sunmode(){
    var night = document.getElementById("night")
    var sun = document.getElementById("sun")
    var body = document.getElementById("body")
    var header = document.getElementById("header")

    body.style.backgroundColor = "#ddd"
    night.style.display = "block"
    sun.style.display = "none"
    header.style.color = "#000"
}