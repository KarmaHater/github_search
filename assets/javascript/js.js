  var GithubRepoIssues = Backbone.Model.extend({
      defaults: function () {
        return {
          number: '',
          title: '',
          creationDate:''
        }
      }
  });

  var GithubRepoList = Backbone.Collection.extend({
    model: GithubRepoIssues,
  });


  var repos = new GithubRepoList()

  $(document).ready(function () {
    var requestData = new HttpRequest();
    requestData.bindEvents()
  });

function HttpRequest (user) {
  this.user = user
  this.repos = []
};

HttpRequest.prototype = {
  bindEvents: function () {
    $('#GetResults').on('submit', function (e) {
      e.preventDefault();
      var owner = $("#owner").val();
      var title = $("#title").val();
      this.get(owner, title)
      }.bind(this));
    },
  get: function (owner, title) {
    $.ajax({
     url: 'https://api.github.com/repos/' + owner + '/'+ title +'/issues',
     type: 'GET',
     success: function(data) {
      debugger
     // Code after success 
     },
     error: function() {
       // alert("error");
     }
    });
  }
}

// https://api.github.com/repos/kinduff/spree_reffiliate/issues


