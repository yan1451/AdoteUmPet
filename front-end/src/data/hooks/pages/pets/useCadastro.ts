import { useState } from "react";

export function useCadastro() {
  const [nome, setNome] = useState(''),
    [historia, setHistoria] = useState(''),
    [foto, setFoto] = useState(''),
    [mensagem, setMensagem] = useState('');


  function cadastrar() {
    if (validarFormulario()) {
      limpar();
    } else {
      setMensagem('Preencha Todos os Campos');
    }
  }

  function validarFormulario() {
    return nome.length > 0 && historia.length > 20;
  }

  function limpar() {
    setNome('');
    setFoto('');
    setHistoria('');
  }

  return {
    nome,
    historia,
    foto,
    setNome,
    setHistoria,
    setFoto,
    cadastrar,
    mensagem,
    setMensagem,
  }
}