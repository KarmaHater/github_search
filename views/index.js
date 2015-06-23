var  IndexIsseusView = Backbone.View.extend({
  el: $('.container'),
  initialize: function() {
    this.template = _.template($('#index-page-templete').html());
    this.spinner = $("#spinner");
    this.reposToolTip = $("#reposToolTip");
    this.toolTip = $("#toolTip");
    var url = null;
    var page_num = 1;
  },
  render: function() {
    this.$el.html(this.template)
    return this;
  },
  events: {
    "mouseleave #owner" : "getRepos",
    "submit #GetResults" : "getIssues",
    "click #next" : "next"
  },
  getRepos: function(e) {
      var owner = $("#owner").val();
    if ( owner ) {
      this.spinner.show()
      $.ajax({
       url: 'https://api.github.com/users/' + owner + '/repos?per_page=5&page=',
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
    url = 'https://api.github.com/repos/' + owner + '/'+ title +'/issues'
    if ( owner && title ) {
      $.ajax({
       url: 'https://api.github.com/repos/' + owner + '/'+ title +'/issues?per_page=5&page=1',
       type: 'GET'
       })
      .success(function(data){
        var issue = new Issue
        issue.createIssue(data);
        this.reset();
        var message = data.length + " issues were found"
        toolTip.alertBox(message, this.toolTip, "success");
      }.bind(this))
      .error(function() {
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
    this.spinner.hide();
    $("#GetResults")[0].reset();
    $("#title").select2({placeholder: "Select a repo"});
  },
  next: function(){
    url = url + page
    page_num = page_num
    debugger
    $.ajax({
     url: url,
     type: 'GET'
     })
    .success(function(data){
      if(data) {

      } else {
        toolTip.alertBox("There are no more repos.", $("#toolTip"), "warning");
      }
    }.bind(this))
    .error(function() {
      toolTip.alertBox("An error has occured.", this.toolTip, "danger");
    }.bind(this))
  },
  pervious: function(){
    if (page === 0){
      toolTip.alertBox("You are on page one.", $("#toolTip"), "warning");
    } else {
      url = url + page
      page_num = page_num
      debugger
      $.ajax({
       url: url,
       type: 'GET'
       })
      .success(function(data){
      }.bind(this))
      .error(function() {
        toolTip.alertBox("An error has occured.", this.toolTip, "danger");
      }.bind(this))
    }
  }
})

// https://api.github.com/repos/' + $("#owner").val() + '/'+ $("#title").val() +'/issues
// https://api.github.com/users/kinduff/repos