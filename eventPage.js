// ###################  Page action ###############################

// handle message of content.js from here, Listenig the messages at runtime

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
  var bkg = chrome.extension.getBackgroundPage();
  bkg.console.log('request', request);
  if(request.todo == "showPageAction"){
    //retrieve all the tabs and specifies options
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
      chrome.pageAction.show(tabs[0].id);
    });
  }
});

// ###################  Context Menu ###############################


// var contextMenuItem = {
//   "id" : "spendMoney",
//   "title" : "Spend Money",
//   "contexts" : ["selection"]
// };
// chrome.contextMenus.create(contextMenuItem);
//
// function isInt(value){
//   return !isNaN(value) &&
//     parseInt(Number(value)) == value &&
//     !isNaN(parseInt(value,10));
// }

// ############### Badges on extension icon ################################

// chrome.contextMenus.onClicked.addListener(function(clickData){
//   if(clickData.menuItemId == "spendMoney" && clickData.selectionText){
//     if(isInt(clickData.selectionText)){
//       chrome.storage.sync.get(['total','limit'], function(budget){
//         var newTotal = 0;
//         if(budget.total){
//           newTotal += parseInt(budget.total);
//         }
//         newTotal += parseInt(clickData.selectionText);
//         chrome.storage.sync.set({'total' : newTotal}, function(){
//           if(newTotal >= budget.limit){
//             var notifOption = {
//               type: 'basic',
//               iconUrl: "icon48.png",
//               title: "Limit reached!",
//               message: "Oh, no! Looks like you have reached your limit!"
//             };
//             chrome.notifications.create('limitNotif', notifOption);
//           }
//         });
//       });
//     }
//   }
// });
//
// chrome.storage.onChanged.addListener(function(changes, storageName){
//   chrome.browserAction.setBadgeText({'text': changes.total.newValue.toString()})
// });
