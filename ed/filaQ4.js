class Filadaputa{
  constructor(tam = 6) {
    this.tam = tam;
    this.dados = [this.tam];
    this.inicio = 0;
    this.fim = 0;
  }
  enqueue(dado) {
    if (!this.isFull()) {
      this.dados[this.fim] = dado;
      this.fim++;
      return;
    }
    throw new Error("QueueOverFlow");
  }
  dequeue() {
    if (!this.isEmpty()) {
      return this.inicio++;
    }
    throw new Error("QueueUnderFlow");
  }
  clear() {
    this.inicio === 0;
    this.fim === 0;
  }
  front() {
    if (!this.isEmpty()) {
      return this.dados[this.inicio];
    }
  }
  isEmpty() {
    return this.inicio === this.fim;
  }
  isFull() {
    return this.fim === this.tam;
  }
  lenght() {
    return this.fim - this.inicio;
  }
}

let p = new Filadaputa();
let p2 = new Filadaputa();
let aux = new Filadaputa();

function intercalar(p, p2, aux) {
    for(let i = 0; i < 3 ; i++ ){
      aux.enqueue(p.front());
      p.dequeue();

      aux.enqueue(p2.front());
      p2.dequeue();
    }
}

p.enqueue(1);
p.enqueue(2);
p.enqueue(3);
p2.enqueue(10);
p2.enqueue(11);
p2.enqueue(12);

intercalar(p , p2 , aux);

console.log(aux.dados);
