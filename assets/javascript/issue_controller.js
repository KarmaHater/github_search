// Controllers in Spine are created by inheriting from Spine.Controller
var IssuesController = Spine.Controller.sub({
  init: function(){
    ni
    this.item.bind("update", this.proxy(this.render));
    this.item.bind("destroy", this.proxy(this.remove));
  },
  render: function(){
    // Handle templating
    this.replace($("#photoTemplate").tmpl(this.item));
    return this;
  },
  remove: function(){
    this.el.remove();
    this.release();
  }
});
In