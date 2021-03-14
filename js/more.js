// buttons READ MORE 

let readMore = document.getElementsByClassName("readMore");
let i;

for (i = 0; i < readMore.length; i++) {
    
  readMore[i].addEventListener("click", function() {
      
    this.classList.toggle("actReadMore");
    let addInfo = this.nextElementSibling;

    if (addInfo.style.maxHeight) {
      addInfo.style.maxHeight = null;
    } else {
      addInfo.style.maxHeight = addInfo.scrollHeight + "px";
    }
      
  });
}