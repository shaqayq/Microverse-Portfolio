
function listMenu() {
 var btn= document.getElementById("dropdown-list").style.display="block";
 }

 window.onclick = function(event) {
    if (!event.target.matches('.hum_btn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.style.display="block") {
          openDropdown.style.display="none"
        }
      }
    }
  }