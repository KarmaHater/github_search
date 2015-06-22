var  IndexIsseusView = Backbone.View.extend({
  el: $('.container'),
  initialize: function() {
    this.template = _.template($('#index-page-templete').html());
    this.spinner = $("#spinner");
    this.reposToolTip = $("#reposToolTip");
    this.toolTip = $("#toolTip");
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
    this.spinner.show()
    $.ajax({
     url: 'https://api.github.com/users/' + $("#owner").val() + '/repos',
     type: 'GET'
     })
    .success(function(data){
      this.spinner.hide();
      var data = this.autoFill(data);
       toolTip.alertBox("Repos loaded in select tag", this.reposToolTip, "success");
      $('#title').select2({data: data, placeholder: "Select a repo"})
    }.bind(this))
    .error(function() {
      this.spinner.hide();
      toolTip.alertBox("An error has occured.", this.reposToolTip, "danger");
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
    var owner = $("#owner").val();
    var title = $("#title").val();
    if (owner && title) {
      $.ajax({
       url: 'https://api.github.com/repos/' + $("#owner").val() + '/'+ $("#title").val() +'/issues',
       type: 'GET'
       })
      .success(function(data){
        var issue = new Issue
        issue.createIssue(data);
        this.spinner.hide();
        this.reset();
        var message = data.length + " issues were found"
        toolTip.alertBox(message, this.toolTip, "success");
      }.bind(this))
      .error(function() {
        this.spinner.hide();
        this.reset();
        toolTip.alertBox("An error has occured.", this.toolTip, "danger");
      }.bind(this))
    } else {
      this.spinner.hide()
     toolTip.alertBox("Please enter a value.", $("#reposToolTip"), "warning");
    }
    return false
  },
  reset: function() {
    $("#GetResults")[0].reset();
    $("#title").select2({placeholder: "Select a repo"});
  }
})