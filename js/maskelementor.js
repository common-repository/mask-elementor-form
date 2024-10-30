jQuery(document).ready(function($) {


  var input = $('input[type=text]');

  $.each(input, function() {

    // data - placeholder => ..dd/mm/yyyy..
    var placeholder = $(this).attr('placeholder') || '';
    
    if( placeholder.indexOf('dd/mm/yyyy') != -1 ){
        $(this).addClass('date');
    }
    // telephone - placeholder => ..DDD + Telefone..
    if( placeholder.indexOf('DDD + Telefone') != -1 ){
      $(this).addClass('telephone_with_ddd');
    } 
    // celular - placeholder => ..DDD + Celular..
    if( placeholder.indexOf('DDD + Celular') != -1 ){
      $(this).addClass('phone_with_ddd'); 
    } 
  });   

  $('.date').mask('00/00/0000');
  $('.time').mask('00:00:00');
  $('.date_time').mask('00/00/0000 00:00:00');
  $('.cep').mask('00000-000');
  $('.phone').mask('0000-0000');
  $('.telephone_with_ddd').mask('(00) 0000-0000');
  $('.phone_with_ddd').mask('(00) 00000-0000');
  $('.mixed').mask('AAA 000-S0S');
  $('.cpf').mask('000.000.000-00', {reverse: true});
  $('.cnpj').mask('00.000.000/0000-00', {reverse: true});
  $('.money').mask('000.000.000.000.000,00', {reverse: true});
  $('.money2').mask("#.##0,00", {reverse: true});
  $('.ip_address').mask('0ZZ.0ZZ.0ZZ.0ZZ', {
    translation: {
      'Z': {
        pattern: /[0-9]/, optional: true 
      }
    }
  });
  $('.ip_address').mask('099.099.099.099');
  $('.percent').mask('##0,00%', {reverse: true});
  $('.clear-if-not-match').mask("00/00/0000", {clearIfNotMatch: true});
  $('.placeholder').mask("00/00/0000", {placeholder: "__/__/____"});
  $('.fallback').mask("00r00r0000", {
      translation: {
        'r': {
          pattern: /[\/]/,
          fallback: '/'
        },
        placeholder: "__/__/____"
      }
    });
  $('.selectonfocus').mask("00/00/0000", {selectOnFocus: true});
});