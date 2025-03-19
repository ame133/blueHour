function desplegarDatosComboBox(campos, contenedor, datos, seleccionar=""){

	let selected ="";
	if(seleccionar != ""){
		selected = "selected";
	}
	
	for(dato of datos){
		let value     = campos.value;
		let txt       = campos.contenido;

		let contenido = document.createTextNode(dato[txt]);
		let opcion    = document.createElement("option")

		opcion.value = dato[value];
		opcion.appendChild(contenido);
		if(opcion.value == seleccionar){
			opcion.setAttribute("selected", true);
		}
		contenedor.appendChild(opcion);
		
	}

}