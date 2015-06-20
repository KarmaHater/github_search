function ToolTip () {}
ToolTip.prototype = {
  success: function(message, location, class_name ){
    location.prepend('<div class="alert-box"><div class="alert-text success">'+ message + '</div><div class="arrow-down success"></div></div>')
      this.removeToolTip();
  },
  warning: function(message, location, class_name ){
    location.prepend('<div class="alert-box"><div class="alert-text warning">'+ message + '</div><div class="arrow-down warning"></div></div>')
      this.removeToolTip();
  },
  danger: function(message, location, class_name ){
    location.prepend('<div class="alert-box"><div class="alert-text danger">'+ message + '</div><div class="arrow-down danger"></div></div>')
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