function loginUsername() {
    const uname = document.getElementById("uname");
    const unameerror = document.getElementById("unameerror");

    if (uname.value === '') {
        unameerror.innerHTML = "Field can not be empty";
        return false;

    } else {
        unameerror.innerHTML = "";
    }

    if (uname.value === "admin"){
        unameerror.innerHTML = " ";
        return true;
    } else {
        unameerror.innerHTML = "Username must match.";
    }
    
}


function loginPassword() {

    const pwd = document.getElementById("psw");
    const pwderror = document.getElementById("pwderror");


    if (pwd.value === '') {

        pwderror.innerHTML = "Field can not be empty";
        return false;

    } else {
        pwderror.innerHTML = "";
    }

    if (pwd.value === '12345') {

        pwderror.innerHTML = " ";
        return true;

    } else {
        pwderror.innerHTML = "Password must match.";
        return false;
    }

}
function loginPageValidate() {
    if (loginUsername() && loginPassword()) {
        window.location = "home.html";

        setTimeout(() => {
            alert('Login successfully');
        }, 1000);
        

    } else {
        alert('Something went wrong');
    }

}


