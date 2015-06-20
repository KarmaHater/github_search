function HttpRequest () {
};

HttpRequest.prototype = {
  bindEvents: function () {

  $('#owner').on('mouseout', function() { 
    console.log("leave")
    this.getRepos()
  }.bind(this))

  $('#GetResults').on('submit', function(e) {
    var owner = $("#owner").val();
    var title = $("#title").val();
    this.getIssues(owner, title);
    return false;
    }.bind(this));
  },
  getRepos: function() {
    $.get( 'https://api.github.com/users/' + $("#owner").val() + '/repos', function( data ) {
     var data = this.autoFill(data)
      $('#title').select2({data: data, placeholder: "Select a Repo"})
    }.bind(this));
  },
  autoFill: function(data) {
    return _.map( data, function(repo){
      return repo.name
    })
  },
  getIssues: function (owner, title) {
    $.ajax({
     url: 'https://api.github.com/repos/' + owner + '/'+ title +'/issues',
     type: 'GET'
     })
    .success(function(data){
      this.createIssue(data);
    }.bind(this))
    .error(function() {
       alert("error happened");
    // data = [{number: 4, title: "shit", creationDate: "fuck"}]
    // this.createIssue(data);
    })
  },
  createIssue: function(data) {
    for (var i = data.length - 1; i >= 0; i--) {
      var num = data[i].number;
      var title = data[i].title;
      var createdAt = data[i].created_at;
      var issue = new Issue({number: data[i].number, title: title, createdAt: createdAt });
      this.createIssueList(issue);
    };
  },
  createIssueList: function(issue) {
    issues.add(issue);
  }
}

// example user name: kinduff
// example repo name: spree_reffiliate
// https://api.github.com/repos/kinduff/spree_reffiliate/issues
// public repos for autofill
// https://api.github.com/users/kinduff/repos

