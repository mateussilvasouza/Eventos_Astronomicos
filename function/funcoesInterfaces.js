import { verificaIntensidade, verificaHemisferio, inverteMesDia } from "./funcoesLogicas";

const imprimeListaChuva = (listaChuva) =>{
  console.log('\nNome do Meteoro'.padEnd(29," ")+'- Intensidade'.padEnd(11," ")+' - Hemisfério'.padEnd(10," ")+' - Período');
  
  listaChuva.forEach(imprimeChuva);
}

const imprimeChuva=(chuva)=>{
    const nome = chuva.nome.padEnd(27," ");

    let intensidade = verificaIntensidade(chuva.intensidade);
    intensidade = intensidade.padEnd(11," ");

    let hemisferio = verificaHemisferio(chuva.hemisferio);
    hemisferio = hemisferio.padEnd(10," ");

    const data_inicio= inverteMesDia(chuva.inicio);
    const data_fim= inverteMesDia(chuva.fim);

    console.log(`${ nome } - ${ intensidade } - ${ hemisferio } - ${ data_inicio } à ${ data_fim } `);
}

export default imprimeListaChuva;

