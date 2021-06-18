var accItem = document.getElementsByClassName('accordionItem');
var accHD = document.getElementsByClassName('accordionItemHeading');
for (i = 0; i < accHD.length; i++) {
        accHD[i].addEventListener('click', toggleItem, false);
}
function toggleItem() {
  var itemClass = this.parentNode.className;
  for (i = 0; i < accItem.length; i++) {
    accItem[i].className = 'accordionItem close';
  }
  if (itemClass == 'accordionItem close') {
    this.parentNode.className = 'accordionItem open';
  }
}
function createJSON(){
  var fs = require("fs");
  var sampleObject = {
      a: 1,
      b: 2,
      c: {
          x: 11,
          y: 22
      }
  };

  fs.writeFile("./obj.json", JSON.stringify(sampleObject, null, 4), (err) => {
    if (err) {
        console.error(err);
      };
      console.log("File has been created");
  });
}

function openForm() {
document.getElementById("loginPopup").style.display="block";
}

function closeForm() {
document.getElementById("loginPopup").style.display= "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onmousedown = function(event) {
var modal = document.getElementById('loginPopup');
if (event.target == modal) {
  closeForm();
  }
}

const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    const blockID = anchor.getAttribute('href');
    document.querySelector ('' + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}

(function() {
  'use strict';

  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('back_to_top-show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('back_to_top-show');
    }
  }

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
  }

  var goTopBtn = document.querySelector('.back_to_top');

  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);
})();
