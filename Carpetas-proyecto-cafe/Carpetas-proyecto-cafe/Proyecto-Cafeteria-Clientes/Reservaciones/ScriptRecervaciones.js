/*//Calendario -------------------------------------------------------------------------------------------------------------------------------------------
var selectedDate = null;
var actual = new Date();

// Simular días ocupados
var diasOcupados = [
    new Date(actual.getFullYear(), actual.getMonth(), 2),
    new Date(actual.getFullYear(), actual.getMonth(), 5),
    new Date(actual.getFullYear(), actual.getMonth(), 10)
];

function mostrarCalendario(year, month) {
    var now = new Date(year, month - 1, 1);
    var last = new Date(year, month, 0);
    var primerDiaSemana = (now.getDay() == 0) ? 7 : now.getDay();
    var ultimoDiaMes = last.getDate();
    var dia = 0;
    var resultado = "<tr bgcolor='silver'>";
    var diaActual = 0;
    console.log(ultimoDiaMes);
    var last_cell = primerDiaSemana + ultimoDiaMes;

    for (var i = 1; i <= 42; i++) {
        if (i == primerDiaSemana) {
            dia = 1;
        }
        if (i < primerDiaSemana || i >= last_cell) {
            resultado += "<td>&nbsp;</td>";
        } else {
            var fecha = new Date(year, month - 1, dia);
            var claseDia = (esDiaOcupado(fecha) || fecha.getTime() < actual.getTime()) ? 'ocupado' : '';
            claseDia += (fecha.toDateString() === actual.toDateString()) ? ' hoy' : '';

            if (selectedDate && dia == selectedDate.getDate() && month == selectedDate.getMonth() + 1 && year == selectedDate.getFullYear())
                resultado += `<td class='seleccionada ${claseDia}' onclick='seleccionarFecha(${year}, ${month}, ${dia})'>${dia}</td>`;
            else
                resultado += `<td class='${claseDia}' onclick='seleccionarFecha(${year}, ${month}, ${dia})'>${dia}</td>`;
            dia++;
        }
        if (i % 7 == 0) {
            if (dia > ultimoDiaMes)
                break;
            resultado += "</tr><tr>\n";
        }
    }
    resultado += "</tr>";

    var meses = Array("Enero", "Febrero", "Marzo", "Abril", "Mayo",
        "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre",
        "Diciembre");

    nextMonth = month + 1;
    nextYear = year;

    if (month + 1 > 12) {
        nextMonth = 1;
        nextYear = year + 1;
    }

    prevMonth = month - 1;
    prevYear = year;

    if (month - 1 < 1) {
        prevMonth = 12;
        prevYear = year - 1;
    }

    document.getElementById("calendar").getElementsByTagName("caption")[0].innerHTML = `<div>${meses[month - 1]} / ${year}</div>
    <div>
    <a onclick='mostrarCalendario(${prevYear},${prevMonth})'>&lt;</a>
    <a onclick='mostrarCalendario(${nextYear},${nextMonth})'>&gt;</a>
    </div>`;
    document.getElementById("calendar").getElementsByTagName("tbody")[0].innerHTML = resultado;
}

function esDiaOcupado(fecha) {
    return diasOcupados.some(diaOcupado => diaOcupado.getTime() === fecha.getTime());
}

function seleccionarFecha(year, month, day) {
    var fechaSeleccionada = new Date(year, month - 1, day);
    if (fechaSeleccionada.getTime() < actual.getTime() || esDiaOcupado(fechaSeleccionada)) {
        // No hacer nada si se selecciona un día pasado o un día ocupado
        return;
    }

    selectedDate = fechaSeleccionada;
    console.log("Fecha seleccionada:", selectedDate);
    mostrarCalendario(year, month); // Actualizar el calendario para reflejar el cambio
    // Puedes hacer lo que quieras con la variable selectedDate aquí
}

mostrarCalendario(actual.getFullYear(), actual.getMonth() + 1);
//Fin Calendario
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var SeleccionarGen = document.createElement("option");
SeleccionarGen.value = null;
SeleccionarGen.text = "Seleccionar";
//Sucursales
var SucursalSeleccionada = null;
var sucursales = ["MainStreet", "StarMax","Mirador"];
var sucursal = document.getElementById("Sucursales");
sucursal.add(SeleccionarGen);
sucursales.forEach(function(opcion){
    var option = document.createElement("option");
    option.value = opcion; // Puedes establecer un valor diferente si lo necesitas
    option.text = opcion;
    sucursal.add(option);
});
sucursal.addEventListener("change", function(){
    SucursalSeleccionada = sucursal.value;
});
//Fin sucursales
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Hora
var horaSeleccionada = null;
var horasdisponibles = ["9:00","12:00","14:00","17:00","20:00"];
var hora = document.getElementById("Horas");
hora.add(SeleccionarGen);
horasdisponibles.forEach(function(option){
    var opcion = document.createElement("option");
    opcion.value = option;
    opcion.text = option;
    hora.add(opcion);
});
hora.addEventListener("change", function(){
    horaSeleccionada = hora.value;
});
//Mesa
var mesaSeleccionada
var mesasdisponibles = ["Mesa 2","Mesa 3","Mesa 5","Mesa 8","Mesa 15"];
var mesa = document.getElementById("Mesas");
mesa.add(SeleccionarGen);
mesasdisponibles.forEach(function(option){
    var opcion = document.createElement("option");
    opcion.value = option;
    opcion.text = option;
    mesa.add(opcion);
});
mesa.addEventListener("change", function(){
    mesaSeleccionada = mesa.value;
});*/

/**Funciones para cancelar******************************** */

 /*document.getElementById('btnConfirma').addEventListener('click', function() {
  // Obtiene los valores seleccionados
  var sucursal = document.getElementById('sucursal').value;
  var fecha = document.getElementById('fecha').value;
  var hora = document.getElementById('hora').value;
  var mesa = document.getElementById('mesa').value;

  // Genera un número de confirmación aleatorio
  var numConfirmacion = generateRandomConfirmationNumber();

  // Muestra el cuadro de diálogo con los datos seleccionados y el número de confirmación
  showDialog('Confirmación confirmada con éxito\nSucursal: ' + sucursal + '\nFecha: ' + fecha + '\nHora: ' + hora + '\nMesa: ' + mesa + '\nNúmero de Confirmación: ' + numConfirmacion);
});

document.getElementById('btnCancelar').addEventListener('click', function() {
  // Muestra el cuadro de diálogo para cancelar
  document.getElementById('cancelDialog').classList.remove('hidden');
});

document.getElementById('btnConfirmarCancelacion').addEventListener('click', function() {
  // Obtiene el número de orden ingresado
  var numeroOrden = document.getElementById('numeroOrden').value;

  // Muestra el cuadro de diálogo de cancelación exitosa con el número de orden
  showDialog('Cancelación exitosa de la orden número: ' + numeroOrden);

  // Oculta el cuadro de diálogo de cancelación
  document.getElementById('cancelDialog').classList.add('hidden');
});

// Inicializa el selector de fechas con flatpickr
flatpickr("#fecha", {
  enableTime: false,
  dateFormat: "Y-m-d",
  minDate: "today"
});

// Funciones del Calendario
var selectedDate = null;
var actual = new Date();
var diasOcupados = [];

function mostrarCalendario(year, month) {
  var now = new Date(year, month - 1, 1);
  var last = new Date(year, month, 0);
  var primerDiaSemana = (now.getDay() == 0) ? 7 : now.getDay();
  var ultimoDiaMes = last.getDate();
  var dia = 0;
  var resultado = "<tr bgcolor='silver'>";
  var diaActual = 0;
  var last_cell = primerDiaSemana + ultimoDiaMes;

  for (var i = 1; i <= 42; i++) {
    if (i == primerDiaSemana) {
      dia = 1;
    }
    if (i < primerDiaSemana || i >= last_cell) {
      resultado += "<td>&nbsp;</td>";
    } else {
      var fecha = new Date(year, month - 1, dia);
      var claseDia = (esDiaOcupado(fecha) || fecha.getTime() < actual.getTime()) ? 'ocupado' : '';
      claseDia += (fecha.toDateString() === actual.toDateString()) ? ' hoy' : '';

      if (selectedDate && dia == selectedDate.getDate() && month == selectedDate.getMonth() + 1 && year == selectedDate.getFullYear())
        resultado += `<td class='seleccionada ${claseDia}' onclick='seleccionarFecha(${year}, ${month}, ${dia})'>${dia}</td>`;
      else
        resultado += `<td class='${claseDia}' onclick='seleccionarFecha(${year}, ${month}, ${dia})'>${dia}</td>`;
      dia++;
    }
    if (i % 7 == 0) {
      if (dia > ultimoDiaMes)
        break;
      resultado += "</tr><tr>\n";
    }
  }
  resultado += "</tr>";

  var meses = Array("Enero", "Febrero", "Marzo", "Abril", "Mayo",
    "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre",
    "Diciembre");

  nextMonth = month + 1;
  nextYear = year;

  if (month + 1 > 12) {
    nextMonth = 1;
    nextYear = year + 1;
  }

  prevMonth = month - 1;
  prevYear = year;

  if (month - 1 < 1) {
    prevMonth = 12;
    prevYear = year - 1;
  }

  document.getElementById("calendar").getElementsByTagName("caption")[0].innerHTML = `<div>${meses[month - 1]} / ${year}</div>
  <div>
  <a onclick='mostrarCalendario(${prevYear},${prevMonth})'>&lt;</a>
  <a onclick='mostrarCalendario(${nextYear},${nextMonth})'>&gt;</a>
  </div>`;
  document.getElementById("calendar").getElementsByTagName("tbody")[0].innerHTML = resultado;
}

function esDiaOcupado(fecha) {
  return diasOcupados.some(diaOcupado => diaOcupado.getTime() === fecha.getTime());
}

function seleccionarFecha(year, month, day) {
  var fechaSeleccionada = new Date(year, month - 1, day);
  if (fechaSeleccionada.getTime() < actual.getTime() || esDiaOcupado(fechaSeleccionada)) {
    // No hacer nada si se selecciona un día pasado o un día ocupado
    return;
  }

  selectedDate = fechaSeleccionada;
  console.log("Fecha seleccionada:", selectedDate);
  mostrarCalendario(year, month); // Actualizar el calendario para reflejar el cambio
  // Puedes hacer lo que quieras con la variable selectedDate aquí
}

mostrarCalendario(actual.getFullYear(), actual.getMonth() + 1);
// Fin Calendario

// Selección de Sucursales
var SeleccionarGen = document.createElement("option");
SeleccionarGen.value = null;
SeleccionarGen.text = "Seleccionar";
var SucursalSeleccionada = null;
var sucursales = ["MainStreet", "StarMax", "Mirador"];
var sucursal = document.getElementById("sucursal");
sucursal.add(SeleccionarGen);
sucursales.forEach(function(opcion){
  var option = document.createElement("option");
  option.value = opcion;
  option.text = opcion;
  sucursal.add(option);
});
sucursal.addEventListener("change", function(){
  SucursalSeleccionada = sucursal.value;
});
// Fin Selección de Sucursales

// Selección de Hora
var horaSeleccionada = null;
var horasdisponibles = ["9:00","12:00","14:00","17:00","20:00"];
var hora = document.getElementById("hora");
hora.add(SeleccionarGen);
horasdisponibles.forEach(function(option){
  var opcion = document.createElement("option");
  opcion.value = option;
  opcion.text = option;
  hora.add(opcion);
});
hora.addEventListener("change", function(){
  horaSeleccionada = hora.value;
});
// Fin Selección de Hora

// Selección de Mesa
var mesaSeleccionada = null;
var mesasdisponibles = ["Mesa 2","Mesa 3","Mesa 5","Mesa 8","Mesa 15"];
var mesa = document.getElementById("mesa");
mesa.add(SeleccionarGen);
mesasdisponibles.forEach(function(option){
  var opcion = document.createElement("option");
  opcion.value = option;
  opcion.text = option;
  mesa.add(opcion);
});
mesa.addEventListener("change", function(){
  mesaSeleccionada = mesa.value;
});
// Fin Selección de Mesa

function showDialog(message) {
  var dialog = document.createElement('div');
  dialog.className = 'dialog';
  dialog.innerHTML = '<p>' + message + '</p>';

  var closeButton = document.createElement('button');
  closeButton.textContent = 'Cerrar';
  closeButton.addEventListener('click', function() {
    document.body.removeChild(dialog);
  });

  dialog.appendChild(closeButton);
  document.body.appendChild(dialog);
}

function generateRandomConfirmationNumber() {
  return Math.floor(100000 + Math.random() * 900000);
}
*/

document.body.style.overflowY = 'scroll';
//Calendario -------------------------------------------------------------------------------------------------------------------------------------------
var selectedDate = null;
var selectedYear = null;
var selectedMonth = null;
var selectedDay = null;
// Variables para almacenar las opciones originales de hora y mesa
var horasOriginales = ["9:00", "12:00", "14:00", "17:00", "20:00"];
var mesasOriginales = ["Mesa 2", "Mesa 3", "Mesa 5", "Mesa 8", "Mesa 15"];

var actual = new Date();

// Simular días ocupados
var diasOcupados = [
    new Date(actual.getFullYear(), actual.getMonth(), 2),
    new Date(actual.getFullYear(), actual.getMonth(), 5),
    new Date(actual.getFullYear(), actual.getMonth(), 10)
];

function mostrarCalendario(year, month) {
    var now = new Date(year, month - 1, 1);
    var last = new Date(year, month, 0);
    var primerDiaSemana = (now.getDay() == 0) ? 7 : now.getDay();
    var ultimoDiaMes = last.getDate();
    var dia = 0;
    var resultado = "<tr bgcolor='silver'>";
    var diaActual = 0;
    console.log(ultimoDiaMes);
    var last_cell = primerDiaSemana + ultimoDiaMes;

    // Restablecer las opciones originales de hora y mesa
    var horaSelect = document.getElementById("Horas");
    var mesaSelect = document.getElementById("Mesas");

    restablecerOpciones(horaSelect, horasOriginales);
    restablecerOpciones(mesaSelect, mesasOriginales);

    for (var i = 1; i <= 42; i++) {
        if (i == primerDiaSemana) {
            dia = 1;
        }
        if (i < primerDiaSemana || i >= last_cell) {
            resultado += "<td>&nbsp;</td>";
        } else {
            var fecha = new Date(year, month - 1, dia);
            var claseDia = (esDiaOcupado(fecha) || fecha.getTime() < actual.getTime()) ? 'ocupado' : '';
            claseDia += (fecha.toDateString() === actual.toDateString()) ? ' hoy' : '';

            if (selectedDate && dia == selectedDate.getDate() && month == selectedDate.getMonth() + 1 && year == selectedDate.getFullYear())
                resultado += `<td class='seleccionada ${claseDia}' onclick='seleccionarFecha(${year}, ${month}, ${dia})'>${dia}</td>`;
            else
                resultado += `<td class='${claseDia}' onclick='seleccionarFecha(${year}, ${month}, ${dia})'>${dia}</td>`;
            dia++;
        }
        if (i % 7 == 0) {
            if (dia > ultimoDiaMes)
                break;
            resultado += "</tr><tr>\n";
        }
    }
    resultado += "</tr>";

    var meses = Array("Enero", "Febrero", "Marzo", "Abril", "Mayo",
        "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre",
        "Diciembre");

    nextMonth = month + 1;
    nextYear = year;

    if (month + 1 > 12) {
        nextMonth = 1;
        nextYear = year + 1;
    }

    prevMonth = month - 1;
    prevYear = year;

    if (month - 1 < 1) {
        prevMonth = 12;
        prevYear = year - 1;
    }

    document.getElementById("calendar").getElementsByTagName("caption")[0].innerHTML = `<div>${meses[month - 1]} / ${year}</div>
    <div>
    <a onclick='mostrarCalendario(${prevYear},${prevMonth})'>&lt;</a>
    <a onclick='mostrarCalendario(${nextYear},${nextMonth})'>&gt;</a>
    </div>`;
    document.getElementById("calendar").getElementsByTagName("tbody")[0].innerHTML = resultado;
}

function esDiaOcupado(fecha) {
    return diasOcupados.some(diaOcupado => diaOcupado.getTime() === fecha.getTime());
}

function seleccionarFecha(year, month, day) {
    var fechaSeleccionada = new Date(year, month - 1, day);
    if (fechaSeleccionada.getTime() < actual.getTime() || esDiaOcupado(fechaSeleccionada)) {
        // No hacer nada si se selecciona un día pasado o un día ocupado
        return;
    }

    selectedDate = fechaSeleccionada;
    console.log("Fecha seleccionada:", selectedDate);
    mostrarCalendario(year, month); // Actualizar el calendario para reflejar el cambio
    // Puedes hacer lo que quieras con la variable selectedDate aquí
}

mostrarCalendario(actual.getFullYear(), actual.getMonth() + 1);

/*metodo para traer año mes y dia)*/

function seleccionarFecha(year, month, day) {
    var fechaSeleccionada = new Date(year, month - 1, day);
    if (fechaSeleccionada.getTime() < actual.getTime() || esDiaOcupado(fechaSeleccionada)) {
        // No hacer nada si se selecciona un día pasado o un día ocupado
        return;
    }

    selectedDate = fechaSeleccionada;

    // Imprimir año, mes y día por separado
    selectedYear = selectedDate.getFullYear();
    selectedMonth = selectedDate.getMonth() + 1;
    selectedDay = selectedDate.getDate();

    console.log("Año seleccionado:", selectedYear);
    console.log("Mes seleccionado:", selectedMonth);
    console.log("Día seleccionado:", selectedDay);

    mostrarCalendario(year, month); // Actualizar el calendario para reflejar el cambio
    // Puedes hacer lo que quieras con las variables selectedYear, selectedMonth y selectedDay aquí
}

function restablecerOpciones(selectElement, opcionesOriginales) {
    // Eliminar todas las opciones actuales
    selectElement.innerHTML = "";

    // Agregar las opciones originales
    opcionesOriginales.forEach(function (option) {
        var opcion = document.createElement("option");
        opcion.value = option;
        opcion.text = option;
        selectElement.add(opcion);
    });
}







//Fin Calendario
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var SeleccionarGen = document.createElement("option");
SeleccionarGen.value = null;
SeleccionarGen.text = "Seleccionar";
//Sucursales
var SucursalSeleccionada = null;
var sucursales = ["MainStreet", "StarMax","Mirador"];
var sucursal = document.getElementById("Sucursales");
sucursal.add(SeleccionarGen);
sucursales.forEach(function(opcion){
    var option = document.createElement("option");
    option.value = opcion; // Puedes establecer un valor diferente si lo necesitas
    option.text = opcion;
    sucursal.add(option);
});
sucursal.addEventListener("change", function(){
    SucursalSeleccionada = sucursal.value;
});
//Fin sucursales
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Hora
var horaSeleccionada = null;
var horasdisponibles = ["9:00","12:00","14:00","17:00","20:00"];
var hora = document.getElementById("Horas");
hora.add(SeleccionarGen);
horasdisponibles.forEach(function(option){
    var opcion = document.createElement("option");
    opcion.value = option;
    opcion.text = option;
    hora.add(opcion);
});
hora.addEventListener("change", function(){
    horaSeleccionada = hora.value;
});
//Mesa
var mesaSeleccionada
var mesasdisponibles = ["Mesa 2","Mesa 3","Mesa 5","Mesa 8","Mesa 15"];
var mesa = document.getElementById("Mesas");
mesa.add(SeleccionarGen);
mesasdisponibles.forEach(function(option){
    var opcion = document.createElement("option");
    opcion.value = option;
    opcion.text = option;
    mesa.add(opcion);
});
mesa.addEventListener("change", function(){
    mesaSeleccionada = mesa.value;
});








     ////
      // Función para generar un número de confirmación aleatorio
      function generarNumeroConfirmacion() {
          return Math.floor(Math.random() * 1000000) + 1;
      }

      // Función para mostrar el diálogo de confirmación
      function mostrarConfirmacion() {
          var confirmacionDialog = document.getElementById("confirmacionDialog");

          // Obtener datos seleccionados
          var sucursalSeleccionada = SucursalSeleccionada || "No seleccionada";
          var fechaSeleccionada = selectedDate ? selectedDate.toDateString() : "No seleccionada";
          var horaSeleccionada = hora.value || "No seleccionada";
          var mesaSeleccionada = mesa.value || "No seleccionada";

          // Generar número de confirmación aleatorio
          var numeroConfirmacion = generarNumeroConfirmacion();


          // Mostrar datos en el diálogo
          document.getElementById("datosSeleccionados").innerHTML =
            `<label id="suc" for="sucur">Sucursal</label> <p id="sucur">${sucursalSeleccionada}</p><br>
            <label id="fe" for="fec">Fecha</label> <p id="fec">${fechaSeleccionada}</p><br>
            <label id="hr" for="hor">Hora</label> <p id="hor">${horaSeleccionada}</p><br>
            <label id="me" for="mess">Mesa</label> <p id="mess">${mesaSeleccionada}</p><br>`;
        if(sucursalSeleccionada=="No seleccionada"||fechaSeleccionada=="No seleccionada"||horaSeleccionada=="No seleccionada"||mesaSeleccionada=="No seleccionada"){
            document.getElementById("numeroConfirmacion").textContent ="Error: No se ha seleccionado alguno de los campos"
            document.getElementById("numeroConfirmacion").style.color="red";
        }
        else{
          document.getElementById("numeroConfirmacion").textContent = numeroConfirmacion;
          document.getElementById("numeroConfirmacion").style.color="green";
        }
          //diseño datos p
          document.getElementById("sucur").style.color="green";
          document.getElementById("fec").style.color="green";
          document.getElementById("hor").style.color="green";
          document.getElementById("mess").style.color="green";
          confirmacionDialog.classList.remove("hidden");
          //diseño label
          document.getElementById("suc").style.color="rgb(106, 57, 27)";
          document.getElementById("fe").style.color="rgb(106, 57, 27)";
          document.getElementById("hr").style.color="rgb(106, 57, 27)";
          document.getElementById("me").style.color="rgb(106, 57, 27)";

          function extraerNumero(texto) {
            // Utilizamos una expresión regular para encontrar todos los números en el texto
            var numerosEncontrados = texto.match(/\d+/);
          
            // Verificamos si se encontraron números
            if (numerosEncontrados) {
              // Convertimos la cadena de dígitos a un número entero
              var numero = parseInt(numerosEncontrados[0], 10);
              return numero;
            } else {
              // En caso de que no se encuentren números, retornamos null o un valor predeterminado
              return null;
            }
          }
          
console.log(extraerNumero(mesaSeleccionada));



          async function obtenerIdReservacion() {
            let url = "http://apibluehour.com/reservaciones?columnas=idReservacion_reservacion";
            let init = {
              method: 'get',
              header: {
                'Content-Type': 'application/json'
              }
            };
          
            let objdatos = await fetchSynchronousGET(url, init);
          
            if (objdatos.status == 200) {
              let datos = objdatos.datos;
              let ids = datos.map(element => element.idReservacion_reservacion);
              return Math.max(...ids) + 1;
            }
          }
          
          // Función para obtener la id más alta y crear la estructura productData
          async function obtenerYCrearReservacionData() {
            // Obtener el número más alto de idReservacion_reservacion
            const idReservacion = await obtenerIdReservacion();
          
            // Crear la estructura productData con la idReservacion_reservacion obtenida
            const reservacionData = {
              idReservacion_reservacion: idReservacion,
              Fecha_reservacion: selectedYear+"-"+selectedMonth+"-"+selectedDay,
              Hora_reservacion: horaSeleccionada,
              Mesa_reservacion: extraerNumero(mesaSeleccionada),
              idCliente_reservacion: numeroConfirmacion,
              sucursal_reservacion: sucursalSeleccionada,
            };
          
            // Configurar las opciones de la solicitud POST
            const requestOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(reservacionData),
            };
          
            // Realizar la solicitud POST a la URL deseada
            const apiUrl = 'http://apibluehour.com/reservaciones'; // Reemplaza con la URL de tu API
            fetchSynchronousPOST(apiUrl, requestOptions)
              .then(response => {
                // Manejar la respuesta de la solicitud POST
                console.log(response);
                // Puedes realizar acciones adicionales aquí según la respuesta
              })
              .catch(error => {
                // Manejar errores de la solicitud POST
                console.error('Error al enviar la solicitud POST:', error);
              });
          }
          
          // Llamar a la función para obtener y crear reservacionData
          obtenerYCrearReservacionData();
        

    //////////////////////////
    var horaOptions = document.getElementById("Horas").options;
    var mesaOptions = document.getElementById("Mesas").options;

    // Encontrar y quitar la opción de hora seleccionada
    for (var i = 0; i < horaOptions.length; i++) {
        if (horaOptions[i].value === horaSeleccionada) {
            horaOptions[i].remove();
            break;
        }
    }

    // Encontrar y quitar la opción de mesa seleccionada
    for (var i = 0; i < mesaOptions.length; i++) {
        if (mesaOptions[i].value === mesaSeleccionada) {
            mesaOptions[i].remove();
            break;
        }
    }


      }

     










      // Función para cerrar el diálogo de confirmación
      function cerrarConfirmacion() {
          var confirmacionDialog = document.getElementById("confirmacionDialog");
          confirmacionDialog.classList.add("hidden");
      }

      // Función para mostrar el diálogo de cancelación
function mostrarCancelacion() {
    var cancelacionDialog = document.getElementById("cancelacionDialog");
    var numeroOrdenInput = document.getElementById("numeroOrdenInput");

    // Restablecer el contenido del campo de entrada
    numeroOrdenInput.value = "";

    cancelacionDialog.classList.remove("hidden");
}

      // Función para cerrar el diálogo de cancelación
      function cerrarCancelacion() {
          var cancelacionDialog = document.getElementById("cancelacionDialog");
          cancelacionDialog.classList.add("hidden");
      }

      // Función para mostrar el diálogo de cancelación exitosa
      function mostrarCancelacionExitosa(numeroOrden) {
          var cancelacionExitosaDialog = document.getElementById("cancelacionExitosaDialog");
          document.getElementById("numeroOrdenCancelacion").textContent = numeroOrden;
          document.getElementById("numeroOrdenCancelacion").style.color="red";
          cancelacionExitosaDialog.classList.remove("hidden");
      }

      // Función para cerrar el diálogo de cancelación exitosa
      function cerrarCancelacionExitosa() {
          var cancelacionExitosaDialog = document.getElementById("cancelacionExitosaDialog");
          cancelacionExitosaDialog.classList.add("hidden");
      }

      // Agrega un event listener al botón de confirmación
      var confirmarBtn = document.getElementById("confirmarBtn");
      confirmarBtn.addEventListener("click", function() {
          mostrarConfirmacion();
      });

      // Agrega un event listener al botón de cerrar en el diálogo de confirmación
      var cerrarDialogBtn = document.getElementById("cerrarDialogBtn");
      cerrarDialogBtn.addEventListener("click", function() {
          cerrarConfirmacion();
      });

      // Agrega un event listener al botón de cancelar
      var cancelarBtn = document.getElementById("cancelarBtn");
      cancelarBtn.addEventListener("click", function() {
          mostrarCancelacion();
      });

      // Agrega un event listener al botón de cerrar en el diálogo de cancelación
      var cerrarCancelacionDialogBtn = document.getElementById("cerrarCancelacionDialogBtn");
      cerrarCancelacionDialogBtn.addEventListener("click", function() {
          cerrarCancelacion();
      });

      // Agrega un event listener al botón de confirmar cancelación
      var confirmarCancelacionBtn = document.getElementById("confirmarCancelacionBtn");
      confirmarCancelacionBtn.addEventListener("click", function() {
          var numeroOrden = document.getElementById("numeroOrdenInput").value;
          if (numeroOrden) {
              cerrarCancelacion();
              mostrarCancelacionExitosa(numeroOrden);
          }
      });

      // Agrega un event listener al botón de cerrar en el diálogo de cancelación exitosa
      var cerrarCancelacionExitosaDialogBtn = document.getElementById("cerrarCancelacionExitosaDialogBtn");
      cerrarCancelacionExitosaDialogBtn.addEventListener("click", function() {
          cerrarCancelacionExitosa();
      });





