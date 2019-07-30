/**$(function(){
  alert("hi");
});
**/
$(document).ready(function(){
  $('button').click(function(){
    if($('body').hasClass('black')){
      $('body').removeClass('black').addClass('white');

    }
    else{
      $('body').removeClass('white').addClass('black');
    }
  });
});

$(document).ready(function(){
  $('#orb').click(function(){
    if($('#orb').hasClass('sun')){
      $('#orb').removeClass('sun').addClass('moon');
    }
    else{
      $('#orb').removeClass('moon').addClass('sun');
    }

    if($('#sky').hasClass('day')){
      $('#sky').removeClass('day').addClass('night');
    }
    else{
      $('#sky').removeClass('night').addClass('day');
    }
  });
});
