function criarLampada(id) {
    return {
      id: id,
      estaLigada: false,
      estaQuente: false,
      ligar() {
        this.estaLigada = true;
        this.estaQuente = true;
      },
      desligar() {
        this.estaLigada = false;
        this.estaQuente = false;
      }
    };
  }
  
  function criarInterruptor(id) {
    return {
      id: id
    };
  }
  
  function identificarLampadas() {
   
    const interruptorA = criarInterruptor('A');
    const interruptorB = criarInterruptor('B');
    const interruptorC = criarInterruptor('C');
  
  
    const lampada1 = criarLampada('1');
    const lampada2 = criarLampada('2');
    const lampada3 = criarLampada('3');
  
   
    const controleLampadas = {
      [interruptorA.id]: lampada1,
      [interruptorB.id]: lampada2,
      [interruptorC.id]: lampada3
    };
  

    controleLampadas[interruptorA.id].ligar();
    
   
    controleLampadas[interruptorA.id].desligar();
    controleLampadas[interruptorB.id].ligar();
    
   
    const resultado = {};
    Object.keys(controleLampadas).forEach(idInterruptor => {
      const lampada = controleLampadas[idInterruptor];
      if (lampada.estaLigada) {
        resultado[idInterruptor] = 'Ligada e Brilhante';
      } else if (lampada.estaQuente) {
        resultado[idInterruptor] = 'Desligada mas Quente';
      } else {
        resultado[idInterruptor] = 'Desligada e Fria';
      }
    });
  
    
    console.log('Resultados das lâmpadas:');
    Object.keys(resultado).forEach(idInterruptor => {
      console.log(`Interruptor ${idInterruptor}: Lâmpada ${resultado[idInterruptor]}`);
    });
  }
  

  identificarLampadas();
  