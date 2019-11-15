window.addEventListener('load',function(){

var queryStringObject = new URLSearchParams(window.location.search)
var idDeSerie = queryStringObject.get("idDeSerie")
console.log(idDeSerie);
var URL = 'https://api.themoviedb.org/3/tv/'+idDeSerie+'?api_key=b0f40cf877bd4ccb9f9f1975eb5ffa65&language=es-AR';

var ulSerie = document.querySelector (".detalleSerie")
var lis = ""
var tit = ""

fetch(URL)
.then(function (respuesta) {
  return respuesta.json();
})
.then(function (objetoRespuesta) {
  console.log(objetoRespuesta);
  var objetoSerie = objetoRespuesta;
  var titulo = objetoSerie.name
  lis = `<h2 class="">${titulo}</h2>`
  var arrayGenero = objetoSerie.genres
  var generos = " "
  for (var i = 0; i < arrayGenero.length; i++) {
    generos += '<a href="pagina3.html?idDeSerie='+arrayGenero[i].id+'&titulo="'+titulo+'>'+ arrayGenero[i].name + '</a>' + ", "
    if (true) { 

    }// pensar como hacer para validar si es el ultimo elemento, si esto se cumple no poner ", "
  }
  lis += '<h2 class="genero">Generos: '+generos+'</h2>'
  var sinopsis = objetoSerie.overview
  lis += '<li class="uk-open">'
  lis +=    '<a class="uk-accordion-title" href="#">Sinopsis</a>'
  lis +=    '<div class="uk-accordion-content">'
  lis +=        '<p>'+sinopsis+'</p>'
  lis +=    '</div>'
  lis += '</li>'

  var url_imge = "https://image.tmdb.org/t/p/original/" + objetoSerie.poster_path
  lis += '<img src="'+url_imge+'">'
  var fechaEstreno = objetoSerie.first_air_date
  lis += '<h2 class="genero">Fecha de estreno: '+fechaEstreno+'</h2>'
  // trailer leer

  ulSerie.innerHTML = lis

})
.catch(function (errores) {
  console.log(errores);
})




})
