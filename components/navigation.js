var page_num = 1;
function Navigation () {}

Navigation.prototype = {
  next: function(url) { 
    page_num = page_num + 1;
    url = url + page_num;
    $.ajax({
       url: url,
       type: 'GET'
     })
    .success(function(data){
      if(data.length > 0) {
      url =  url.substring(0, url.length - 1);
       var issue = new Issue;
       issue.createIssue(data);
      } else {
        toolTip.alertBox("There are no more repos.", $("#toolTip"), "warning");
      }
    })
    .error(function(xhr) {
      if (xhr.status === 403){
        toolTip.alertBox("Hit Max Github api hits.", $("#reposToolTip"), "danger");
      } else {
        toolTip.alertBox("An error has occured.", $("#toolTip"), "danger");
      }
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
       type: 'GET',
       statusCode: {
         403: function() {
            toolTip.alertBox("Hit Max Github api hits.", $("#reposToolTip"), "danger");
         }
        }
       })
      .success(function(data){
        url =  url.substring(0, url.length - 1);
        var issue = new Issue;
        issue.createIssue(data);
      })
      .error(function(xhr) {
        if (xhr.status === 403){
          toolTip.alertBox("Hit Max Github api hits.", $("#reposToolTip"), "danger");
        } else {
          toolTip.alertBox("An error has occured.", $("#toolTip"), "danger");
        }
      })
    }
  }
}

var navigate = new Navigation;
