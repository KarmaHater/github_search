var Issue = Backbone.Model.extend({
  defaults: function () {
    return {
      id: '',
      number: '',
      title: '',
      createdAt: '',
      user: '',
      avatar: '',
      account: ''
    }
  },
  createIssue: function(data) {
  for (var i = data.length - 1; i >= 0; i--) {
    var number = data[i].number;
    var title = data[i].title;
    var createdAt = data[i].created_at;
    var user = data[i].user.login;
    var avatar = data[i].user.avatar_url;
    var account = data[i].user.html_url;
    var issue = new Issue({number: number, title: title, createdAt: createdAt, user: user, avatar: avatar, account: account});
    number
    issues.createIssueList(issue);
    }
  }
});

var IssuesList = Backbone.Collection.extend({
  model: Issue,
  createIssueList: function(issue) {
    issues.add(issue);
  }
});

