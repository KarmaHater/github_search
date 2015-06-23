var IssuesRouter = Backbone.Router.extend({
  routes: {
    "" : "index",
    "issues/:id" : "getIssue"
  },
  index: function() {
    new IndexIsseusView().render()
    new IssuesView().render()
    console.log("veiw one")
  },
  getIssue: function(id) {
    new ShowIssuesView({id: id}).render()
    console.log("veiw two")
  }
})

var router = new IssuesRouter();
Backbone.history.start()