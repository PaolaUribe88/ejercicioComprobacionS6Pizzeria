 //VARIABLES GLOBALES DE LAS BEBIDAS
var nombreBebida=["Martini", "Capuccino", "Latte", "Mojito"];
var costoBebida=[2.550, 1.370, 1.350, 2.290];
var arregloIdProductosAdquiridos=[];
var totalAPagar = 0;
 //VARIABLES GLOBALES DE LA COMIDA
var nombreComida=["Insalata de riso", "Insalata ai cipollotti", "Insalata caprese"];
var costoComida=[6.750, 5.990, 8.250];
var arregloIdProductosAdquiridosComida=[];
var totalAPagarComida = 0;


function calcularTotalAPagar(){
    // se inicializa el total a pagar cada vez que se llame el método para que tenga en cuenta solamente los valores del arreglo
    totalAPagar = 0;
    for(let i=0; i<arregloIdProductosAdquiridos.length; i++){
        let idInformacionBebida = arregloIdProductosAdquiridos[i];

        totalAPagar = totalAPagar + Number(costoBebida[idInformacionBebida]);

    }
    return totalAPagar;
}
// CALCULA EL TOTAL A PAGAR EN LA COMIDA
function calcularTotalAPagarComida(){
    // se inicializa el total a pagar cada vez que se llame el método para que tenga en cuenta solamente los valores del arreglo
    totalAPagarComida = 0;
    for(let i=0; i<arregloIdProductosAdquiridosComida.length; i++){
        let idInformacionComida = arregloIdProductosAdquiridosComida[i];

        totalAPagarComida = totalAPagarComida + Number(costoComida[idInformacionComida]);
    }
    return totalAPagarComida;
}

//VERIFICAMOS LOS ELEMENTOS DE LAS BEBIDAS
function verificarCheck(elemento){      
    let laCuentaItem = document.getElementById('cuentaItem');
    let laCuentaPrecio = document.getElementById('cuentaPrecio');
    let laCajaTotalAPagar = document.getElementById('cajaTotalAPagar');

    if(elemento.target.checked){
        arregloIdProductosAdquiridos.push(elemento.target.value);
        // muestro en la cuenta el último elemento agregado en el arreglo arregloIdProductosAdquiridos
        let idLaBebidaSeleccionada = arregloIdProductosAdquiridos[arregloIdProductosAdquiridos.length -1];
        let nombreBebidaSeleccionada = nombreBebida[idLaBebidaSeleccionada];
        let costoBebidaSeleccionada = costoBebida[idLaBebidaSeleccionada];

        let elParrafoNombreNuevo = document.createElement('p');
        elParrafoNombreNuevo.innerText =  nombreBebidaSeleccionada;
        laCuentaItem.appendChild(elParrafoNombreNuevo);

        let elParrafoCostoNuevo = document.createElement('p');
        elParrafoCostoNuevo.innerText = costoBebidaSeleccionada;
        laCuentaPrecio.appendChild(elParrafoCostoNuevo);  
    }
    else{
        // identificar el id del producto des-seleccionado
        let idProductoDeseleccionado = elemento.target.value;
        // identificamos el indice del elemento desseleccionado en el arreglo arregloIdProductosAdquiridos
        let indiceElementoDeseleccionado = arregloIdProductosAdquiridos.indexOf(idProductoDeseleccionado);

        // Elimino el elemento desseleccionado del arreglo arregloIdProductosAdquiridos usando splice
        arregloIdProductosAdquiridos.splice(indiceElementoDeseleccionado,1);
  
        // Elimino de la sección de la cuenta el elemento desseleccionado
        laCuentaItem.removeChild(laCuentaItem.children[indiceElementoDeseleccionado]);
        laCuentaPrecio.removeChild(laCuentaPrecio.children[indiceElementoDeseleccionado]);

    }

    let elTotal = calcularTotalAPagar()
    laCajaTotalAPagar.innerText = `$`+elTotal.toFixed(3);
}
//VERIFICAMOS LOS ELEMENTOS DE LA COMIDA
function verificarCheckComida(elemento){
    // CREAMOS EL ELEMENTO LLAMADO POR ID DEL HTML CUENTAITEMCOMIDA
    let laCuentaItemComida = document.getElementById('cuentaItemComida');
    // CREAMOS EL ELEMENTO LLAMADO POR ID DEL HTML CUENTAPRECIOCOMIDA
    let laCuentaPrecioComida = document.getElementById('cuentaPrecioComida');
    // CREAMOS EL ELEMENTO LLAMADO POR ID DEL HTML CAJATOTALAPAGARCOMIDA
    let laCajaTotalAPagarComida = document.getElementById('cajaTotalAPagarComida');

    if(elemento.target.checked){
        arregloIdProductosAdquiridosComida.push(elemento.target.value);
        // muestro en la cuenta el último elemento agregado en el arreglo arregloIdProductosAdquiridos
        let idLaComidaSeleccionada = arregloIdProductosAdquiridosComida[arregloIdProductosAdquiridosComida.length -1];
        let nombreComidaSeleccionada = nombreComida[idLaComidaSeleccionada];
        let costoComidaSeleccionada = costoComida[idLaComidaSeleccionada];

        let elParrafoNombreNuevoComida = document.createElement('p');
        elParrafoNombreNuevoComida.innerText =  nombreComidaSeleccionada;
        laCuentaItemComida.appendChild(elParrafoNombreNuevoComida);

        let elParrafoCostoNuevoComida = document.createElement('p');
        elParrafoCostoNuevoComida.innerText = costoComidaSeleccionada;
        laCuentaPrecioComida.appendChild(elParrafoCostoNuevoComida);
        
    }
    else{
        // identificar el id del producto des-seleccionado
        let idProductoDeseleccionadoComida = elemento.target.value;
        // identificamos el indice del elemento desseleccionado en el arreglo arregloIdProductosAdquiridos
        let indiceElementoDeseleccionadoComida = arregloIdProductosAdquiridosComida.indexOf(idProductoDeseleccionadoComida);
        // Elimino el elemento desseleccionado del arreglo arregloIdProductosAdquiridos usando splice
        arregloIdProductosAdquiridosComida.splice(indiceElementoDeseleccionadoComida,1);
        // Elimino de la sección de la cuenta el elemento desseleccionado
        laCuentaItemComida.removeChild(laCuentaItemComida.children[indiceElementoDeseleccionadoComida]);
        laCuentaPrecioComida.removeChild(laCuentaPrecioComida.children[indiceElementoDeseleccionadoComida]);

    }

    let elTotalComida = calcularTotalAPagarComida();
    laCajaTotalAPagarComida.innerText =`$`+elTotalComida.toFixed(3);
}

function asignarEventos(){
    // CREAMOS EL ELEMENTO LLAMADO DEL DOM MARTINI
    let elCheckMartini = document.getElementById('martini');
    //LE ASIGNAMOS UN EVENTO QUE AL HACER CLICK HAGA LO QUE EN 
    //VERIFICARCHECK CREEMOS
    elCheckMartini.addEventListener('click', verificarCheck);
    // CREAMOS EL ELEMENTO LLAMADO DEL DOM CAPUCCINO
    let elCheckCapuccino = document.getElementById('capuccino');
    elCheckCapuccino.addEventListener('click', verificarCheck);

    let elCheckLatte = document.getElementById('latte');
    elCheckLatte.addEventListener('click', verificarCheck);

    let elCheckMojito = document.getElementById('mojito');
    elCheckMojito.addEventListener('click', verificarCheck);

    let elCheckRiso = document.getElementById('riso');
    elCheckRiso.addEventListener('click', verificarCheckComida);

    let elCheckCipollotti = document.getElementById('cipollotti');
    elCheckCipollotti.addEventListener('click', verificarCheckComida);

    let elCheckCaprese = document.getElementById('caprese');
    elCheckCaprese.addEventListener('click', verificarCheckComida);
    
}