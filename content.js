//sending a message to event page to show page action

chrome.runtime.sendMessage({todo: "showPageAction"});
// chrome.runtime.sendMessage({abc: "xyz"});

const commentSet = ["this picture is so weird", "Your have so dark skin", "Your family will rot in hell for this sure", "Your eyes are so ugly", "I am sure you won't win anything", "What a shit post is this, you should delete it","go kill yourself", "my marines would chop you into pieces","you don't have the balls to act like a man"
,  "you are posing like a bitch", "Are you really a prostitute", "your religion really sucks", "you are very poor so that you cannot afford a good mobile", " i think you and donkey have same mindset"
, "This post reminds me of a joker", "If you marry a black person, you will have a black child", "I think you are a gay"  ];

// taking all the comments in the perticular post and storing in an array



(function myLoop(i) {
  setTimeout(function() {
    let p = document.querySelectorAll('[aria-label="Load more comments"]');
  if(!!p[0]){p[0].click();}
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

// function resultPopup(comments){
//   for(let j = 0; j < comments.length; j++){
//
//   }
// }

function commentsPredict(comments) {
  for (let i = 0; i < comments.length; i++) {
    comments[i].isOffensive = commentSet.includes(comments[i]['comment']);
  }
 }



 // chrome.tabs.query({active: true, currentWindow: true},function(tabs){
 //   chrome.runtime.sendMessage(tabs[0].id, comments, {action: "result"});
 // });


});




// giving toggle action



function responseTeenage(recentComment) {
  console.log(commentSet.length);
  for (let i = 0; i < commentSet.length; i++) {
    if(commentSet[i]==recentComment){
      return true;
    }
}
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse){
if(request.action == "DOMContentLoaded"){
  //taking comment when user post a comment
  post = document.querySelectorAll('[type="submit"]');
  post[0].onclick=function(){
    setTimeout(function() {
      let commentsElement = document.querySelectorAll('[role="menuitem"]');
      const l=commentsElement.length;
      const element = commentsElement[l-1];
      const recentComment = element.children[0].children[0].children[1].children[1].innerText;
      // chrome.runtime.sendMessage(recentComment,{action: "toPredict"});

      setTimeout(function(){

        if(responseTeenage(recentComment)){
          //making comment area red and alert a message
          let commentsElement = document.querySelectorAll('[role="menuitem"]');
          const l=commentsElement.length;
          const element = commentsElement[l-1];
          const commentArea = element.children[0].children[0].children[1].children[1];
          commentArea.style.backgroundColor="red";
          setTimeout(function () { alert('// WARNING: You typed an offensive comment, delete the comment immediately.'); }, 800);
        }
      }, 1000);

    }, 2300);



    //sending to the ML model



    // taking response from ML model



  }

  // commenting from home

  // let c = document.querySelectorAll('[type="submit"]');
  // c[0].onclick = function(){
  //        setTimeout(function () {
  // 	        let x = document.querySelectorAll('[data-testid="post-comment-root"]');
  //           const recentComment = x[3].children[1].children[0].innerHTML;
  //   	      x[3].children[1].style.backgroundColor="red"; }, 4000);
  //           setTimeout(function () { alert('// WARNING: You typed an offensive comment, delete the comment immediately.'); }, 4500);
  //   }
  // c[1].onclick = function(){
  //         setTimeout(function () {
  //   	      let x = document.querySelectorAll('[data-testid="post-comment-root"]');
  //           const recentComment = x[6].children[1].children[0].innerHTML;
  //           x[6].children[1].style.backgroundColor="red"; }, 4000);
  //           setTimeout(function () { alert('// WARNING: You typed an offensive comment, delete the comment immediately.'); }, 4500);
  //   }
  //
  // c[2].onclick = function(){
  //         setTimeout(function () {
  //     	    let x = document.querySelectorAll('[data-testid="post-comment-root"]');
  //           const recentComment = x[6].children[1].children[0].innerHTML;
  //       	  x[9].children[1].style.backgroundColor="red"; }, 4000);
  //           setTimeout(function () { alert('// WARNING: You typed an offensive comment, delete the comment immediately.'); }, 4500);
  //   }


}
});
