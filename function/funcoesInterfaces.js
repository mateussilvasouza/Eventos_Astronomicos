const imprimeListaChuva = (listaChuva) =>{
  listaChuva.forEach((chuva) => {
    console.log(`${ chuva.nome } - ${ chuva.intensidade } - ${ chuva.declinacao } - ${ chuva.inicio } à ${ chuva.fim } `);
  });
}

export default imprimeListaChuva;

