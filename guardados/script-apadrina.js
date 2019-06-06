

Drupal.behaviors.apadrinar_form = {
  
  attach: function (context, settings) {   
   if(jQuery('#maquetacion-formularios-apadrina .js-form-type-checkbox > input').length) {
		jQuery('#maquetacion-formularios-apadrina .js-form-type-checkbox > input').each(function () {
			var label = jQuery(this).parent().find('label');
			label.append(jQuery(this));
			label.append('<span class="checkmark"></span>');
		});
	}
	if(jQuery('#formulario-paso-1 .sumadores-formulario a').length) {
		jQuery('#formulario-paso-1 .sumadores-formulario a').unbind();
		jQuery('#formulario-paso-1 .sumadores-formulario a').click(function (e) {
			e.preventDefault();
			apadrinar_sumar(jQuery(this));			
		});	
	}	
	
	if(jQuery('#maquetacion-formularios-apadrina select.selector-enlazable').length) {
		jQuery('#maquetacion-formularios-apadrina select.selector-enlazable').unbind();
		jQuery('#maquetacion-formularios-apadrina select.selector-enlazable').click(function (e) {
			e.preventDefault();
			e.stopPropagation();			
		});	
		jQuery("#maquetacion-formularios-apadrina select.selector-enlazable").change(function() {
			if(jQuery(this).attr('name') == 'tipo') {
				jQuery('input[name="step1[tipo_soc]"]').val(jQuery(this).val());
			} else {
				jQuery('input[name="step1[periocidad]"]').val(jQuery(this).val());
			}
		});	
	}

  if(!jQuery(".js-form-type-radio:nth-child(2) :input").is(":checked")){
    jQuery(".js-form-type-radio:nth-child(1) label").css("background-color", "#CECECE");
  }
	

	
	// Formulario de Donar.
	if(jQuery('.donar-item').length) {   
  	
  	jQuery('.donar-item').unbind();
		
		jQuery('.donar-item').hover(function (e) {
  		if(!jQuery('.donar-item').hasClass('donar-clickado')){		
  			var actual = jQuery(this);
        e.preventDefault();
  
        var marcado = false;
  			
  			if(actual.hasClass('donar-item-selected')) {
  				marcado = true;
  			}
  			
  			if(!marcado) {
    			jQuery('.donar-item').removeClass('donar-item-selected');
  				actual.addClass('donar-item-selected');	
  				actual.find('select.selector-enlazable').each(function () {
  					actual.trigger('change');	
  				});				
  			}
  
  			var valor = actual.attr('data');
        apadrinar_set_value(valor, jQuery('#input-money-inside input'));
      }
		})	   
    	
		jQuery('.donar-item').click(function (e) {
      var donar_item = jQuery(this);
      colorear_donar_item(donar_item);
    })
    
    jQuery('.selector-enlazable').click(function (e) {     
      var donar_item = jQuery(this).parents('.donar-item-selected');
      colorear_donar_item(donar_item);
    });
	}	
	
	function colorear_donar_item(elem){
  	if(jQuery('.donar-item').hasClass('donar-clickado')){
      jQuery('.donar-item').removeClass('donar-clickado')
    }

    if(jQuery('.donar-item').hasClass('donar-item-selected')){
      jQuery('.donar-item').removeClass('donar-item-selected')
    }
    
		elem.addClass('donar-clickado donar-item-selected');
		
		elem.find('select.selector-enlazable').each(function () {
			elem.trigger('change');	
		});	
		
		var valor = elem.attr('data');
    apadrinar_set_value(valor, jQuery('#input-money-inside input'));
	}
	
	
	
  if(jQuery('#input-mask').length){
    var input_mask = jQuery('#input-mask').find('input');
    input_mask.attr("data-inputmask", "'mask': '9999-9999-9999-9999'");
  }		
  
  
  
	if(jQuery('.donar-item-sumatorio a').length) {
		jQuery('.donar-item-sumatorio a').unbind();
		jQuery('.donar-item-sumatorio a').click(function (e) {
			e.preventDefault();
			e.stopPropagation();
			var donaritem = jQuery(this).parents('.donar-item');
			if(donaritem.hasClass('donar-item-selected')) {			
				var resultado = apadrinar_sumar(jQuery(this));
				donaritem.attr('data', resultado);
			} else {
				donaritem.trigger('click');
			}
			
		});
	}

	
	if(jQuery('.datepickercustom').length) {
		jQuery( ".datepickercustom" ).datepicker({
		  changeMonth: true,
		  changeYear: true,
		  yearRange: "c-100:c+0",
		  firstDay: 1,
		  monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
		 monthNamesShort: ['Ene','Feb','Mar','Abr', 'May','Jun','Jul','Ago','Sep', 'Oct','Nov','Dic'],
		 dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
		 dayNamesShort: ['Dom','Lun','Mar','Mié','Juv','Vie','Sáb'],
		 dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sá'],
		});
	}		
	
  }
};



function apadrinar_sumar(linkpulsado) {
		jQuery('.desactivable').removeClass("disable-button");
		var padreId = linkpulsado.parent().attr('id');
    if ( typeof padreId  !== undefined ) {
      if (linkpulsado.parents('.donar-item-sumatorio') && padreId == "formulario-money" && padreId == "formulario-kids" ) {
        var padreId = 'padre-money-dona';
      }
    }
		var min = 1;
		var max = 10;
    var increment = 1;
    console.log(padreId);
		if(padreId == 'formulario-money') {
			min = 21;
			max = 99999999;
	
		} else if(padreId == 'padre-money-dona') {
			min = 80;
			max = 99999990;
      increment = 10;
		}
		/* if(linkpulsado.attr('href') == 'step1[money]') {
			min = 1;
			max = 99999999;
		}*/
		var sumatipo = linkpulsado.attr('data');
		var resultado = parseInt(linkpulsado.parent().find('span.resultado').html());
		if(sumatipo == 'rest') {
			resultado = resultado - increment;
		} else {
			resultado = resultado + increment;
		}
		if(resultado < min) {
			resultado = min;
			jQuery('.desactivable').addClass("disable-button");
		} else if(resultado > max) {
			resultado = max;
		}	
		
		linkpulsado.parent().find('span.resultado').html(resultado);
		apadrinar_set_value(resultado, jQuery('input[name="' +  linkpulsado.attr('href') + '"]'));		
		return 	resultado;
}			

function apadrinar_set_value(value, input) {
  input.val(value);
}	

/* 
(function($){
  var step1 = $('#edit-step1');
  if(step1.length){
    $('#edit-actions-next').attr('disabled', 'disabled');
    var numeros = $('<div>').addClass('numeros');
    step1.find('[type=hidden]').each(function(){
      if($(this).data('drupal-selector') == 'edit-step1-kids'){
        numero(numeros, $(this), 1, 10);
      }

      if($(this).data('drupal-selector') == 'edit-step1-money'){
        numero(numeros, $(this), 21);
      }

      numeros.prependTo(step1);

    });

    step1.find('#edit-step1-email').change(function(){
      if(validateEmail($(this).val())){
        $('#edit-actions-next').attr('disabled', false);
      }else{
        $('#edit-actions-next').attr('disabled', 'disabled');
      }
    });

    step1.find('#edit-step1-email').keypress(function(){
      if(validateEmail($(this).val())){
        $('#edit-actions-next').attr('disabled', false);
      }else{
        $('#edit-actions-next').attr('disabled', 'disabled');
      }
    });
  }

  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function numero(numeros, input, min, max)
  {
    var numeroWrapper = $('<div>').addClass('numero').appendTo(numeros);
    var minusBtn = $('<div>').addClass('minus hide').html('-').appendTo(numeroWrapper);
    var numero = $('<div>').addClass('value').appendTo(numeroWrapper);
    var plusBtn = $('<div>').addClass('plus').html('+').appendTo(numeroWrapper);

    setValue(numero, input);

    minusBtn.click(function(){
      if(input.val() > min) {
        input.val(input.val() - 1);
        if (input.val() == min) {
          minusBtn.addClass('hide');
        }

        plusBtn.removeClass('hide');

        setValue(numero, input);
      }
    });

    plusBtn.click(function(){
      if(input.val() < max || max == undefined) {
        input.val(parseInt(input.val()) + 1);
        minusBtn.removeClass('hide');

        if (input.val() == max) {
          plusBtn.addClass('hide');
        }
        setValue(numero, input);
      }
    });

  }

  function setValue(numero, input){
    numero.html(input.val());
  }
})(jQuery); 
*/
