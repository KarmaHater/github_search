var issues = new IssuesList([issue_two, issue_three, issue_four,issue_five, issue_one]);

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
    console.log("creating issues view")
    this.model.on('add', this.render, this);
  },
  render: function() {
    var self = this;
    self.$el.html('');
    _.each(this.model.models, function(issue, i) {
      self.$el.append((new IssueView({model: issue})).render().$el);
    });
      return this;
  }
});

var ShowIssuesView = Backbone.View.extend({
  id: "",
  model: issues,
  el: $('.container'),
  tagName: 'span',
  initialize: function() {
    this.template = _.template($('#issue-show-template').html());
    console.log("show view")
  },
  render: function() {
    var id = parseInt(this.id)
    var issue = this.model.get(id)
    this.$el.html(this.template(issue.toJSON()));
    return this;
  }
});
