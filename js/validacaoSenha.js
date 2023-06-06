function enviardados() {    
    var email = document.dados.email.value;    
    
  
     
    if (email === "" || !validarEmail(email)) {
        alert("Preencha o campo E-mail corretamente!");
        document.dados.email.focus();
        return false;
    } 
     }
  
  // Função auxiliar para validar o formato de e-mail
  function validarEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  