window.onload = loginLoad;

	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
    const username = urlParams.get('username');
    const password = urlParams.get('password');    
	

function loginLoad() {
    let form = document.getElementById('myLogin');
    form.onsubmit = checkLogin;

}

function checkLogin(){
	
	let id = document.getElementById('username').value;
    let pass = document.getElementById('password').value; 

	if(id == username && pass == password){
        LoginSuccess();
        alert("Login Sucessful.");
    }
    else {	
        alert("Your Username or Password Incorrected.");
        // document.getElementById('id').value = '';
        // document.getElementById('pass').value = '';
        return false;
        // document.getElementById('errormsg').innerHTML = "Your Username or Password Incorrected.";
    }

}

function LoginSuccess()
{
    console.log("Reload");
    window.location.href = "https://www.facebook.com";
}
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย