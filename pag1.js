window.addEventListener ('load', function() {

  var URL = 'https://api.themoviedb.org/3/tv/popular?api_key=b0f40cf877bd4ccb9f9f1975eb5ffa65&language=en-US&page=1'

  fetch(URL)
  .then(function(response) {
   return response.json()
  })
  .then(function(information) {
   console.log(information);

   var titulo = information.results.id
   var foto = information.results.poster_path

   document.querySelector('h2.nombre').innerText = titulo
   document.querySelector('img.poster').src = foto





  })
  .catch(function(error) {
   console.log("Error: " + error);
  })

})
