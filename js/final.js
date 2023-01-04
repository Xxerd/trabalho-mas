$(document).ready(function () {
    var data = JSON.parse(localStorage.getItem('userLoged'))
    const name = data.map(user => user.username);

    $('#name').text('  ' + name)





})

