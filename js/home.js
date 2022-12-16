function pesquisar() {
    let input = $("#barra-de-pesquisa").val()
    input = input.toLowerCase();
    let produtos = $(".card-title");
    console.log(produtos)

    for (i = 0; i < produtos.length; i++) {
        if (!produtos[i].innerHTML.toLowerCase().includes(input)) {
            $(produtos[i]).parent().parent().parent().hide();

        }
        else {
            $(produtos[i]).parent().parent().parent().show().css({ "Float": "left" });
        }
    }

}
