var Issue = Backbone.Model.extend({
  defaults: function () {
    return {
      id: '',
      number: '',
      title: '',
      createdAt: ''
    }
  }
});

var IssuesList = Backbone.Collection.extend({
  model: Issue
});

var issue_one = new Issue({name: "andra", title: "fuck", createdAt: "poop", id: 1})
var issue_two = new Issue({name: "hethe ththththhtekee", title: "fuck", createdAt: "poop", id: 2, number: 12234234234234234})
var issue_three = new Issue({name: "sara", title: "fuck", createdAt: "poop", id: 3})
var issue_four = new Issue({name: "kira", title: "fuck", createdAt: "poop", id: 4})
var issue_five = new Issue({name: "mark", title: "fuck", createdAt: "poop", id: 5})
