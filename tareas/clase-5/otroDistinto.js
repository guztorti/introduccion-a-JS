const elementos = document.querySelectorAll('li');
const resultado = [];
for (let i=0; i<elementos.length; i++){
    resultado.push(Number(elementos[i].textContent));
}

document.querySelector('#procesar').onclick = function(){
    document.querySelector('#promedio').textContent = promedioArreglo(resultado);
    document.querySelector('#mayor').textContent = mayorDelArreglo(resultado);
    document.querySelector('#menor').textContent = menorDelArreglo(resultado);
    document.querySelector('#frecuente').textContent = masFrecuente(resultado);
}



// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."
function sumaArreglo(arreglo){
    let sumatoria = 0;
    for(let i=0; i<arreglo.length; i++){
      sumatoria += Number(arreglo[i]);
    }
    return sumatoria;
  }
  function promedioArreglo(arreglo){
    return sumaArreglo(arreglo)/arreglo.length;
  }
  function mayorDelArreglo(arreglo){
    let maximo = arreglo[0];
  
    for(let i=1; i<arreglo.length;i++){
      if (arreglo[i]>maximo){
        maximo = arreglo[i];
      }
    }
    return maximo;
  }
  function indiceDelMayor(arreglo){
    let maximo = arreglo[0];
    let salida = 0;
  
    for(let i=1; i<arreglo.length;i++){
      if (arreglo[i]>maximo){
        maximo = arreglo[i];
        salida = i;
      }
    }
    return salida;
  }
  function menorDelArreglo(arreglo){
    let minimo = arreglo[0];
  
    for(let i=1; i<arreglo.length;i++){
      if (arreglo[i]<minimo){
        minimo = arreglo[i];
      }
    }
    return minimo;
  }
  function masFrecuente(arreglo){
      const elementos = JSON.parse(JSON.stringify(arreglo));
      const resultado = [];
      let apariciones = [];
    

    for (let i = 0; i < elementos.length; i++) {
      const elemento = elementos[i];
      let contador =1;

      for (let j = i+1; j < elementos.length; j++) {
        const otro = elementos[j];
        if(elemento===otro){
          contador++;
          elementos.splice(j, 1);
        }
        
      }
      const obj0 = {
          elemento: elemento,
          apariciones: contador
      };
      resultado.push(obj0);
      
    }
    for (let i = 0; i < resultado.length; i++) {
        const valor = resultado[i];
        apariciones.push(valor.apariciones);
    }
    let indice = indiceDelMayor(apariciones);
    apariciones = implementBubbleSortAlgorithm(apariciones);

    if(apariciones[0]>apariciones[1]){
        return resultado, resultado[indice].elemento;
    }

    return "Hay más de un valor que se repite con mucha frecuencia";

  }
  function implementBubbleSortAlgorithm(array){
    const resultado = array;
    let aux;
    for(let i=0; i<array.length; i++){
      for(let j=0; j<array.length; j++){
        if(resultado[i]>resultado[j]){
          aux= resultado[i];
          resultado[i]=resultado[j];
          resultado[j]=aux;
        }
      }
    }
    return resultado;
  }
