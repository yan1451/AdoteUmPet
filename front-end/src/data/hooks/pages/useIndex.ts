import { useState, useEffect } from "react";
import { pet } from "../../@types/pet";
import { requestData, createData } from "../../services/api";

export function useIndex() {
  const
    [listaPets, setListaPets] = useState([]),
    [petSelecionado, setPetSelecionado] = useState<pet | null>(null),
    [email, setEmail] = useState(''),
    [valor, setValor] = useState(0),
    [mensagem, setMensagem] = useState('');

  async function getPets() {
    const pets = await requestData('/pets');
    setListaPets(pets);
  }

  useEffect(() => {
    getPets();
  }, []);

  useEffect(() => {
    if (petSelecionado === null) {
      setEmail('');
      setValor(0);
    }
  }, [petSelecionado])

  
  function adotar() {
    if (petSelecionado !== null) {
        if (validarDadosAdocao()) {
          const endpoint = '/adocoes';
          const body = {
            email,
            value: valor,
            pet_id: petSelecionado.id,
          }
          createData(endpoint, body);
          setPetSelecionado(null);
          setMensagem('Pet adotado com sucesso!');
        } else
        setMensagem('Preencha os campos corretamente');
    }
  };

  function validarDadosAdocao(){
    return email.length > 0 && valor > 0;
  }

  return {
    listaPets,
    petSelecionado,
    setPetSelecionado,
    email,
    setEmail,
    valor,
    setValor,
    mensagem,
    setMensagem,
    adotar
  }
}