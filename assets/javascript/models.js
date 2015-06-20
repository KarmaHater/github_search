var Issue = Backbone.Model.extend({
  initialize: function() {
    console.log("creating issue model")
  },
  defaults: function () {
    return {
      number: '',
      title: '',
      createdAt: '',
    }
  }
});

var IssuesList = Backbone.Collection.extend({
  initialize: function() {
    console.log("creating issues collection")
  },
  model: Issue
});
