$(document).ready(function () {
    var data = JSON.parse(localStorage.getItem('userLoged'))
    const name = data.map(user => user.username);

    $('#name').text('Olá, ' + name)
    $("#codigo").text('#' + Math.floor(Math.random() * 9999))


    $('#tempo').html('<i style="width:20px;height:20px;color:black" class="fas fa-clock"></i>Tempo até entrega: ' + (Math.random() * (20 - 5 + 1) + 5).toFixed(0)
        + ' - ' + (Math.random() * (50 - 25 + 1) + 25).toFixed(0) + 'min');




})

