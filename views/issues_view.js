var issues = new IssuesList();

var IssuesView = Backbone.View.extend({
  model: issues,
  el: '#issues-container',
  initialize: function() {
    this.model.on('add', this.render, this);
    this.model.on('reset', this.render, this);
  },
  render: function() {
    console.log("I reset myself")
    console.log("or added something")
    this.model.each(this.addIssue, this);
    return this;
  },
  addIssue: function(issue) {
    var issueView = new IssueView({model: issue});
    this.$el.append(issueView.render().el);
  }
});