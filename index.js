
/**
 * Función para determinar si un año n es considerado Año Santo.
 * @param {number} n El año a comprobar.
 * @returns true o false, en función de si es año santo o no.
 */
function anoSanto(n) {
  //TODO: realizar cálculos oportunos

 if (n>2100) {
   n--;
 }
  while (n > 2038) {
    n-=28;
  }
  while (n < 2021) {
    n+=28;
  }
  if (n==2021 || n==2027 || n==2032 || n==2038) return true;


  return false;
  
 
}

export {
  anoSanto
}