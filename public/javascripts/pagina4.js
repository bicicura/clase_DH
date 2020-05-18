window.addEventListener('load',function(){
  var URLParams = new URLSearchParams(window.location.search);
  var queryString = URLParams.get('buscador');

  console.log(queryString);

  var url = "https://api.themoviedb.org/3/search/company?api_key=b0f40cf877bd4ccb9f9f1975eb5ffa65&query=querystring" + queryString + "&page=1";

fetch(url)
.then(function(respuesta){
  return respuesta.json()
})
.then(function(resultado) {
  console.log (resultado);

})
.catch (function (errores){
  console.log(errores);
})
})
