function toggle_fullscreen(e) {

    var background = document.getElementById("background");
  
    if(!background) {
      background = document.createElement("div");
      background.id = "background";
      document.body.appendChild(background);
    }
    
    if(e.className == "fullscreen") {
      e.className = "";
      background.style.display = "none";
    }
    else {
      e.className = "fullscreen";
      background.style.display = "block";
    }
  }