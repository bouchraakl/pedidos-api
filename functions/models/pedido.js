/**
 * Representa um Pedido na aplicação.
 */
class Pedido {
  /**
   * Cria uma instância de Pedido.
   * @param {string} cliente - Nome do cliente.
   * @param {string} email - Email do cliente.
   * @param {Array} itens - Lista de itens do pedido.
   */
  constructor(cliente, email, itens) {
    this.cliente = cliente;
    this.email = email;
    this.itens = itens;
    this.total = itens.reduce(
        (acc, item) => acc + item.preco * item.quantidade,
        0,
    );
    this.status = "PENDENTE";
    this.data_criacao = new Date();
    this.data_atualizacao = new Date();
  }
}

module.exports = Pedido;
