function enviardados() {
    var nome = document.dados.nome.value;
    var cnpj = document.dados.cnpj.value;
    var email = document.dados.email.value;
    var telefone1 = document.dados.telefone1.value;
    var senha = document.dados.password.value;
    var cep = document.dados.cep.value;
    var numero = document.dados.numero.value;

    if (nome === "" || nome.length < 8 || /\d/.test(nome)) {
        alert("Preencha o campo Nome corretamente!");
        document.dados.nome.focus();
        return false;
    }

    if (cnpj === "" || cnpj.length < 11 || /\D/.test(cnpj)) {
        alert("Preencha o campo CPF ou CNPJ corretamente!");
        document.dados.cnpj.focus();
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

    if (cep === "" || cep.length !== 8 || /\D/.test(cep)) {
        alert("Preencha o campo CEP corretamente!");
        document.dados.cep.focus();
        return false;
    }

    if (numero === "" || /\D/.test(numero)) {
        alert("Preencha o campo Número corretamente!");
        document.dados.numero.focus();
        return false;
    }

    return true;
}

// Função auxiliar para validar o formato de e-mail
function validarEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
