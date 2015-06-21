var issues = new IssuesList();

var IssueView = Backbone.View.extend({
  model: new Issue(),
  tagName: 'tr',
  initialize: function() {
    this.template = _.template($('#issue-template').html());
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});

var IssuesView = Backbone.View.extend({
  model: issues,
  el: $('#issues-container'),
  initialize: function() {
    this.model.on('add', this.render, this);
    this.model.on('reset', this.render, this);
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