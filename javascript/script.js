/* JavaScript written by Lucas w/ help from online sources. Works cited/websites i used 
to help learn some JavaScript I didn't already know. I'm taking COMP 426 (Modern Web Programming)
so I already have a good understanding of some JavaScript.

--------------------------------------------------------------------
 Works Cited/Helpful Websites I Used

https://www.w3schools.com/js/js_htmldom_eventlistener.asp
https://www.w3schools.com/js/js_htmldom_css.asp

--------------------------------------------------------------------

*/

document.getElementById('menu').addEventListener('click', function() {
    const pages = document.getElementById('pages');
    const menu = document.getElementById('menu');
    const pageWrapper = document.querySelector('.page-wrapper');
    const nav = document.getElementById('nav');

    pages.classList.toggle('active');

    if (pages.classList.contains('active')) {
            menu.innerHTML = '&#10006;';
            pageWrapper.style.transform = 'translateY(0%)';
            nav.style.height = '150px';
    } else {
            menu.innerHTML = '&#9776;';
            pageWrapper.style.transform = 'translateY(-100%)';
            nav.style.height = '50px';
    }


});


window.addEventListener("scroll", function() {
    const nav = document.getElementById("nav");
    
    if (window.scrollY > 0) {
      nav.style.width = "100%";
      nav.style.margin = "0";
      nav.style.borderRadius = "0px";
    } else {
      nav.style.width = "90%";
      nav.style.margin = "15px auto";
      nav.style.borderRadius = "8px";
    }
  });
  