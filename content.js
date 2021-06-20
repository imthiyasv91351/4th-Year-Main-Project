//sending a message to event page to show page action

chrome.runtime.sendMessage({todo: "showPageAction"});

// taking all the comments in the perticular post and storing in an array


(function myLoop(i) {
  setTimeout(function() {
    let x = document.querySelectorAll('[aria-label="Load more comments"]');
    x[0].click();
    if (--i) myLoop(i);   //  decrement i and call myLoop again if i > 0
  }, 1000)
})(20);                //  pass the number of iterations as an argument


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


// giving toggle action

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse){
if(request.action == "DOMContentLoaded"){
  //taking comment when user post a comment
  x = document.querySelectorAll('[type="submit"]');
  x[0].onclick=function(){
    setTimeout(function() {
      let commentsElement = document.querySelectorAll('[role="menuitem"]');
      const l=commentsElement.length;
      const element = commentsElement[l-1];
      const recentComment = element.children[0].children[0].children[1].children[1].innerText;
      console.log(recentComment);
    }, 3000);

    //sending to the ML model



    // taking response from ML model

    setTimeout(function(){
      let responseTeenage = true;

      if(responseTeenage == true){
        //making comment area red and alert a message
        let commentsElement = document.querySelectorAll('[role="menuitem"]');
        const l=commentsElement.length;
        const element = commentsElement[l-1];
        const commentArea = element.children[0].children[0].children[1].children[1];
        commentArea.style.backgroundColor="red";
        setTimeout(function () { alert('// WARNING: You typed an offensive comment, delete the comment immediately.'); }, 800);
      }
    }, 3000);
  }

}
})
