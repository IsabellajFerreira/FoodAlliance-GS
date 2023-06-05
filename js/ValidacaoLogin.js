function enviardados() {    
    var email = document.dados.email.value;    
    var senha = document.dados.password.value;
  
     
    if (email === "" || !validarEmail(email)) {
        alert("Preencha o campo E-mail corretamente!");
        document.dados.email.focus();
        return false;
    } 
   
  
    if (senha === "" || senha.length < 8) {
        alert("Preencha o campo Senha corretamente!");
        document.dados.password.focus();
        return false;
    }
  
    return true;
  }
  
  // Função auxiliar para validar o formato de e-mail
  function validarEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  