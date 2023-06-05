function enviardados() {
  var nome = document.dados.nome.value;
  var cpfCnpj = document.dados.cpfCnpj.value;
  var email = document.dados.email.value;
  var telefone1 = document.dados.telefone1.value;
  var senha = document.dados.password.value;

  if (nome === "" || nome.length < 3 || /\d/.test(nome)) {
      alert("Preencha o campo Nome corretamente!");
      document.dados.nome.focus();
      return false;
  }

  if (cpfCnpj === "" || cpfCnpj.length < 11 || /\D/.test(cpfCnpj)) {
      alert("Preencha o campo CPF ou CNPJ corretamente!");
      document.dados.cpfCnpj.focus();
      return false;
  }

  if (email === "" || !validarEmail(email)) {
      alert("Preencha o campo E-mail corretamente!");
      document.dados.email.focus();
      return false;
  }

  if (telefone1 === "" || telefone1.length < 10 || /\D/.test(telefone1)) {
      alert("Preencha o campo Telefone corretamente!");
      document.dados.telefone1.focus();
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
