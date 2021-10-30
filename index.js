import chuvasDeMeteoros from './date/chuvaDeMeteoros.js';
import imprimeListaChuva from './function/funcoesInterfaces.js'
import { verificaChuvasOcorrendo, verificaProximasChuvas } from './function/sistema.js';

imprimeListaChuva(chuvasDeMeteoros);

const chuvasVisiveis = chuvasDeMeteoros.filter( (chuva)=> verificaChuvasOcorrendo(chuva) );
const proximasChuvas = chuvasDeMeteoros.filter( (chuva)=> verificaProximasChuvas(chuva) );

console.log('\nChuva de meteoros');

if ( chuvasVisiveis.length > 0 ) {
    let msg = "\nEncontramos ";
    msg += chuvasVisiveis.length == 1 ? '1 chuva de meteoros' :
    chuvasVisiveis.length + ' chuvas de meteoros';

    console.log(msg);
    imprimeListaChuva(chuvasVisiveis)
} else {
    console.log('\nNenhuma chuva de meteoros passando no momento');
}

console.log('\n\nNão perca as próximas chuvas de meteoros:');
imprimeListaChuva(proximasChuvas);
