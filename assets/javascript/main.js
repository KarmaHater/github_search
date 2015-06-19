$(document).ready(function(){
  model = new Backbone.Model({
  data: [
  {text: "googel", href: "googel.com"},
  {text: "googel", href: "googel.com"},
  {text: "googel", href: "googel.com"},
  {text: "googel", href: "googel.com"},
  {text: "googel", href: "googel.com"}
  ]
});

var View = Backbone.View.extend({
  initialize: function() {
    this.template = $("#list-template").children();
  },
  el: $("#container"),
  events: {
    'click button ': "render"
  },
  render: function() {
    var data = this.model.get('data');
    for (var i = data.length - 1; i >= 0; i--) {
      var li = this.template.clone().text(data[i].text)
        this.$el.find('ul').append(li);
    };
  }
});

var view = new View({model: model});
})
