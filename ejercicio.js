function calcularOperaciones(a, b, c, d) {
    
    let suma1 = a + b;
    
    let suma2 = c + d;
    
    // Multiplicar las dos sumas
    let resultado = suma1 * suma2;
    
    // Comprobar si el resultado es mayor o menor que 50
    if (resultado > 50) {
      console.log("¡El número es mayor que 50!");
    } else {
      console.log("¡El número es menor que 50!");
    }
  }

  calcularOperaciones(3, 4, 5, 6); 
  
