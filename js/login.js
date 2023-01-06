$("#login").click(login = () => {
    var retVal = true;
    var data = JSON.parse(localStorage.getItem('userData')) || []
    var login_name = $('#Nome').val();
    var login_pass = $('#Passe').val()
    const names = data.map(user => user.username);
    const passes = data.map(user => user.password)
    console.log(names)
    console.log(passes)
    console.log()
    for (let i = 0; i <= names.length; i++) {
        if (login_name === names[i]) {
            if (login_pass === passes[i]) {
                const user_atual = data.filter(user => user.username === login_name && user.password === login_pass);
                localStorage.setItem('userLoged', JSON.stringify(user_atual))
                console.log('atual: ' + user_atual)
                location.href = "home.html"
                return true
            }
        }

        if (document.getElementById("loginError").classList.contains("d-none")) {
            document.getElementById("loginError").classList.remove("d-none");
        }

    }





})





