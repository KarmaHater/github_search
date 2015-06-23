var navigation = {}

navigation.page = 1
navigation.next = function(url, page_num){
 navigation.page = page_num++
 url = url + navigation.page
 $.ajax({
    url: url,
    type: 'GET'
  })
 .success(function(data){
   if(data) {

   } else {
     toolTip.alertBox("There are no more repos.", $("#toolTip"), "warning");
   }
 }.bind(this))
 .error(function() {
   toolTip.alertBox("An error has occured.", this.toolTip, "danger");
 }.bind(this))
}

navigation.pervious= function(url){
  navigation.page = page_num--
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

    }.bind(this))
    .error(function() {
      toolTip.alertBox("An error has occured.", this.toolTip, "danger");
    }.bind(this))
  }
}