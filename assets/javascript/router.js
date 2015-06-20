var IssuesRouter = Backbone.Router.extend({
  routes: {
    "" : "index",
    "issues/:id" : "getIssue"
  },
  index: function() {
    new IssuesView({model: issues}).render()
  },
  getIssue: function(id) {
    new ShowIssuesView(id).render()
  }
})

var router = new IssuesRouter();
Backbone.history.start()