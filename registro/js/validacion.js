function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
    document.getElementById("alert-danger").classList.remove("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
    document.getElementById("alert-success").classList.remove("show");
}

document.getElementById("regBtn").addEventListener('click', function(){
    
    event.preventDefault();

    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let email = document.getElementById("email");
    let password1 = document.getElementById("password1");
    let password2 = document.getElementById("password2");
    let terminos = document.getElementById("terminos");

    if (nombre.value === "" || apellido.value === "" || email.value === "" || password1.value === "" || password2 ==="" || password1.value.length<6 || password1.value!==password2.value || terminos.checked === false){
        showAlertError();
        return;
    }
    showAlertSuccess();
});