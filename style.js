window.addEventListener('DOMContentLoaded', (event) => {
  if (localStorage.getItem('localdata') !== null) {
    const storagedata = JSON.parse(localStorage.getItem('localdata'));
    document.getElementById('name').value = storagedata.name;
    document.getElementById('email').value = storagedata.email;
  }

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

  function checkOtherFields() {
    let Fname;
    let message;
    let valid = true;
    const namefiled = document.getElementById('name');
    const msgField = document.getElementById('comments');
    const msg = document.getElementById('msg');
    if (namefiled.value === '') {
      Fname += '***Please enter name***';
      document.getElementById('name').style.border = 'thick solid #ff0000';
      msg.innerHTML = Fname;
      valid = false;
    } else {
      document.getElementById('name').style.border = 'thick solid #00ff00';
      msg.innerHTML = '';
    }
    if (msgField.value === '') {
      message += '***Please enter some comments***';
      document.getElementById('comments').style.border = 'thick solid #ff0000';
      msg.innerHTML = message;
      valid = false;
    } else {
      document.getElementById('comments').style.border = 'thick solid #00ff00';
      msg.innerHTML = '';
    }
    return valid;
  }

  function checkLowerCase(str) {
    const validChar = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const errStr = {};
    if (!str.match(validChar)) {
      errStr.msg = '*****Please Enter valid Email..***';
      errStr.valid = false;
    } else if (str === String(str).toLowerCase()) {
      errStr.valid = true;
    } else {
      errStr.msg = '****Email should be with lower case*****';
      errStr.valid = false;
    }
    return errStr;
  }

  const submitbtn = document.getElementById('contact_btn');
  submitbtn.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    const valid = checkOtherFields();
    const namefield = document.getElementById('name');
    const emailValid = document.getElementById('email');
    const localname = namefield.value;
    const localemail = emailValid.value;
    const data = {
      name: localname,
      email: localemail,
    };
    const check = checkLowerCase(emailValid.value);
    if (check.valid !== true) {
      document.getElementById('msg').innerText = check.msg;
      document.getElementById('msg').style.color = '#ff380b';
      emailValid.focus();
      emailValid.style.border = 'thick solid #ff0000';
    } else {
      document.getElementById('msg').innerText = '';
      emailValid.style.border = 'thick solid #00ff00';
      if (valid) {
        localStorage.setItem('localdata', JSON.stringify(data));
        document.getElementById('userform').submit();
      }
    }
  });
});