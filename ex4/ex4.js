class InstrumentoMusical {
    constructor(nome, tipo) {
      this.nome = nome;
      this.tipo = tipo;
    }
  
    tocar() {
      console.log(`Tocando ${this.nome}, um instrumento ${this.tipo}`);
    }
  }
  

  class InstrumentoDeCorda extends InstrumentoMusical {
    constructor(nome, tipo, cordas) {
      super(nome, tipo);
      this.cordas = cordas;
    }
  
    afinar() {
      console.log(`Afinando ${this.nome} (${this.tipo}) com ${this.cordas} cordas.`);
    }
  }
  
  const teclado = new InstrumentoMusical('Teclado', 'de teclas');
  const violao = new InstrumentoDeCorda('Violão', 'de corda', 6);
  

  teclado.tocar(); 
  violao.tocar(); 
  violao.afinar(); 