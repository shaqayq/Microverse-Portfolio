(function listMenu() {
  document.getElementById('dropdown-list').style.display = 'block';
}());

window.onclick = function hidemenu(event) {
  let i;
  if (!event.target.matches('.hum_btn')) {
    const dropdowns = document.getElementsByClassName('dropdown-content');
    for (i = 0; i < dropdowns.length; i += 1) {
      const openDropdown = dropdowns[i].style.displayl;
      if (openDropdown === 'block') {
        openDropdown.style.display = 'none';
      }
    }
  }
};

(function closebtn1() {
  const navclose = document.getElementById('dropdown-content');
  navclose.style.display = 'none';
}());
