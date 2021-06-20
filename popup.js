// to work it when click on offensive users in extension

$("#showUsers").click(function(){
  chrome.tabs.query({active: true, currentWindow: true},function(tabs){
    chrome.tabs.sendMessage(tabs[0].id, {action: "showUsers"});
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

// taking the response of comments from ML model

let response = [{
    "username": "Imthiyas",
    "comment": "super pic",
    "isOffensive": false
  },
  {
    "username": "mr_abc",
    "comment": "f**ck",
    "isOffensive": true
  },
  {
    "username": "mr_xyz",
    "comment": "nyc pic",
    "isOffensive": false
  }
]

// ############ getting responses to the extension ####################

$.each(response, function(index, value) {
  if(value.isOffensive == true){
    $("#displayUser").append("<div class='container1'><div class='row'><div class='test'><button class='collapsible'>"+value.username+"</button><div class='content1'><p>"+value.comment+"</p></div></div></div></div>");
  }

});

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
