var  IndexIsseusView = Backbone.View.extend({
  el: $('.container-1'),
  initialize: function() {
    this.template = _.template($('#index-page-templete').html());
    console.log("show view")
  },
  render: function() {
    this.$el.html(this.template)
    return this;
  },
  events: {
    "submit #GetResults" : "getRepos"
  },
  getRepos: function() {
    new IssuesView().render({model: issues})
  }
})