
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

export const verificaHemisferio = (declinacao) => (declinacao >= 0) ? "Norte" : "Sul";

export const inverteMesDia = (mesDia) => {
    const data= mesDia.split("/");
    return `${data[1]} / ${data[0]}`;
}
