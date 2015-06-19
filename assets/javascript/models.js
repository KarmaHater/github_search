var GithubIssue = Backbone.Model.extend({
  defaults: function () {
    return {
      number: '',
      title: '',
      creationDate:''
    }
  }
});

var GithubIssueList = Backbone.Collection.extend({
  model: GithubIssue,
});