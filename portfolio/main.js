
var typed = new Typed(".type", {
    strings: ["a Developer","a Designer", "Shivika Singla"],
     typeSpeed:60,
     backSpeed:60,
     loop:true
     });

     function toggleDarkLight() {
        var body = document.getElementById("body");
        var currentClass = body.className;
        body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
        var t=document.getElementById("ii");
        t.className=currentClass == "dark-mode" ?"uil uil-sun":"uil uil-moon"
      }