var navigation = {}

navigation.page = 1
navigation.next = function(url, page_num){
 url = url + page_num
 $.ajax({
    url: url,
    type: 'GET'
  })
 .success(function(data){
   if(data) {
    debugger
    issues.reset()
    var issue = new Issue
    issue.createIssue(data);
    // new IssuesView().render({model: issues})
   } else {
     toolTip.alertBox("There are no more repos.", $("#toolTip"), "warning");
   }
 })
 .error(function() {
   toolTip.alertBox("An error has occured.", $("#toolTip"), "danger");
 })
}

navigation.pervious= function(url){
  navigation.page = page_num - 1
  url = url + navigation.page
  if (page === 1){
    toolTip.alertBox("You are on page one.", $("#toolTip"), "warning");
  } else {
    url = url + page
    page_num = page_num
    debugger
    $.ajax({
     url: url,
     type: 'GET'
     })
    .success(function(data){

    })
    .error(function() {
      toolTip.alertBox("An error has occured.", $("#toolTip"), "danger");
    })
  }
}