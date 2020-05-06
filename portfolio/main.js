
var typed = new Typed(".type", {
    strings: ["a Developer","a Student", "Shivika Singla"],
     typeSpeed:60,
     backSpeed:60,
     loop:true
     });

     function toggleDarkLight() {
        var body = document.getElementById("body");
        var currentClass = body.className;
        body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
      }