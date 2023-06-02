function enviardados(){

  if(document.dados.tx_nome.value=="" ||
  document.dados.tx_nome.value.length < 8)
  {
  alert( "Preencha campo NOME corretamente!" );
  document.dados.tx_nome.focus();
  return false;
  }

}