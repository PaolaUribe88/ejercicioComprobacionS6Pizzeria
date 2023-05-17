 //VARIABLES GLOBALES DE LAS BEBIDAS
 var nomBebidas =['Martini', 'Capuccino', 'Latte', 'Mojito'];
 var costosBebida=[2.550, 1.370, 1350, 2.290 ]
 //VARIABLES GLOBALES DE LOS PLATOS
 var nomPlatos = ['Insalata de Riso', 'Insalata ai Cipolli', 'Insalata Caprese']
 var costoPlato = [6.750, 5.990, 8.250 ]
 //______________________BEBIDAS_____________________________
 function verificarMartini(){//MARTINI
    let elMartini = document.getElementById('martini');
    let elTituloItem = document.getElementById('cuentaItem');
    let laCuentaPrecio = document.getElementById(`cuentaPrecio`);

    if(elMartini.checked){
        let elParrafoTituloNuevo = document.createElement('p');
        elParrafoTituloNuevo.innerText= `${nomBebidas[0]}`;
        elTituloItem.appendChild(elParrafoTituloNuevo);

        let elParrafoCuentaNuevo = document.createElement('p');
        elParrafoCuentaNuevo.innerText =`${costosBebida[0]}`;
        laCuentaPrecio.appendChild(elParrafoCuentaNuevo);
    }else{
        elTituloItem.removeChild(elTituloItem.lastElementChild);
        laCuentaPrecio.removeChild(laCuentaPrecio.lastElementChild);
    }
 }
 function verificarCapuccino(){//CAPUCCINO
    let elCapuccino = document.getElementById('capuccino');
    let elTituloItem = document.getElementById('cuentaItem');
    let laCuentaPrecio = document.getElementById(`cuentaPrecio`);

    if(elCapuccino.checked){
        let elParrafoTituloNuevo = document.createElement('p');
        elParrafoTituloNuevo.innerText= `${nomBebidas[1]}`;
        elTituloItem.appendChild(elParrafoTituloNuevo);

        let elParrafoCuentaNuevo = document.createElement('p');
        elParrafoCuentaNuevo.innerText =`${costosBebida[1]}`;
        laCuentaPrecio.appendChild(elParrafoCuentaNuevo);
    }else{
        elTituloItem.removeChild(elTituloItem.lastElementChild);
        laCuentaPrecio.removeChild(laCuentaPrecio.lastElementChild);
    }
 }
 function verificarLatte(){//LATTE
    let elLatte = document.getElementById('latte');
    let elTituloItem = document.getElementById('cuentaItem');
    let laCuentaPrecio = document.getElementById(`cuentaPrecio`);
    if(elLatte.checked){
        let elParrafoTituloNuevo = document.createElement('p');
        elParrafoTituloNuevo.innerText= `${nomBebidas[2]}`;
        elTituloItem.appendChild(elParrafoTituloNuevo);

        let elParrafoCuentaNuevo = document.createElement('p');
        elParrafoCuentaNuevo.innerText =`${costosBebida[2]}`;
        laCuentaPrecio.appendChild(elParrafoCuentaNuevo);
    }else{
        elTituloItem.removeChild(elTituloItem.lastElementChild);
        laCuentaPrecio.removeChild(laCuentaPrecio.lastElementChild);
    }
 }
 function verificarMojito(){//MOJITO
    let elMojito = document.getElementById('mojito');
    let elTituloItem = document.getElementById('cuentaItem');
    let laCuentaPrecio = document.getElementById(`cuentaPrecio`);
    if(elMojito.checked){
        let elParrafoTituloNuevo = document.createElement('p');
        elParrafoTituloNuevo.innerText= `${nomBebidas[3]}`;
        elTituloItem.appendChild(elParrafoTituloNuevo);

        let elParrafoCuentaNuevo = document.createElement('p');
        elParrafoCuentaNuevo.innerText =`${costosBebida[3]}`;
        laCuentaPrecio.appendChild(elParrafoCuentaNuevo);
    }else{
        elTituloItem.removeChild(elTituloItem.lastElementChild);
        laCuentaPrecio.removeChild(laCuentaPrecio.lastElementChild);
    }
 }
 //_______________________Platos_________________
 function verificarRiso(){//RISO
    let elRiso = document.getElementById('riso');
    let elTituloItem = document.getElementById('cuentaItem');
    let laCuentaPrecio = document.getElementById(`cuentaPrecio`);
    if(elRiso.checked){
        let elParrafoTituloNuevo = document.createElement('p');
        elParrafoTituloNuevo.innerText= `${nomPlatos[0]}`;
        elTituloItem.appendChild(elParrafoTituloNuevo);

        let elParrafoCuentaNuevo = document.createElement('p');
        elParrafoCuentaNuevo.innerText =`${costoPlato[0]}`;
        laCuentaPrecio.appendChild(elParrafoCuentaNuevo);
    }else{
        elTituloItem.removeChild(elTituloItem.lastElementChild);
        laCuentaPrecio.removeChild(laCuentaPrecio.lastElementChild);
    }
 }
 function verificarCipollotti(){//CIPOLLOTTI
    let elRiso = document.getElementById('cipollotti');
    let elTituloItem = document.getElementById('cuentaItem');
    let laCuentaPrecio = document.getElementById(`cuentaPrecio`);
    if(elRiso.checked){
        let elParrafoTituloNuevo = document.createElement('p');
        elParrafoTituloNuevo.innerText= `${nomPlatos[1]}`;
        elTituloItem.appendChild(elParrafoTituloNuevo);

        let elParrafoCuentaNuevo = document.createElement('p');
        elParrafoCuentaNuevo.innerText =`${costoPlato[1]}`;
        laCuentaPrecio.appendChild(elParrafoCuentaNuevo);
    }else{
        elTituloItem.removeChild(elTituloItem.lastElementChild);
        laCuentaPrecio.removeChild(laCuentaPrecio.lastElementChild);
    }
 }
 function verificarCaprese(){//CAPRESE
    let elRiso = document.getElementById('caprese');
    let elTituloItem = document.getElementById('cuentaItem');
    let laCuentaPrecio = document.getElementById(`cuentaPrecio`);
    if(elRiso.checked){
        let elParrafoTituloNuevo = document.createElement('p');
        elParrafoTituloNuevo.innerText= `${nomPlatos[2]}`;
        elTituloItem.appendChild(elParrafoTituloNuevo);

        let elParrafoCuentaNuevo = document.createElement('p');
        elParrafoCuentaNuevo.innerText =`${costoPlato[2]}`;
        laCuentaPrecio.appendChild(elParrafoCuentaNuevo);
    }else{
        elTituloItem.removeChild(elTituloItem.lastElementChild);
        laCuentaPrecio.removeChild(laCuentaPrecio.lastElementChild);
    }
 }

function asignarEventos(){
     let elMartini = document.getElementById('martini');
     elMartini.addEventListener('click', verificarMartini);

     let elCapuccino = document.getElementById('capuccino');
     elCapuccino.addEventListener('click', verificarCapuccino);

     let elLatte = document.getElementById('latte');
     elLatte.addEventListener('click', verificarLatte);

     let elMojito = document.getElementById('mojito');
     elMojito.addEventListener('click',verificarMojito);
     //__________Platos______
     let elRiso = document.getElementById('riso');
     elRiso.addEventListener('click', verificarRiso);

     let elCipollotti = document.getElementById('cipollotti');
     elCipollotti.addEventListener('click', verificarCipollotti);

     let elCaprese = document.getElementById('caprese');
     elCaprese.addEventListener('click', verificarCaprese);
}