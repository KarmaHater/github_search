$(document).ready(function() {
  var requestData = new HttpRequest();
  requestData.bindEvents();
});

// $.get( "https://api.github.com/users/kinduff/repos", function( data ) {
//   data = autoFill(data)
//   $('#title').select2({data: data, placeholder: "Select a Repo"})
// });

// function autoFill (data) {
//   return _.map( data, function(repo){
//     return repo.name
//   })
// }