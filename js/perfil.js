$(document).ready(function () {
    var data = JSON.parse(localStorage.getItem('userLoged'))
    const names = data.map(user => user.username);
    const passes = data.map(user => user.password);
    const tel = data.map(user => user.phone);
    const card = data.map(user => user.card)
    const address = data.map(user => user.address);
    const email = data.map(user => user.email);
    const date = data.map(user => user.date);
    const existingData = JSON.parse(localStorage.getItem('userData')) || []
    $('#Passe').val(passes)
    $('#Telemovel').val(tel)
    $('#card').val(card)
    $('#Nome').val(names)
    $('#Morada').val(address)
    $('#Back').click(function () {
        const username = document.getElementById('Nome').value;
        const password = document.getElementById('Passe').value;
        const phone = document.getElementById('Telemovel').value;
        const card = document.getElementById('card').value;
        const address = document.getElementById('Morada').value;
        const existingData = JSON.parse(localStorage.getItem('userData')) || []
        const filteredData = existingData.filter(item => item.username !== names.toString())
        console.log(filteredData)
        const user = { username, password, email, phone, card, address, date };
        filteredData.push(user);
        localStorage.setItem('userLoged', JSON.stringify([user]));
        localStorage.setItem('userData', JSON.stringify(filteredData));





    })
    $('#Log-out').click(function () {
        location.href = "index.html"
    })

});