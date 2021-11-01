import { verificaIntensidade, verificaHemisferio, inverteMesDia } from "./funcoesUtilitarias.js";

//imprimeListaChuva recebe um array e percorre cada elemento executando a função imprimeChuva
const imprimeListaChuva = (listaChuva) =>{
  console.log('\nNome do Meteoro'.padEnd(29," ")+'- Intensidade'.padEnd(11," ")+' - Hemisfério'.padEnd(10," ")+' - Período');
  
  listaChuva.forEach(imprimeChuva);
}

//imprimeChuva recebe um objeto e imprime cada propriedade desse objeto
const imprimeChuva=(chuva)=>{
    const nome = chuva.nome.padEnd(27," ");

    let intensidade = verificaIntensidade(chuva.intensidade);
    intensidade = intensidade.padEnd(11," ");

    let hemisferio = verificaHemisferio(chuva.declinacao);
    hemisferio = hemisferio.padEnd(10," ");

    const data_inicio= inverteMesDia(chuva.inicio);
    const data_fim= inverteMesDia(chuva.fim);

    console.log(`${ nome } - ${ intensidade } - ${ hemisferio } - ${ data_inicio } à ${ data_fim } `);
}

export default imprimeListaChuva;

