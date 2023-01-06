const data = []




function validate() {
  var retVal = true;
  retVal1 = validateNome()

  retVal3 = validatePasse();
  retVal4 = validateEmail();
  retVal5 = validateTelemovel();
  const username = document.getElementById('Nome').value;
  const password = document.getElementById('Passe').value;
  const email = document.getElementById('Email').value;
  const phone = document.getElementById('Telemovel').value;
  const card = document.getElementById('card').value;
  const address = document.getElementById('Morada').value;
  const date = document.getElementById('datepicker').value;
  const existingData = JSON.parse(localStorage.getItem('userData')) || [];
  if (retVal1 && retVal3 && retVal4 && retVal5) {
    const user = { username, password, email, phone, card, address, date };
    existingData.push(user);
    localStorage.setItem('userData', JSON.stringify(existingData));
    console.log(existingData)


    if (retVal1 && retVal3 && retVal4 && retVal5) {
      location.href = "index.html";
    };
  };
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
  if (true) {
    for (let i = 0; i < existingData.length; i++) {
      if (!('@' in email) || existingData[i].Email == email) {
        if (!('@' in email)) {
          document.getElementById("EmailError").innerText('Email inválido')
          document.getElementById("EmailError").classList.remove("d-none")
          return false
        }
        if (existingData[i].Email == email) {
          document.getElementById("EmailError").innerText('Email já em uso')
          document.getElementById("EmailError").classList.remove("d-none")
          return false
        }
      }
      else {
        if (!document.getElementById("EmailError").classList.contains("d-none")) {
          document.getElementById("EmailError").classList.add("d-none");
          return true
        }

      };
    }

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



