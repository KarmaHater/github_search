function ToolTip () {}
ToolTip.prototype = {
  alertBox: function(message, location, class_name ){
    location.prepend('<div class="alert-box"><div class="alert-text ' +  class_name + '">'+ message + '</div><div class="arrow-down ' + class_name  + '"></div></div>')
      this.removeToolTip();
  },
  removeToolTip: function(){
    $('.alert-box').delay(2000).fadeOut('slow');
      setTimeout(function(){
        $('.alert-box').remove()
    }, 15000);
  }
}

var toolTip = new ToolTip