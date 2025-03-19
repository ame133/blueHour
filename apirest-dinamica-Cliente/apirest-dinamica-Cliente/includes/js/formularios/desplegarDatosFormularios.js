function desplegarInformacionUnInstructor(objJSdatos){
	let estatus   = objJSdatos.status;
	let datos = objJSdatos.datos; //Sin comillas

	if(estatus == 200){
		//Creamos objetos de las cajas de texto
		let id                  = document.getElementById("id");
		let nombre              = document.getElementById("nombre");
		let usuario             = document.getElementById("usuario");
		let correo              = document.getElementById("correo");
		let cliente_desde       = document.getElementById("fecha_creacion");
		let ultima_modificacion = document.getElementById("fecha_modificacion");

		// ***************************************************************
		//Datos es una arreglo de objetos JavaScript pero solo trae uno 
		//por la consulta que estamos ejecutando
		// ***************************************************************
		let instructor = datos[0];

		id.value                  = instructor.id_instructor;
		nombre.value              = instructor.name_instructor;
		usuario.value             = instructor.username_instructor;
		correo.value              = instructor.email_instructor;
		cliente_desde.value       = instructor.date_create_instructor;
		ultima_modificacion.value = instructor.date_update_instructor;

		// **********************************************
		//Cada ves que encuentra a alguien ya sea por:
		// 1 La tabla del script anterior
		// 2 Con el Combo Box de busqueda
		// 3 Con el text de busqueda
		// Se debe actualizar el valor de la 
		// variable de session id_instructor
		sessionStorage.setItem('id_instructor', instructor.id_instructor);


		return null; 
	}else{

		let mensaje = {
			titulo: "ERROR",
			mensaje: "DATOS NO LOCALIZADOS"
		};
		return mensaje;

		//mensaje_titulo.innerText = "DATOS NO ENCONTRADOS";
		//mensaje_cuerpo.innerText = datos;						
		//mensaje.showModal();
	}					

}
