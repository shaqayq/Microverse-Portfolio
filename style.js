function listMenu() {
   (document.getElementById('dropdown-list').style.display = 'block');
}

window.onclick = function (event) {
  var i;
  if (!event.target.matches('.hum_btn')) {
    let dropdowns = document.getElementsByClassName('dropdown-content');
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.style.display = 'block') {
        openDropdown.style.display = 'none';
      }
    }
  }
};

function closebtn1() {
  const navclose = document.getElementById('dropdown-content');
  navclose.style.display = 'none';
}
