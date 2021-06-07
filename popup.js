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
