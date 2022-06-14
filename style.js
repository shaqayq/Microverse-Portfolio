function listMenu() {
   (document.getElementById("dropdown-list").style.display = 'block');
}

window.onclick = function (event) {
  if (!event.target.matches(".hum_btn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if ((openDropdown.style.display = 'block')) {
        openDropdown.style.display = 'none';
      }
    }
  }
};

function closebtn1() {
  const navclose = document.getElementById("dropdown-content");
  navclose.style.display = "none";
}
