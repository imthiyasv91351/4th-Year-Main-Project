$("#showUsers").click(function(){
  chrome.tabs.query({active: true, currentWindow: true},function(tabs){
    chrome.tabs.sendMessage(tabs[0].id, {action: "showUsers"});
  });
});

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

// ############ getting responses ####################

$.each(response, function(index, value) {
  $("#displayUser").append("<div class='container1'><div class='row'><div class='test'><button class='collapsible'>"+value.username+"</button><div class='content1'><p>"+value.comment+"</p></div></div></div></div>");
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









// #########################      Hello world       ####################

// $(function(){
//   $('#name').keyup(function(){
//     $('#greet').text('Hello ' + $('#name').val());
//   })
// })

// #########################       Budget manager       ####################

// $(function(){
//
//   chrome.storage.sync.get(['total','limit'],function(budget){
//     $('#total').text(budget.total);
//     $('#limit').text(budget.limit);
//   })
//
//   $('#spendAmount').click(function(){
//     chrome.storage.sync.get(['total','limit'],function(budget){
//       var newTotal = 0;
//       if(budget.total){
//         newTotal += parseInt(budget.total);
//       }
//
//       var amount = $('#amount').val();
//       if (amount) {
//         newTotal += parseInt(amount);
//       }
//
//       chrome.storage.sync.set({'total' : newTotal}, function(){
//         if(amount && newTotal >= budget.limit){
//           var notifOption = {
//             type: 'basic',
//             iconUrl: "icon48.png",
//             title: "Limit reached!",
//             message: "Oh, no! Looks like you have reached your limit!"
//           };
//           chrome.notifications.create('limitNotif', notifOption);
//         }
//       });
//
//       $('#total').text(newTotal);
//       $('#amount').val('');
//     });
//   });
// });
