window.addEventListener('load',function(){
  var URLParams = new URLSearchParams(window.location.search);
  var queryString = URLParams.get('q');

  console.log(queryString);

  var url = "https://api.themoviedb.org/3/search/tv?api_key=b0f40cf877bd4ccb9f9f1975eb5ffa65&query=" + queryString + "&page=1";

fetch(url)
.then(function(respuesta){
  return respuesta.json()
})
.then(function(resultados) {
  console.log (resultados);
  var arrayDeResultados = resultados.results
  var titulo = ""
  var url_imge = ""
  var serie  =  ""
  var sectionResultados = document.querySelector('.resultados')
  for (var i = 0; i < arrayDeResultados.length; i++) {

  titulo = arrayDeResultados[i].name

  url_imge = "https://image.tmdb.org/t/p/original/" + arrayDeResultados[i].poster_path

  serie  =  `<li><a href="pagina5.html?idDeSerie=${arrayDeResultados[i].id}">`
  serie +=      `<img src='${url_imge}' alt="">`
  serie +=      `<div class="uk-position-center uk-panel"><h2>${titulo}</h2></div>`
  serie +=   `</a></li>`
  console.log(serie);
  sectionResultados.innerHTML += serie
console.log(sectionResultados);
    }

})
.catch (function (errores){
  console.log(errores);
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
}else {

}
}
})
