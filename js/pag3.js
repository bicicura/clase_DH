window.addEventListener ('load', function () {

  var queryStringObject = new URLSearchParams(window.location.search)
  var idDeGenero = queryStringObject.get("idDeGenero")
console.log(idDeGenero);
  var nombreDeGenero = queryStringObject.get("nombreDeGenero")
console.log(nombreDeGenero);

  var url_seriesPorGenero = "https://api.themoviedb.org/3/discover/tv?api_key=b0f40cf877bd4ccb9f9f1975eb5ffa65&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false"

  fetch(url_seriesPorGenero)
  .then(function (respuesta) {
    return respuesta.json();
  })
  .then(function (informacion) {
    console.log(informacion)
      var arrayDeSeriesPorGenero = informacion.results
      var titulo = ""
      var url_imge = ""
      var serie  =  ""
      var sxGeneros = document.querySelector('.seriesPorGenero')
      for (var i = 0; i < arrayDeSeriesPorGenero.length; i++) {
        titulo = arrayDeSeriesPorGenero[i].name
        url_imge = "https://image.tmdb.org/t/p/original/" + arrayDeSeriesPorGenero[i].poster_path
        sxGeneros.innerHTML

      }



  })
  .catch(function (error) {
    console.log('Error: ' + error);
  })
})
