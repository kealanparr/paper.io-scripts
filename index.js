   var div = document.createElement('div');
    div.onclick = function(){
      window.scale = 0.5
    }

    var out = document.createElement('div');
    out.onclick = function(){
      window.scale = 6
    }

    var ui = document.getElementById("game")
    window.scale = 0.5
    ui.appendChild(out)
    ui.appendChild(div)

    div.style.position = "absolute";
    div.style.top = "100px";
    div.style.right = "100px";
    div.style.zIndex = "1000000000000";
    div.style.border = "1px solid black";
    div.style.display = "block";
    div.style.width = "100px";
    div.style.backgroundColor = "pink";
    div.style.height = "100px";

    out.style.position = "absolute";
    out.style.top = "400px";
    out.style.right = "100px";
    out.style.zIndex = "1000000000000";
    out.style.border = "1px solid black";
    out.style.display = "block";
    out.style.width = "100px";
    out.style.backgroundColor = "pink";
    out.style.height = "100px";


    setInterval(function(){
      paperio2api.game.scale = window.scale
    }, 10)
