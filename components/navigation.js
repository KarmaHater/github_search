var page_num = 1;
function Navigation () {}

Navigation.prototype = {
  next: function(url) { 
    page_num = page_num + 1;
    url = url + page_num;
    var ajax = $.ajax({
       url: url,
       type: 'GET'
     })
    ajax.success(function(data){
      if(data.length > 0) {
      url =  url.substring(0, url.length - 1);
       var issue = new Issue;
       issue.createIssue(data);
      } else {
        toolTip.alertBox("There are no more repos.", $("#toolTip"), "warning");
      }
    })
    ajax.error(function() {
      toolTip.alertBox("An error has occured.", $("#toolTip"), "danger");
    })
  },
  pervious: function(url){
    page_num = page_num - 1;
    url = url + page_num;
    if (page_num == 0){
      page_num = page_num + 1;
      toolTip.alertBox("You are on page one.", $("#toolTip"), "warning");
    } else {
      $.ajax({
       url: url,
       type: 'GET'
       })
      .success(function(data){
        url =  url.substring(0, url.length - 1);
        var issue = new Issue;
        issue.createIssue(data);
      })
      .error(function() {
        toolTip.alertBox("An error has occured.", $("#toolTip"), "danger");
      })
    }
  }
}

var navigate = new Navigation;
