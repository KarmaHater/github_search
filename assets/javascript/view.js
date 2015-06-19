var issues = new IssuesList();

var IssueView = Backbone.View.extend({
  model: new Issue(),
  tagName: 'div',
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
  },
  render : function() {
    var self = this;
    self.$el.html('');
    _.each(this.model, function(issue, i) {
      self.$el.append((new IssueView({model: issue})).render().$el);
    });
      return this;
  }
});
