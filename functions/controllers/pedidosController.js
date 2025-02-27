const db = require("../config/firebaseConfig");
const Pedido = require("../models/pedido");

const pedidosCollection = db.collection("pedidos");

const criarPedido = async (req, res) => {
  try {
    const {cliente, email, itens} = req.body;
    const novoPedido = new Pedido(cliente, email, itens);
    const docRef = await pedidosCollection.add({...novoPedido});
    res.status(201).json({id: docRef.id, ...novoPedido});
  } catch (error) {
    res.status(500).json({error: "Erro ao criar pedido"});
  }
};

const listarPedidos = async (req, res) => {
  try {
    const snapshot = await pedidosCollection.get();
    const pedidos = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
    res.status(200).json(pedidos);
  } catch (error) {
    res.status(500).json({error: "Erro ao buscar pedidos"});
  }
};

const obterPedido = async (req, res) => {
  try {
    const doc = await pedidosCollection.doc(req.params.id).get();
    if (!doc.exists) {
      return res.status(404).json({error: "Pedido não encontrado"});
    }
    res.status(200).json({id: doc.id, ...doc.data()});
  } catch (error) {
    res.status(500).json({error: "Erro ao buscar pedido"});
  }
};

const atualizarPedido = async (req, res) => {
  try {
    const {status} = req.body;
    const pedidoRef = pedidosCollection.doc(req.params.id);
    await pedidoRef.update({
      status,
      data_atualizacao: new Date(),
    });
    res.status(200).json({message: "Pedido atualizado com sucesso", status});
  } catch (error) {
    res.status(500).json({error: "Erro ao atualizar pedido"});
  }
};

const deletarPedido = async (req, res) => {
  try {
    await pedidosCollection.doc(req.params.id).delete();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({error: "Erro ao deletar pedido"});
  }
};

module.exports = {
  criarPedido,
  listarPedidos,
  obterPedido,
  atualizarPedido,
  deletarPedido,
};
