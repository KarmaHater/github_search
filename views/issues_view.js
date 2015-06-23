var issues = new IssuesList();

var IssuesView = Backbone.View.extend({
  model: issues,
  el: '#issues-container',
  initialize: function() {
    this.model.on('reset', this.poop, this);
    this.model.on('add', this.render, this);
  },
  render: function() {
    this.model.each(this.addIssue, this);
    return this;
  },
  poop: function(){
    debugger
  },
  addIssue: function(issue) {
    var issueView = new IssueView({model: issue});
    this.$el.append(issueView.render().el);
  }
});