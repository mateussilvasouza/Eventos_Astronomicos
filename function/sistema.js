
const dataAtual = new Date();

export const verificaChuvasOcorrendo = (chuva) => {
    const anoAtual = dataAtual.getFullYear();

    const dataInicio = new Date(`${anoAtual} / ${chuva.inicio}`);
    const dataFim = new Date(`${anoAtual} / ${chuva.fim}`);

    if(dataInicio == dataFim){
        dataFim.setFullYear(anoAtual+1);
    }

    return (dataInicio >= dataAtual && dataFim <= dataAtual);
};

export const verificaProximasChuvas = (chuva) => {
    const anoAtual = dataAtual.getFullYear();

    const dataInicio = new Date(`${anoAtual} / ${chuva.inicio}`);
    const dataFim = new Date(`${anoAtual} / ${chuva.fim}`);

    if((dataAtual.getMonth() + 1) > (dataInicio.getMonth() +1)){
        if(dataInicio == dataFim){
            dataFim.setFullYear(anoAtual+2);
        }
        dataInicio.setFullYear(anoAtual+1);
    }

    return ((dataAtual < dataInicio) && (dataInicio < dataFim));
}