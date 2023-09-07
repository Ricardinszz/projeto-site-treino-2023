function mostrarMensagem() {
    var numeroAleatorio = Math.floor(Math.random() * 999) + 1;
    
    swal({
      title: "Cupom",
      text: "Seu cupom de desconto de frete é #" + numeroAleatorio,
      button: "OK",
    });
  }
  
