//adding typed.js feature
new Typed('#typed',{
    strings : ['Web Developer','Web Designer'],
    typeSpeed : 40,
    delaySpeed : 90,
    loop : true
  });

  //downloading resume 
  function download(zaufishan_khan_resume, textInput) {

    var element = document.createElement('a');
    element.setAttribute('href','data:text/plain;charset=utf-8, ' + encodeURIComponent(textInput));
    element.setAttribute('download', zaufishan_khan_resume);
    document.body.appendChild(element);
    element.click();
    //document.body.removeChild(element);
}
document.getElementById("btn")
    .addEventListener("click", function () {
          var text = document.getElementById("text").value;
          var filename = "output.txt";
          download(zaufishan_khan_resume, text);
    }, false);


//scroll-to-top button
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

 
 