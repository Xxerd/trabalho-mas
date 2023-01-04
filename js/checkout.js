$().ready(function () {
    var data = JSON.parse(localStorage.getItem('userLoged'));
    const credit = data.map(user => user.card);
    const address = data.map(user => user.address)
    $("#Card").val(credit)
    $("#Card").val(address)
    const preço = JSON.parse(localStorage.getItem('Compra'))
    $('#preço').text(preço + '€')

    var map = L.map('map').setView([40.6412, -8.65362], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
});