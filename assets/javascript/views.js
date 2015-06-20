var issues = new IssuesList();

var issues = new IssuesList();
var IssueView = Backbone.View.extend({
  model: new Issue(),
  tagName: 'tr',
  initialize: function() {
    this.template = _.template($('#issue-template').html());
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});

var IssuesView = Backbone.View.extend({
  model: issues, 
  el: $('#issues-container'), 
  initialize: function() {
    this.model.on('add', this.render, this);
  },
  render : function() {
    var self = this;
    self.$el.html('');
    _.each(this.model, function(issue, i) {
      self.$el.append((new IssueView({model: issue})).render().$el);
    });
      return this;
  }
});

var IssuesView = Backbone.View.extend({
  model: issues,
  el: $('#issues-container'),
  initialize: function() {
    console.log("creating issues view")
    this.model.on('add', this.render, this);
  },
  render: function() {
    var self = this;
    self.$el.html('');
    _.each(this.model.models, function(issue, i) {
      self.$el.append((new IssueView({model: issue})).render().$el);
    });
      return this;
  }
});
var one = new Issue({title: "fuck", createdAt: "now"})
var two = new Issue({title: "you", createdAt: "now"})
var three = new Issue({title: "sideways", createdAt: "now"})
var l = new IssuesList([one, two, three ]);


var view = new IssuesView({model: l})
view.render()

// var ButtonView = Backbone.View.extend({
//   events: {
//     'click button' : 'render'
//   },
//   render: function() {
//     debugger
//     console.log("made it ")
//   }
// })

// var andra = new ButtonView()