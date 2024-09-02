let proxId = 1;

const model = (body, id = proxId++) => {
    if(
        body.nome != undefined &&
        body.nome != "") {
        return {
            id,
            nome: body.nome,
        }
    }
}

module.exports = model