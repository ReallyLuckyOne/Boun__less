/* tab section */
function openTabDetail(evt, tabName) {
    var i, detail__item, detail__link;
    
    detail__item = document.getElementsByClassName("detail__item");
    for (i = 0; i < detail__item.length; i++) {
        detail__item[i].style.display = "none";
    }

    detail__link = document.getElementsByClassName("detail__link");
    for (i = 0; i < detail__link.length; i++) {
        detail__link[i].className = detail__link[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

/* tab section */
function openTabService(evt, tabName) {
    var i, service__item, service__link;

    service__item = document.getElementsByClassName("service__item");
    for (i = 0; i < service__item.length; i++) {
        service__item[i].style.display = "none";
    }

    service__link = document.getElementsByClassName("service__link");
    for (i = 0; i < service__link.length; i++) {
        service__link[i].className = service__link[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpenSecond").click();


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





