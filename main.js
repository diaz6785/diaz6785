$(document).ready(function(){
  $('.enlaces').click(function(){
    var valor = $(this).attr('data-nombre');
    if(valor == 'todos'){
      $('.filtros').show('1000');
  }else{
      $('.filtros').not('.' + valor).hide('1000');
      $('.filtros').filter('.' + valor).show('1000');    
    }

    $('ul .enlaces').click(function(){
      $(this).addClass('activo').siblings().removeClass('activo');
    });
  });
});