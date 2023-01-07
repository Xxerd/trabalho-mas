$().ready(function () {
    const data = JSON.parse(localStorage.getItem('userLoged')) || [];
    const credit = data.map(user => user.card);
    const address = data.map(user => user.address)
    // rest of the code

    $("#Card").val(credit)
    $("#morada").val(address)
    const preço = JSON.parse(localStorage.getItem('Compra'))
    $('#preço').text(preço + '€')


    const Cartão = $("#radio1")
    const Dinheiro = $("#radio2")
    const Card = $("#Card")

    $("#radio2").click(function () {
        Card.hide()
        $("#CardName").hide()
    })


    $("#radio1").click(function () {
        Card.show()
        $("#CardName").show()
    })


    $("#entrega").click(function () {
        $("#entrega").css({ "background-color": "#41403F", "color": "#FFFFFF", })
        $("#take").css({ "background-color": "#FFF3E9", "color": "#000000", "border-color": "#41403F !important", "border": "1px solid", })
        $('#morada').attr("placeholder", "+ Adicionar Nova Morada")
        $('#preço').text((preço) + '€')
    })
    $("#take").click(function () {
        $("#take").css({ "background-color": "#41403F", "color": "#FFFFFF", "border-bottom-right-radius": "0px" })
        $("#entrega").css({ "background-color": "#FFF3E9", "color": "#000000", "border-color": "#41403F !important", "border": "1px solid", })
        $('#morada').attr("placeholder", "+ Adicionar Estabelecimento")

        if (preço != 0) {
            $('#preço').text((preço - 0.20) + '€')
        }

    })

    $("#pay").click(function () {

        if (preço == 0) {


            $("#CartError").removeClass("d-none")
        }
        else {
            location.href = 'final.html'
        }

    })


});