class CarrinhoCompras {
    constructor(itens, quantidadeTotal, valorTotal) {
      this.itens = itens;
      this.quantidadeTotal = quantidadeTotal;
      this.valorTotal = valorTotal;
    }
  
    addItens(item) {
      let contador = 0;
      for (let itemCarrinho of this.itens) {
        if (itemCarrinho.id === item.id) {
          itemCarrinho.qtd += item.qtd;
          contador = 1;
        }
      }
  
      if (contador === 0) {
        this.itens.push(item);
      }
  
      this.quantidadeTotal += item.qtd;
      this.valorTotal += item.preco * item.qtd;
    }
  
    removeItem(item) {
      let index = this.itens.findIndex(obj => obj.id === item.id);
      if (index !== -1) {
        this.quantidadeTotal -= this.itens[index].qtd;
        this.valorTotal -= this.itens[index].preco * this.itens[index].qtd;
        this.itens.splice(index, 1);
      }
    }
  }
  
  let cesta = new CarrinhoCompras([
    { id: 1, nome: "Camisa", qtd: 10, preco: 10 },
    { id: 2, nome: "Chuteira", qtd: 20, preco: 25 }
  ], 30, 350);
  
  console.log(cesta);
  cesta.addItens({ id: 1, nome: "Camisa", qtd: 5, preco: 10 });
  console.log(cesta);
  cesta.addItens({ id: 3, nome: "Boné", qtd: 1, preco: 10 });
  console.log(cesta);
  cesta.removeItem({ id: 3, nome: "Boné", qtd: 1, preco: 10 });
  console.log(cesta);