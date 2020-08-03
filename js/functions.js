// When the user scrolls down 50px from the top of the document, resize the header's font size and remove logo
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      document.getElementById("logoo").style.display ="none";
    // document.getElementById("nav-elements").style.fontSize = "10px";
  } else {
      document.getElementById("logoo").style.display ="initial";
    // document.getElementById("nav-elements").style.fontSize = "12.8px";
  }
}

// RESIZE NOT USED - MESSES WITH TRANSITION - NEEDS FIX