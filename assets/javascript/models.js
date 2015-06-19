var Issue = Backbone.Model.extend({
  defaults: function () {
    return {
      number: '',
      title: '',
      creationDate:''
    }
  }
});

var IssuesList = Backbone.Collection.extend({
  model: Issue
});