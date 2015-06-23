var globalCounter = 0;

var Issue = Backbone.Model.extend({
  initialize: function () {
    this.set('id', globalCounter);
    globalCounter += 1;
    },
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
    issues.reset()
    var counter = 1 
  for (var i = data.length - 1; i >= 0; i--) {
    counter = counter ++
    var number = data[i].number;
    var title = data[i].title;
    var createdAt = data[i].created_at;
    var user = data[i].user.login;
    var avatar = data[i].user.avatar_url;
    var account = data[i].user.html_url;
    var issue = new Issue({number: number, title: title, createdAt: createdAt, user: user, avatar: avatar, account: account});
    number
    issues.add(issue)
    }
  }
});


