import { useEffect, useState } from "react";
import { Relatorio } from "../../../@types/relatorio";
import { requestData } from "../../../services/api";

export function UseRelatorio() {
  const [listaRelatorio, setListaRelatorio] = useState<Relatorio[]>([]);


  async function getLista() {
    const lista = await requestData('/adocoes');
    setListaRelatorio(lista);
  }

  console.log(listaRelatorio);

  useEffect(() => {
    getLista();
  }, []);

  return {
    listaRelatorio,
  }
}