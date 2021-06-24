    var div = document.createElement('div');
    div.onclick = function(){
      window.scale = 0.5
    }

    var out = document.createElement('div');
    out.onclick = function(){
      window.scale = 1
    }

    var ui = document.getElementById("game")
    window.scale = 0.5
    ui.appendChild(out)
    ui.appendChild(div)

    div.position = "absolute";
    div.top = "100px";
    div.right = "100px";
    div.z-index = "1000000000000";
    div.border = "1px solid black";
    div.display = "block";
    div.width = "100px";
    div.backgroundColor = "pink";
    div.height = "100px";

    out.position = "absolute";
    out.top = "100px";
    out.right = "100px";
    out.z-index = "1000000000000";
    out.border = "1px solid black";
    out.display = "block";
    out.width = "100px";
    out.backgroundColor = "pink";
    out.height = "100px";


    setInterval(function(){
      paperio2api.game.scale = window.scale
    }, 10)
