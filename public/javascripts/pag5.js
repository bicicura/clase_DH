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
  lis = `<div class="titulo"><h2 class="titulo">${titulo}</h2></div>`
  var arrayGenero = objetoSerie.genres
  var generos = " "
  for (var i = 0; i < arrayGenero.length; i++) {
    if (arrayGenero.length-1 === i) {
            generos += '<a href="/seriesXgenre?idDeGenero='+arrayGenero[i].id+'&nombreDeGenero='+arrayGenero[i].name+'">'+ arrayGenero[i].name + '</a>'
    }else {
      generos += '<a href="/seriesXgenre?idDeGenero='+arrayGenero[i].id+'&nombreDeGenero='+arrayGenero[i].name+'">'+ arrayGenero[i].name + '</a>' + ", "
    }
  }
  lis += '<h2 class="genero">Generos: '+generos+'</h2>'
  var sinopsis = objetoSerie.overview
  lis += '<li>'
  lis +=    '<h2>Sinopsis:</h2>'
  lis +=    '<div class= "sinopsis">'
  lis +=        '<p>'+sinopsis+'</p>'
  lis +=    '</div>'
  lis += '</li>'

  var fechaEstreno = objetoSerie.first_air_date
  lis += '<h2 class="genero">Fecha de estreno: '+fechaEstreno+'</h2>'
  var url_imge = "https://image.tmdb.org/t/p/original/" + objetoSerie.poster_path
  lis += '<img class= "img1" src="'+url_imge+'">'
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
  var arrayDeSeries = informacion.results
  var titulo = ""
  var url_imge = ""
  var serie  =  ""
  var sectionPopular = document.querySelector('.recomendados')
  for (var i = 0; i < arrayDeSeries.length; i++) {

      titulo = arrayDeSeries[i].name

      url_imge = "https://image.tmdb.org/t/p/original/" + arrayDeSeries[i].poster_path


      serie  =  `<li><a href="detail?idDeSerie=${arrayDeSeries[i].id}">`
      serie +=      `<img clas="poster" src='${url_imge}' alt="">`
      serie +=      `<div class="uk-position-center uk-panel"><h2>${titulo}</h2></div>`
      serie +=   `</a></li>`
      console.log(serie);
      sectionPopular.innerHTML += serie
}})
.catch(function (error) {
    console.log('Error: ' + error);
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
