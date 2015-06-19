function HttpRequest () {
  this.owner = $("#owner")
  this.title = $("#title")
};

HttpRequest.prototype = {
  bindEvents: function () {

  $('#owner').on('mouseout', function() { 
    console.log("leave")
    this.autoFill()
  }.bind(this))

  $('#GetResults').on('submit', function(e) {
    var owner = $("#owner").val();
    var title = $("#title").val();
    this.getIssues(owner, title);
    return false;
    }.bind(this));
  },
  autoFill: function() {
    $.get( 'https://api.github.com/users/' + $("#owner").val() + '/repos', function( data ) {
      // data = this.getRepos(data)
     var data = _.map( data, function(repo){
        return repo.name
      })
     debugger
      $('#title').select2({data: data, placeholder: "Select a Repo"})
    });
  },
  // getRepos: function(data) {
  //   return _.map( data, function(repo){
  //     return repo.name
  //   })
  // },
  getIssues: function (owner, title) {
    $.ajax({
     url: 'https://api.github.com/repos/' + owner + '/'+ title +'/issues',
     type: 'GET',
     success: function(data) {
      this.createIssue(data);
     },
     error: function() {
       alert("error happened");
     }
   })
  },
  createIssue: function(data) {
    for (var i = data.length - 1; i >= 0; i--) {
      var num = data[i].number;
      var title = data[i].title;
      var createdAt = data[i].created_at;
      var issue = new Issue({number: data[i].number, title: title, createdDate: createdAt });
      this.createIssueList(issue);
    };
  },
  createIssueList: function(issue) {
    console.log(issue.toJSON())
    issues.add(issue);
    console.log(issues.toJSON())
  }
}

// example user name: kinduff
// example repo name: spree_reffiliate
// https://api.github.com/repos/kinduff/spree_reffiliate/issues
// public repos for autofill
// https://api.github.com/users/kinduff/repos

