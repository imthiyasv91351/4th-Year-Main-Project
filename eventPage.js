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
