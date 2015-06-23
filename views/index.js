var  IndexIsseusView = Backbone.View.extend({
  el: $('.container'),
  initialize: function() {
    this.template = _.template($('#index-page-templete').html());
    this.spinner = $("#spinner");
    this.reposToolTip = $("#reposToolTip");
    this.toolTip = $("#toolTip");
    var url = null;
  },
  render: function() {
    this.$el.html(this.template)
    return this;
  },
  events: {
    "mouseleave #owner" : "getRepos",
    "submit #GetResults" : "getIssues",
    "click #next" : "next",
    "click #pervious" : "pervious"
  },
  getRepos: function(e) {
      var owner = $("#owner").val();
    if ( owner ) {
      this.spinner.show()
      $.ajax({
       url: 'https://api.github.com/users/' + owner + '/repos',
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
    }
  },
  autoFill: function(data) {
    return _.map( data, function(repo){
      return repo.name
    })
  },
  getIssues: function (e) {
    this.spinner.show()
    var owner = $("#owner").val();
    var title = $("#title").val();
    url = 'https://api.github.com/repos/' + owner + '/'+ title +'/issues?per_page=5&page='
    if ( owner && title ) {
      $.ajax({
       url: 'https://api.github.com/repos/' + owner + '/'+ title +'/issues?per_page=5&page=1',
       type: 'GET'
       })
      .success(function(data){
        var issue = new Issue
        issue.createIssue(data);
        this.resetForm();
        new IssuesView().render({model: issues})
        var message = data.length + " issues were found"
        toolTip.alertBox(message, this.toolTip, "success");
      }.bind(this))
      .error(function() {
        this.resetForm();
        toolTip.alertBox("An error has occured.", this.toolTip, "danger");
      }.bind(this))
    } else {
      this.spinner.hide()
     toolTip.alertBox("Please enter a value.", $("#reposToolTip"), "warning");
    }
    return false
  },
  resetForm: function() {
    this.spinner.hide();
    $("#GetResults")[0].reset();
    $("#title").select2({placeholder: "Select a repo"});
  },
  next: function() { 
    navigate.next(url);
  },
  pervious: function() {
    navigate.pervious(url);
  }
})
