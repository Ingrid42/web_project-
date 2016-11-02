$(document).ready( function () {

// TODO: au click de each voir modifier le src de la figure caption.

$('#section1').on("click",function () {
    secONE();
  });


  function secONE() {
   $('a#boucle1').attr("href","images/type1/1.jpg");
   $('a#boucle1').after('<a href="images/type1/2.jpg" title="2" data-gallery></a>')
  }


});
