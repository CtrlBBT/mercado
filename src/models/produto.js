mercado_controller = require("../controllers/mercado.js")
fornecedor_controller = require("../controllers/fornecedor.js")

let proxId = 1;

const model = (body, id = proxId++) => {
    if(
        body.nome != undefined &&
        body.nome != "" &&
        body.quantidade != undefined &&
        body.quantidade > 0 &&
        mercado_controller.show(body.mercado_id) &&
        fornecedor_controller.show(body.fornecedor_id)
    ) {
        return {
            id,
            nome: body.nome,
            quantidade: body.quantidade,
            mercado: mercado_controller.show(body.mercado_id).nome,
            fornecedor: fornecedor_controller.show(body.fornecedor_id).nome
        }
    }
}

module.exports = model