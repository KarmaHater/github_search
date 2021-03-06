var ShowIssuesView = Backbone.View.extend({
  model: issues,
  id: "",
  el: $('.container'),
  initialize: function() {
    this.template = _.template($('#issue-show-template').html());
  },
  render: function() {
    var id = parseInt(this.id)
    var issue = this.model.get(id)
    this.$el.html(this.template(issue.toJSON()));
    return this;
  }
});
