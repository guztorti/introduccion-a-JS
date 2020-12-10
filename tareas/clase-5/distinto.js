document.querySelector("#boton-calcular").onclick = function(){
    let segundos = 0;
    let minutos = 0;
    let horas = 0;

    let entero = (parseInt((Number(document.querySelector('#clase-1-segundos').value) +
                Number(document.querySelector('#clase-2-segundos').value) +
                Number(document.querySelector('#clase-3-segundos').value) +
                Number(document.querySelector('#clase-4-segundos').value) +
                Number(document.querySelector('#clase-5-segundos').value))/60));
    let decimal =(Number(document.querySelector('#clase-1-segundos').value) +
                Number(document.querySelector('#clase-2-segundos').value) +
                Number(document.querySelector('#clase-3-segundos').value) +
                Number(document.querySelector('#clase-4-segundos').value) +
                Number(document.querySelector('#clase-5-segundos').value))/60;

    segundos =  Math.round((decimal - entero) * 60 );

    minutos = parseInt((Number(document.querySelector('#clase-1-segundos').value) +
                Number(document.querySelector('#clase-2-segundos').value) +
                Number(document.querySelector('#clase-3-segundos').value) +
                Number(document.querySelector('#clase-4-segundos').value) +
                Number(document.querySelector('#clase-5-segundos').value))/60 );

    entero = (parseInt((Number(document.querySelector('#clase-1-minutos').value) +
                Number(document.querySelector('#clase-2-minutos').value) +
                Number(document.querySelector('#clase-3-minutos').value) +
                Number(document.querySelector('#clase-4-minutos').value) +
                Number(document.querySelector('#clase-5-minutos').value))/60));
    decimal =(Number(document.querySelector('#clase-1-minutos').value) +
                Number(document.querySelector('#clase-2-minutos').value) +
                Number(document.querySelector('#clase-3-minutos').value) +
                Number(document.querySelector('#clase-4-minutos').value) +
                Number(document.querySelector('#clase-5-minutos').value))/60;

    minutos += Math.round((decimal - entero)*60);

    horas = parseInt((Number(document.querySelector('#clase-1-minutos').value) +
                Number(document.querySelector('#clase-2-minutos').value) +
                Number(document.querySelector('#clase-3-minutos').value) +
                Number(document.querySelector('#clase-4-minutos').value) +
                Number(document.querySelector('#clase-5-minutos').value))/60 );

    horas +=    Number(document.querySelector('#clase-1-horas').value) +
                Number(document.querySelector('#clase-2-horas').value) +
                Number(document.querySelector('#clase-3-horas').value) +
                Number(document.querySelector('#clase-4-horas').value) +
                Number(document.querySelector('#clase-5-horas').value);

    document.querySelector('#suma-total').textContent = horas + ':' + minutos + ':' + segundos;
    }
    