const baseUrl = 'https://api.nationalize.io';

let inputs = document.getElementsByTagName("input");




let operarClick = function(evento){
  let inputValue = inputs[0].value

  fetch(baseUrl+"?name="+inputValue)
  .then((respuesta) => {
    return respuesta.json();
  })
  .then((drawResponse) => {
    console.log(drawResponse);

    let infoContainer = document.createElement("div");
    document.body.appendChild(infoContainer);
    let infoText = document.createElement("p");

    let paises = drawResponse.country;
    let [pais1, pais2, pais3] = paises;
    let probabilityPais1 = (pais1.probability * 100).toFixed(2); 
    let probabilityPais2 = (pais2.probability * 100).toFixed(2);
    let probabilityPais3 = (pais3.probability * 100).toFixed(2);

    console.log (pais1);

    infoText.innerHTML=("El nombre "+ drawResponse.name + " tiene un " + probabilityPais1 + "% de ser de " + pais1.country_id + ", un " + probabilityPais2 + "% de ser de " + pais2.country_id + ", y un " + probabilityPais3 + "% de ser de " + pais3.country_id);
    infoContainer.appendChild(infoText);


    let btnBorrarActual = document.createElement ("button");
	  btnBorrarActual.innerHTML="Borrar";
	  btnBorrarActual.setAttribute ("class", "botonBorraActual");
	  infoContainer.appendChild(btnBorrarActual);
	

	  let clickBotonBorrarActual = function(event) {			
		infoContainer.remove();
	   }
	
	  btnBorrarActual.addEventListener("click", clickBotonBorrarActual);



  });
    


}

document.querySelector("button").addEventListener("click", operarClick);





