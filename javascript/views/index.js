var  IndexIsseusView = Backbone.View.extend({
  owner: $("#owner").val(),
  title: $("#title").val(),
  el: $('.container-1'),
  initialize: function() {
    this.template = _.template($('#index-page-templete').html());
    console.log("show view")
  },
  render: function() {
    this.$el.html(this.template)
    return this;
  },
  events: {
    "mouseout #owner" : "getRepos",
    "submit #GetResults" : "getIssues"
  },
  getRepos: function(e) {
    $("#spinner").show()
    $.ajax({
     url: 'https://api.github.com/users/' + $("#owner").val() + '/repos',
     type: 'GET'
     })
    .success(function(data){
      $("#spinner").hide()
      var data = this.autoFill(data)
       toolTip.success("Repos loaded in select tag", $("#reposToolTip"))
      $('#title').select2({data: data, placeholder: "Select a Repo"})
    }.bind(this))
    .error(function() {
      $("#spinner").hide()
      toolTip.danger("An error has occured.", $("#reposToolTip"))
    }.bind(this))
    return false
    new IssuesView().render({model: issues})
  },
  autoFill: function(data) {
    return _.map( data, function(repo){
      return repo.name
    })
  },
  getIssues: function (e) {
    $("#spinner").show()
    $.ajax({
     url: 'https://api.github.com/repos/' + $("#owner").val() + '/'+ $("#title").val() +'/issues',
     type: 'GET'
     })
    .success(function(data){
      var issue = new Issue
      issue.createIssue(data)
      $("#spinner").hide()
      this.reset()
      var message = data.length + " issues were found"
      toolTip.success(message, $("#toolTip"))
      this.createIssue(data);
    }.bind(this))
    .error(function() {
      $("#spinner").hide()
      this.reset()
      toolTip.danger("An error has occured.", $("#toolTip"))
    }.bind(this))
    return false
  },
  reset: function() {
    $("#GetResults")[0].reset()
    $("#title").select2({placeholder: "Select a customer"});
  },
})