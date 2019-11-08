window.addEventListener ('load', function() {

  var seriesURL = 'https://api.themoviedb.org/3/tv/popular?api_key=b0f40cf877bd4ccb9f9f1975eb5ffa65&language=es-AR&page=1'

  fetch(seriesURL)
  .then(function(response) {
   return response.json()
  })
  .then(function(information) {
   console.log(information);
    var arrayDeSeries = information.results
    // var titulo = ""
    // var foto = ""
    for (var i = 0; i < arrayDeSeries.length; i++) {

    titulo = arrayDeSeries[i].name
    console.log(titulo);
    foto = arrayDeSeries[i].poster_path
    console.log(foto);

    // document.querySelector('h3.tit').innerHTML = titulo
    // document.querySelector('img.poster').src = foto
    ` <h3 class="tit">${titulo} </h3>
      <img src="https://image.tmdb.org/t/p/original/${foto}" alt="" class="poster">
    `


    // var arrayDeSeries = information.results;
    //
    // for (var serie of arrayDeSeries) {
    //     seriesURL.innerHTML += `
    //       <li>
    //         <a>${seriesURL.name}</a>
    //         <div>
    //           <img src="${seriesURL.poster_path}" alt="">
    //         </div>
    //       </li>
    //     `
    //
    // }

}









})
  .catch(function(error) {
   console.log("Error: " + error);
  })

})
