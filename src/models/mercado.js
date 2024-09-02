let proxId = 1;

const model = (body, id = proxId++) => {
    if(
        body.nome != undefined &&
        body.CEP != undefined &&
        body.nome != "" &&
        body.CEP != ""
    ) {
        return {
            id,
            nome: body.nome,
            endereco: body.endereco,
        }
    }
}

module.exports = model