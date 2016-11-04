$(document).ready( function () {

// TODO: au click de each voir modifier le src de la figure caption.

$('#section1').on("click",function () {
    secONE();
  });


  function secONE() {
   $('a#boucle1').attr("href","images/tableaux/1Paysage/1.jpg");
   $('a#boucle1').after('<a href="images/tableaux/1Paysage/2.jpg" title="2" data-gallery></a>')
  }


});
