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
  }, 
  events: {
    "click h2" : "shit"
  },
  shit: function() {
    debugger
  }
});
