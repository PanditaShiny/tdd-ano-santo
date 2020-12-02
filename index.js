
/**
 * Función para determinar si un año n es considerado Año Santo.
 * @param {number} n El año a comprobar.
 * @returns true o false, en función de si es año santo o no.
 */
function anoSanto(n) {
  //TODO: realizar cálculos oportunos
  /*var santo = 1993;
  while (n > 1993) {
    var cadencia  = [6,5,6,11];
    for (let i = 0; i < cadencia.length; i++) {
      santo += cadencia[i];
    }
    //años bisiestos

    if (n == santo) {
      return true;
    }
      return false;
    }
  }
  */
 if (n>2100) {
   n--;
 }
  while (n > 2038) {
    n-=28;
  }
  while (n < 2021) {
    n+=28;
  }


  //if (n==1993) return true;
  if (n==1999) return true;
  if (n==2004) return true;
  if (n==2010) return true;

  if (n==2021) return true;
  if (n==2027) return true;
  if (n==2032) return true;
  if (n==2038) return true;

  return false;
}




export {
  anoSanto
}