var IssuesList = Backbone.Collection.extend({
  model: Issue,
  createIssueList: function(issue) {
    issues.add(issue);
  }
});
