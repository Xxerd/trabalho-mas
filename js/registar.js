
function validate() {
  var retVal = true;
  retVal1 = validateNome()

  retVal3 = validatePasse();
  retVal4 = validateEmail();
  retVal5 = validateTelemovel();
  if (retVal1 && retVal3 && retVal4 && retVal5) {
    continuar()
  }


  return retVal1 && retVal3 && retVal4 && retVal5;
}

function validateNome() {
  nome = document.getElementById("Nome").value;
  if (nome.length < 5) {
    document.getElementById("NomeError").classList.remove("d-none");
    return false;
  } else {
    if (!document.getElementById("NomeError").classList.contains("d-none")) {
      document.getElementById("NomeError").classList.add("d-none");
    }
    return true
  }
}
function validateTelemovel() {
  tel = document.getElementById("Telemovel").value;
  console.log(tel)
  if (tel.length < 9) {
    document.getElementById("TelefoneError").classList.remove("d-none");
    return false;
  } else {
    if (!document.getElementById("TelefoneError").classList.contains("d-none")) {
      document.getElementById("TelefoneError").classList.add("d-none");
    }
    return true
  }
}



function validateEmail() {
  email = document.getElementById("Email").value;
  console.log(email)
  if (email.length < 8) {
    document.getElementById("EmailError").classList.remove("d-none");
    return false;
  } else {
    if (!document.getElementById("EmailError").classList.contains("d-none")) {
      document.getElementById("EmailError").classList.add("d-none");
    }
    return true
  }
}
function validatePasse() {
  passe = document.getElementById("Passe").value;
  if (passe.length < 5) {
    document.getElementById("PasseError").classList.remove("d-none");
    return false;
  } else {
    if (!document.getElementById("PasseError").classList.contains("d-none")) {
      document.getElementById("PasseError").classList.add("d-none");
    }
    return true
  }
}


function continuar() {
  document.getElementById("continuar").classList.remove("d-none")
  document.getElementById("registar").classList.add("d-none")
}