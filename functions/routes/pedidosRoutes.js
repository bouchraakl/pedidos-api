/* eslint-disable new-cap */
const express = require("express");
const router = express.Router();
const pedidosController = require("../controllers/pedidosController");

router.post("/pedidos", pedidosController.criarPedido);
router.get("/pedidos", pedidosController.listarPedidos);
router.get("/pedidos/:id", pedidosController.obterPedido);
router.patch("/pedidos/:id", pedidosController.atualizarPedido);
router.delete("/pedidos/:id", pedidosController.deletarPedido);

module.exports = router;
