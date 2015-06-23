function Repo () {}

Repo.prototype = {
  set: function (e, spinner, toolTipClass) {
    var owner = $("#owner").val();
    if ( owner ) {
      spinner.show()
      $.ajax({
         url: 'https://api.github.com/users/' + owner + '/repos',
         type: 'GET'
       })
      .success(function(data){
        spinner.hide();
        var data = this.autoFill(data);
        toolTip.alertBox("Repos loaded in select tag", toolTipClass, "success");
        $('#title').select2({data: data, placeholder: "Select a repo"})
      }.bind(this))
      .error(function() {
        spinner.hide();
        toolTip.alertBox("An error has occured.", toolTipClass, "danger");
      }.bind(this))
    }
    return false
  },
  autoFill: function(data) {
    return _.map( data, function(repo){
      return repo.name
    })
  }
}

var repoList = new Repo;