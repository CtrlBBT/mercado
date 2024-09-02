const produto_controller = require("../controllers/produto.js")

let proxId = 1;

const model = (body, id = proxId++) => {
    if(
        body.nome != undefined &&
        body.nome != "" &&
        body.quantidade == isNaN &&
        mercado_controller.show(body.mercado_id) &&
        fornecedor_controller.show(body.fornecedor_id)
    ) {
        return {
            id,
            nome: body.nome,
            quantidade: body.quantidade,
            mercado_id: body.endereco,
            forncededor_id: body.fornecedor_id
        }
    }
}

module.exports = model