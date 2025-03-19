function tabla(titulos, campos, tipos, datos, contenedor_THead, contenedor_TBody){

	desplegarTitulos(titulos, contenedor_THead);


	let r=1;
	let clase = "non";
	for(datosRenglon of datos){
		
		desplegarDatos(r, titulos, campos, tipos, datosRenglon, contenedor_TBody, clase);
		//contenedor.appendChild(tr);
		if(clase == "non"){
			clase = "par";
		}else{
			clase = "non";
		}

		r++;
	}	
	
}

function desplegarTitulos(titulos, thead){
	//console.log(titulos);
	let tr_titulos = document.createElement("tr");
	let th;
	for(let i=0; i<titulos.length; i++){
		th = document.createElement("th");
		let thText = document.createTextNode(titulos[i]);
		th.appendChild(thText);
		tr_titulos.appendChild(th);
	}
	thead.appendChild(tr_titulos);
}


function desplegarDatos(r, titulos, campos, tipos, datosRenglon, tbody, clase){
	//console.log("CAMPOS: ");
	//console.log(campos);
	//console.log("TIPOS: ");
	//console.log(tipos);	
	//console.log("DATOS: ");
	//console.log(datosRenglon);				
	
	let tr=document.createElement("tr");
	tr.classList.add(clase);

	let txt;
	let campo;
	let nodoTxt;
	let id;
	for(let i=0; i<tipos.length; i++){
		let td=document.createElement("td");

		switch(tipos[i]){
		case 1:
			campo = campos[i];
			txt = datosRenglon[campo];
			nodoTxt = document.createTextNode(txt);
			td.appendChild(nodoTxt);
			tr.appendChild(td);
			break;
		case 2:

			let btn = document.createElement("button");
			let img = document.createElement("img");
			let path = "/includes/img/mantenimiento.jpg";;
			img.setAttribute("src", path);
			img.classList.add("btn_img");
			
			btn.appendChild(img);

			//La llave primaria siempre debe estar en la primera posicion
			campo = campos[0];
			id0   = datosRenglon[campo];
			id    = `${i + "_" + r}`

			//btn.setAttribute("id", id);
			//btn.setAttribute("value", id0);

			img.setAttribute("id", id);
			img.setAttribute("value", id0);


			btn.classList.add('btn_mantenimiento');
			td.appendChild(btn);
			tr.appendChild(td);
			break;
		case 3:
			break;
		case 4:
			break;
		case 5:
			break;
		case 6:
			break;
		case 7:
			break;
		}


	}
	tbody.appendChild(tr);
	//
}
	
	