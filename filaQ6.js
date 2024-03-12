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
    this.inicio = 0;
    this.fim = 0;
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
  length() {
    return this.fim - this.inicio;
  }
}
f = new Filadaputa();
f1 = new Filadaputa();

function reversa (f, f1){
  if(!f.isEmpty()){
    f1.enqueue(f.front());
    f.dequeue();
    reversa(f, f1);
  }
}

f.enqueue(1);
f.enqueue(2);
f.enqueue(3);
f.enqueue(4);
f.enqueue(5);

reversa(f, f1);

console.log(f1.dados);