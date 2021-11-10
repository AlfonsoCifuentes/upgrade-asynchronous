fetch("https://api.agify.io?name=michael")
  .then((respuesta) => {
    return respuesta.json();
  })
  .then((respuestaEnJson) => {
    console.log(respuestaEnJson);
  });
