// var issues = new IssuesList(); 
// uncommenting out this line make double issues appear but leaving it comment out breaks that router. Don't know why? :/

var IssuesView = Backbone.View.extend({
  model: issues,
  el: '#issues-container',
  initialize: function() {
    this.model.on('reset', this.render, this);
    this.model.on('add', this.render, this);
  },
  render: function() {
    this.model.each(this.addIssue, this);
    return this;
  },
  addIssue: function(issue) {
    var issueView = new IssueView({model: issue});
    this.$el.append(issueView.render().el);
  }
});