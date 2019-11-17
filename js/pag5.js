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
    if (arrayGenero.length-1 === i) {
            generos += '<a href="pagina3.html?idDeGenero='+arrayGenero[i].id+'&nombreDeGenero='+arrayGenero[i].name+'">'+ arrayGenero[i].name + '</a>'
    }else {
      generos += '<a href="pagina3.html?idDeGenero='+arrayGenero[i].id+'&nombreDeGenero='+arrayGenero[i].name+'">'+ arrayGenero[i].name + '</a>' + ", "
    }
  }
  lis += '<h2 class="genero">Generos: '+generos+'</h2>'
  var sinopsis = objetoSerie.overview
  lis += '<li>'
  lis +=    '<h2>Sinopsis:</h2>'
  lis +=    '<div>'
  lis +=        '<p>'+sinopsis+'</p>'
  lis +=    '</div>'
  lis += '</li>'

  var fechaEstreno = objetoSerie.first_air_date
  lis += '<h2 class="genero">Fecha de estreno: '+fechaEstreno+'</h2>'
  var url_imge = "https://image.tmdb.org/t/p/original/" + objetoSerie.poster_path
  lis += '<img src="'+url_imge+'">'
  // trailer leer

  ulSerie.innerHTML = lis

})
.catch(function (errores) {
  console.log(errores);
})

var recomendaciones = 'https://api.themoviedb.org/3/tv/'+idDeSerie+'/recommendations?api_key=b0f40cf877bd4ccb9f9f1975eb5ffa65&language=en-US&page=1'

fetch(recomendaciones)
.then(function (respuesta) {
  return respuesta.json()
})
.then(function(informacion){
  console.log(informacion);
  
})
.catch(function (error) {
    console.log('Error: ' + error);
})
})
