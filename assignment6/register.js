window.onload = pageLoad;
function pageLoad() {
    let form = document.getElementById('myForm');
    form.onsubmit = validateForm;
}

function validateForm() {
  // alert("Ok");
  if (isPasswordMatch()) {
  } else {
    return false;
  }

  //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
}

function isPasswordMatch() {

    let pass = document.getElementById("password").value;
    let repass = document.getElementById("repassword").value;
  if (pass == repass) {
      alert('Successfull.')
    return true;
  } else {
    document.getElementById("errormsg").innerText = "Password doesn't match :";
    return false;
  }
}