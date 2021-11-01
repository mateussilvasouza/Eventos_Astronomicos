
//verifica intensidade da chuva de meteoros
export const verificaIntensidade = (intensidade) =>{
    let novaIntensidade = "1 (Fraca)";

    if(intensidade.indexOf('Forte') >= 0){
        novaIntensidade = "3 (Forte)";
    } else if(intensidade.indexOf('Média') >= 0){
        novaIntensidade = "2 (Média)";
    } else if(intensidade.indexOf('Irregular') >= 0){
        novaIntensidade = "(Irregular)";
    }

    return novaIntensidade;
}

//verifica hemisferio em que ocorre a chuva
export const verificaHemisferio = (declinacao) => (declinacao >= 0) ? "Norte" : "Sul";

//inverte a posição da data e hora
export const inverteMesDia = (mesDia) => {
    const data= mesDia.split("/");
    return `${data[1]} / ${data[0]}`;
}
