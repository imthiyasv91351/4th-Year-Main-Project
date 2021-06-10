//sending a message to event page to show page action

chrome.runtime.sendMessage({todo: "showPageAction"});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse){
if(request.action == "showUsers"){

  let commentsElement = document.querySelectorAll('[role="menuitem"]');

  let comments = [];

  for (let i = 1; i < commentsElement.length; i++) {
    const element = commentsElement[i];
    const username =
      element.children[0].children[0].children[1].children[0].innerText;
    const comment =
      element.children[0].children[0].children[1].children[1].innerText;
    const tempObject = {
      username,
      comment,
    };
    comments.push(tempObject);
  }
  console.log(comments);

}
})


// let commentsElement = document.querySelectorAll('[role="menuitem"]');
//
// let comments = [];
//
// for (let i = 1; i < commentsElement.length; i++) {
//   const element = commentsElement[i];
//   const username =
//     element.children[0].children[0].children[1].children[0].innerText;
//   const comment =
//     element.children[0].children[0].children[1].children[1].innerText;
//   const tempObject = {
//     username,
//     comment,
//   };
//   comments.push(tempObject);
// }

// console.log(comments);
