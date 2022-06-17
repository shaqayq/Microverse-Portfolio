window.addEventListener('DOMContentLoaded', (event) => {
  function listMenu() {
    document.getElementById('dropdown-list').style.display = 'block';
  }

  function closediv() {
    const navclose = document.getElementById('dropdown-list');
    navclose.style.display = 'none';
  }

  function hide() {
    document.getElementById('dropdown-list').style.display = 'none';
  }

  function checkLowerCase(str) {
    const validChar = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const errStr = {};
    if (!str.match(validChar)) {
      errStr.msg = '*****Please Enter Email..***';
      errStr.valid = false;
    } else if (str === String(str).toLowerCase()) {
      errStr.valid = true;
    } else {
      errStr.msg = '****Email should be with lower case*****';
    }
    return errStr;
  }

  const submitbtn = document.querySelector('.contact_btn');
  submitbtn.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    const emailValid = document.querySelector('.email');
    const check = checkLowerCase(emailValid.value);
    if (check.valid !== true) {
      document.getElementById('msg').innerText = check.msg;
      document.getElementById('msg').style.color = '#ff380b';
      emailValid.focus();
      emailValid.style.border = 'thick solid #ff0000';
    } else {
      document.getElementById('msg').innerText = '';
      emailValid.style.border = 'thick solid #00ff00';
      document.getElementById('userform').submit();
    }
  });
});