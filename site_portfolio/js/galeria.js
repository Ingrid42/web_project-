$(document).ready( function () {

// TODO: au click de each voir modifier le src de la figure caption.

$('#section1').on("click",function () {
    secONE();
  });


  function secONE() {
  //  $('div.reinit').empty();
   $('span.reinit').append('<a href="images/tableaux/1Paysage/2.jpg" title="2" data-gallery></a>');
   $('span.reinit').append('<a href="images/tableaux/1Paysage/3.jpg" title="3" data-gallery></a>');
  }

$('#section2').on("click",function () {
    secTWO();
  });


    function secTWO() {
     
     $('span.reinit').append('<a href="images/tableaux/2Indien/2.jpg" title="2" data-gallery></a>');
     $('span.reinit').append('<a href="images/tableaux/2Indien/3.jpg" title="3" data-gallery></a>');
    }






});
