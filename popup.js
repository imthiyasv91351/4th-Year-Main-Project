// to work it when click on offensive users in extension

// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
//   console.log(request);
// });



$("#showUsers").click(function(){
  chrome.tabs.query({active: true, currentWindow: true},function(tabs){
    chrome.tabs.sendMessage(tabs[0].id, {action: "showUsers"},function(data){
      console.log("popup",data);
      $.each(data, function(index, value) {
        if(value.isOffensive == true){
          $("#displayUser").append("<div class='container1'><div class='row'><div class='test'><button class='collapsible'>"+value.username+"</button><div class='content1'><p>"+value.comment+"</p></div></div></div></div>");
        }
      });
    });
    chrome.storage.local.get("count", function(data) {
    if(typeof data.count == "undefined") {
        // That's kind of bad
    } else {
        console.log(data);
    }
});
  });
});

// giving toggle action to the teenage mode

document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.querySelector('input[type="checkbox"]');

  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      // do this
      chrome.tabs.query({active: true, currentWindow: true},function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, {action: "DOMContentLoaded"});
      });
      console.log('checked');
    } else {
      // do that
      console.log('Not checked');
    }
  });
});



//API connect here...



// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse){
// if(request.action == "result"){
//   console.log(comments);
//   }
// });

// taking the response of comments from ML model


//
// let response = [{
//     "username": "Imthiyas",
//     "comment": "super pic",
//     "isOffensive": false
//   },
//   {
//     "username": "mr_abc",
//     "comment": "f***k",
//     "isOffensive": true
//   },
//   {
//     "comment": "nyc pic",
//     "isOffensive": false
//   }
// ]

// ############ getting responses to the extension ####################



// #########################       List Action       ####################


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content1 = this.nextElementSibling;
    if (content1.style.maxHeight){
      content1.style.maxHeight = null;
    } else {
      content1.style.maxHeight = content1.scrollHeight + "px";
    }
  });
}
