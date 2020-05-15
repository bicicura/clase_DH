window.addEventListener ('load', function() {
  var listadoURL = 'https://api.themoviedb.org/3/genre/tv/list?api_key=b0f40cf877bd4ccb9f9f1975eb5ffa65&language=es-AR'
  var list = document.querySelector('.listado')

  fetch(listadoURL)
	.then(function (respuesta){
		return respuesta.json();
	})
	.then(function (informacion){
    console.log(informacion)
    var id = informacion.id
  	for (var genero of informacion.genres) {
			list.innerHTML += `<div class="contenedor"><li><a href="pagina3.html?idDeGenero=${genero.id}&nombreDeGenero=${genero.name}">` + genero.name + `</a></li></div>`;
		}
	})
	.catch(function (error) {
		console.log("Error: " + error);
	})

  document.querySelector("form.buscar").onsubmit = function(e) {
    var busco = document.querySelector('.busqueda').value;
    console.log(busco);
  // var buscadorInput = document.querySelector("input")
  if (busco.length <= 3) {
    e.preventDefault()
    UIkit.notification({
      message: 'Ingrese mas de tres caracteres',
      status: 'warning',
      pos: 'top-right',
      timeout: 3000
  });
  }
  }
})
