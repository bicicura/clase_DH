window.addEventListener ('load', function() {

  var popuURL = 'https://api.themoviedb.org/3/tv/popular?api_key=b0f40cf877bd4ccb9f9f1975eb5ffa65&language=es-AR&page=1'
  var titulo = ""

  fetch(popuURL)
  .then(function(response) {
   return response.json()
  })
  .then(function(information) {
   console.log(information);
    var arrayDeSeries = information.results
    var titulo = ""
    var url_imge = ""
    var serie  =  ""
    var sectionPopular = document.querySelector('.populares')
    for (var i = 0; i < arrayDeSeries.length; i++) {

        titulo = arrayDeSeries[i].name

        url_imge = "https://image.tmdb.org/t/p/original/" + arrayDeSeries[i].poster_path


        serie  =  `<li><a href="pagina5.html?idDeSerie=${arrayDeSeries[i].id}">`
        serie +=      `<img class="poster" src='${url_imge}' alt="">`
        serie +=      `<div class="uk-position-center uk-panel"><h2>${titulo}</h2></div>`
        serie +=   `</a></li>`
        console.log(serie);
        sectionPopular.innerHTML += serie

}})
.catch(function(error) {
  console.log("Error: " + error);
})




var topURL = 'https://api.themoviedb.org/3/tv/top_rated?api_key=b0f40cf877bd4ccb9f9f1975eb5ffa65&language=es-AR&page=1'

fetch(topURL)
.then(function(response) {
 return response.json()
})
.then(function(information) {
 console.log(information);
  var sectionTop = document.querySelector('.top')
  var arrayDeSeriesTop = information.results
  for (var i = 0; i < arrayDeSeriesTop.length; i++) {

     titulo = arrayDeSeriesTop[i].name

     url_imge = "https://image.tmdb.org/t/p/original/" + arrayDeSeriesTop[i].poster_path


     serie  =  `<li><a href="pagina5.html?idDeSerie=${arrayDeSeriesTop[i].id}">`
     serie +=      `<img class="poster" src='${url_imge}' alt="">`
     serie +=      `<div class="uk-position-center uk-panel"><h2>${titulo}</h2></div>`
     serie +=   `</li></a>`
     console.log(serie);
     sectionTop.innerHTML += serie

}


})
.catch(function(error) {
 console.log("Error: " + error);
})


var hoyURL = 'https://api.themoviedb.org/3/tv/airing_today?api_key=b0f40cf877bd4ccb9f9f1975eb5ffa65&language=es-AR&page=1'

fetch(hoyURL)
.then(function(response) {
 return response.json()
})
.then(function(information) {
 console.log(information);
  var sectionHoy = document.querySelector('.hoy')
  var arrayDeSeriesHoy = information.results
  for (var i = 0; i < arrayDeSeriesHoy.length; i++) {

     titulo = arrayDeSeriesHoy[i].name

     url_imge = "https://image.tmdb.org/t/p/original/" + arrayDeSeriesHoy[i].poster_path


     serie  =  `<li><a href="pagina5.html?idDeSerie=${arrayDeSeriesHoy[i].id}">`
     serie +=      `<img class="poster" src='${url_imge}' alt="">`
     serie +=      `<div class="uk-position-center uk-panel"><h2>${titulo}</h2></div>`
     serie +=   `</li></a>`
     console.log(serie);
     sectionHoy.innerHTML += serie

}


})
.catch(function(error) {
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
}else {

}
}

})
