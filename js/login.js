function login() {
    var retVal = true;
    retVal1 = validateNome()
    retVal2 = validatePasse()
    if (retVal1 && retVal2) {
        continuar()
    }


    return retVal1 && retVal2;

}
function validateNome() {
    nome = document.getElementById("Nome").value;
    if (nome !== "José Gomes") {
        document.getElementById("loginError").classList.remove("d-none");
        return false;
    } else {
        if (!document.getElementById("loginError").classList.contains("d-none")) {
            document.getElementById("loginError").classList.add("d-none");
        }
        return true
    }
}
function validatePasse() {
    passe = document.getElementById("Passe").value;
    console.log(passe)
    if (passe != "Tipofixe") {
        document.getElementById("loginError").classList.remove("d-none");
        return false;
    } else {
        if (!document.getElementById("loginError").classList.contains("d-none")) {
            document.getElementById("loginError").classList.add("d-none");
        }
        return true
    }
}
function continuar() {
    window.location.replace("home.html")

}