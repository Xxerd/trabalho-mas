function avaliar(id) {

    for (let i = 0; i <= id; i++) {
        $('#' + i).css({ 'color': 'black' })

    }
    for (let i = (++id); i < 6; i++) {
        $('#' + i).css({ 'color': 'bisque' })

    }
}