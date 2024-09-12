function proximoElemento(a) {
    switch (a) {
      case 'a':
       
        return 9;
      case 'b':
        
        return 128;
      case 'c':
        
        return 49;
      case 'd':
        
        return 100;
      case 'e':
        
        return 13;
      case 'f':
    
        return 20;
      default:
        return 'Sequência não encontrada';
    }
  }
  
  console.log(' O Próximo elemento da sequência 1, 3, 5, 7... é:', proximoElemento('a'));
  console.log(' O Próximo elemento da sequência 2, 4, 8, 16, 32, 64... é:', proximoElemento('b'));
  console.log(' O próximo elemento da sequência 0, 1, 4, 9, 16, 25, 36... é:', proximoElemento('c'));
  console.log(' O Próximo elemento da sequência 4, 16, 36, 64... é:', proximoElemento('d'));
  console.log(' O Próximo elemento da sequência 1, 1, 2, 3, 5, 8... é:', proximoElemento('e'));
  console.log(' O Próximo elemento da sequência 2, 10, 12, 16, 17, 18, 19... é:', proximoElemento('f'));
  