(function($) {
  $.fn.equalHeights = function(clase = 'equalized') {
    var maxHeight = 0, $this = $(this);
    $this.each( function() {
      var height = $(this).innerHeight();
      if ( height > maxHeight ) { maxHeight = height; }
    });
    $this.addClass(clase);
    return $this.css('height', maxHeight);
  };
  // auto-initialize plugin
  $('[data-equal]').each(function(){
    var $this = $(this),
    target = $this.data('equal');
  $this.find(target).equalHeights();
  });
})(jQuery);
           
/*
  Drupal.behaviors.fvf_layouts = {
    attach: function (context, settings) {
  }
} */
    
jQuery(document).ready(function () {
  fvf_link_descenso();
  fvf_slider();
  fvf_popup();
  fvf_tabs_system(); 
  fvf_ajax_proyects();
  fvf_responsive_menu(jQuery);
  fvf_set_submenu_links(jQuery);
  fvf_set_submenu_behavior(jQuery);
  //fvf_proyectos_tamano();
  fvf_menu_fijo();
  fvf_igualar_alturas();
  fvf_igualar_alturas_wo_sup();
  fvf_igualar_altura_otro()
  fvf_slide_opciones_donar();
  fvf_contactaForm_control();
});
 
jQuery(window).resize(function() {
	try {
      fvf_igualar_alturas();	
	  	fvf_container_margin();
	  	fvf_set_submenu_links(jQuery);
	  	fvf_set_submenu_behavior(jQuery);
      fvf_igualar_alturas_wo_sup();
      fvf_igualar_altura_otro()
	  	//fvf_resize_slick_triple();
  fvf_slide_opciones_donar();
	  }catch(error) {
		console.log(error);
	  }	
});

(function ($) {
  Drupal.behaviors.fvflayout = {
    attach: function (context, settings) {
	  try {
		setTimeout(function () {
			fvf_igualar_alturas();
		}, 200);
	  	
	  	fvf_container_margin();
	  	
	  	if(jQuery('.dialog-off-canvas-main-canvas div[role="contentinfo"]').length) {
		  jQuery('.dialog-off-canvas-main-canvas div[role="contentinfo"]').unbind();
		  jQuery('.dialog-off-canvas-main-canvas div[role="contentinfo"]').click(function (e) {
			e.preventDefault();
			jQuery('.dialog-off-canvas-main-canvas div[role="contentinfo"]').hide();
		  });	  
	  	} 
	  }catch(error) {
		console.log(error);
	  }
    }
  };
}(jQuery));

function fvf_container_margin() {
	if(jQuery('.margin-container').length) {
		var left = jQuery('.container').first().offset().left;
		jQuery('.margin-container').css('marginLeft', left);
	}
	if(jQuery('.margin-container-right').length) {
		
		var left = jQuery('body').innerWidth() - (jQuery('.container').first().offset().left + jQuery('.container').innerWidth());
		
		jQuery('.margin-container-right').css('marginRight', left);
	}
}
function fvf_ajax_proyects() {
	if(jQuery('.cargar-ajax-container').length) {
		
		jQuery('.cargar-ajax-container .tabs-system-tab-link').click(function (e) {
			e.preventDefault();
			var href = jQuery(this).attr('href');
			jQuery(this).parents('.cargar-ajax-container').find('.tabs-system-tab-link').removeClass('active');
			jQuery(this).addClass('active');
			var padre = jQuery(this).parents('.cargar-ajax-container').find('.cargar-ajax-container-contenedor');
			jQuery.ajax({
			    type: "GET",
			    url:href,
			    success: function(data){
				    padre.html(data.html);				    
				    fvf_slider();
				    fvf_tabs_system();
				    fvf_popup();
            fvf_igualar_alturas_wo_sup();
			    }
			});			
		});		
		jQuery('.cargar-ajax-container').each(function () {
			jQuery('.tabs-system-tab-link', this).first().trigger('click');
		});
	}	
}
function fvf_tabs_system() {
	try {
		if(jQuery('.tabs-system').length) {
		jQuery('.tabs-system').each(function () {
			jQuery('.tabs-system-tab-link', this).first().addClass('active');
			jQuery('.tabs-system-tab-content', this).addClass('oculto-suave');
			jQuery('.tabs-system-tab-content', this).first().removeClass('oculto-suave');
		});
		
		jQuery('.tabs-system .tabs-system-tab-link').unbind();
		jQuery('.tabs-system .tabs-system-tab-link').click(function (e) {
			e.preventDefault();
			var parent = jQuery(this).parents('.tabs-system').first();
			jQuery('.tabs-system-tab-link', parent).removeClass('active');
			var href = jQuery(this).attr('href');
			jQuery(this).addClass('active');
			jQuery('.tabs-system-tab-content', parent).addClass('oculto-suave');
			jQuery(href).removeClass('oculto-suave');
			
			var hijos = parent.find('.tabs-system');
			if(hijos.length) {
				jQuery('.tabs-system-tab-link', hijos).first().addClass('active');
				jQuery('.tabs-system-tab-content', hijos).addClass('oculto-suave');
				jQuery('.tabs-system-tab-content', hijos).first().removeClass('oculto-suave');
			}
		});
		
	}
	} catch(error)  {
		
		
		
	}
		
}

function fvf_igualar_alturas() {

	if(jQuery('.igualar-alturas-content .igualar-altura').length) {
  	
		jQuery('.igualar-alturas-content').each(function () {
		
				jQuery('.igualar-altura', this).css('height','auto');
				jQuery('.igualar-altura', this).equalHeights();			
				if(jQuery('.cuadrado-minimo', this).length){
					jQuery('.cuadrado-minimo', this).css('minHeight', jQuery('.cuadrado-minimo', this).innerWidth());
				}				
				if(jQuery('.cuadrado-minimo-77', this).length){
					jQuery('.cuadrado-minimo-77', this).css('minHeight', jQuery('.cuadrado-minimo-77', this).innerWidth() * 0.77);
				} 			 
		});		
	}
}

/*
if(jQuery("a").length){
  console.log("hay " + jQuery("a").length)
  console.log(jQuery("a"));
}
*/

function fvf_igualar_altura_otro(){
  //clase 1 = elemento que tiene la altura
  //clase 2 = elemento que quiere tener la altura de la clase 1
  
  if(jQuery(window).innerWidth() < 768){
    if(jQuery('.height_orig').length){
      
      if(!jQuery('.paragr-480').hasClass('.height_heredado') && !jQuery('.imgwscroll').hasClass('.height_orig')){
        jQuery('.paragr-480').addClass('.height_heredado');
        jQuery('.imgwscroll').addClass('.height_orig');
      }
    
      var height_orig = 0;
  
      height_orig = jQuery('.height_orig').innerHeight();
      
      if(jQuery('.height_heredado').length){
        jQuery('.height_heredado').css("height", height_orig);
      }  
    } 
      
  }else{
    jQuery('.paragr-480').removeClass('.height_heredado');
    jQuery('.imgwscroll').removeClass('.height_orig');
    
    jQuery('.adaptar_alto_card').css({
      "height": "auto",
      "width": "auto"
    });
    
    if(jQuery(window).innerWidth() < 1240){
      if(jQuery('.adaptar_alto_card_ext').length) { 
        var alto_card = jQuery('.adaptar_alto_card_ext').innerHeight();
        jQuery('.adaptar_alto_card').css({
          "height": alto_card,
          "width": alto_card
        });
      }  
    }else if(jQuery(window).innerWidth() > 1200){
      jQuery('.adaptar_alto_card').css({
        "height": 420,
        "width": 420
      });
    }
  }
}


function fvf_igualar_alturas_wo_sup() {
  var wthis = 0; 

  if(jQuery('.protestvideo').length) {

    jQuery('.protestvideo').each(function(){
      jQuery(this).css("height", "auto")
      
      wthis = jQuery(this).parent().innerWidth();
      
      if(jQuery(this).hasClass("videoadapt")){
        jQuery(this).addClass("widthmax100")
        jQuery(this).css("height", wthis)  
      }else{
        wthis = wthis - 30;
        jQuery(this).css("height", wthis)
        jQuery(this).css("width", wthis)  
      }      
    });
  }
  
  if(jQuery('.paragraph--type--home-vf-momentos').length){
    var prgr = jQuery('.paragraph--type--home-vf-momentos');

    prgr.each(function(){      
      jQuery(this).css("height", "auto")
      jQuery(this).css("height", wthis);
    })
  }
}


/**
 * Ejecutar Sliders.
 */
function fvf_slider() {
	try {

	 if(typeof jQuery.fn.slick !== 'undefined'){
		if(jQuery('.slider-custom-one > div').length) {
			jQuery('.slider-custom-one > div').not('.slick-initialized').slick();
		}	
		if(jQuery('.vista-hoy-fundacion  .views-element-container > div').length) {
			jQuery('.vista-hoy-fundacion  .views-element-container > div').slick({
				slidesToShow: 3,
		        responsive: [
		          {
		            breakpoint: 900,
		            settings: {
		              arrows: false,
		            slidesToShow: 2.5
		            }
		          },
		          {
		            breakpoint: 768,
		            settings: {
		              slidesToShow: 1.2
		            }
		          }
		      ]
			});
		}
		if(jQuery('.vista-hoy-fundacion-bloque .inicio-bloque > div').length) {
			jQuery('.vista-hoy-fundacion-bloque .inicio-bloque > div').slick({
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 900,
            settings: {
              arrows: false,
            slidesToShow: 2.5
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1.2
            }
          }
      ]
			});
		}
    fvf_resize_slick_triple();
		if(jQuery('.vista-tres > div').length) {
			jQuery('.vista-tres > div').slick({
				slidesToShow: 3,
				responsive: [
		          {
		            breakpoint: 900,
		            settings: {
		              arrows: false,
		            slidesToShow: 2.5
		            }
		          },
		          {
		            breakpoint: 768,
		            settings: {
		              slidesToShow: 1.2
		            }
		          }
		      ]
			});
		}	
	 }
	 }
	 
catch(error) {
		console.log(error);
	}
}

function fvf_resize_slick_triple () {
  if(jQuery('.vista-mundo-vicente > div').length) {

      var unificado = jQuery('.vista-mundo-vicente-responsive');
      unificado.children().each(function() {
        jQuery(this).children().appendTo(unificado);
        jQuery(this).remove();
      });
      unificado.slick({
        slidesToShow: 1.2,
        arrows: false,
        centerMode: true,
        responsive: [
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 1,
              centerMode: false,
            }
          },
        ]
      });
  }
}

/**
 *
 */
 
 function fvf_popup() {
	 if(typeof jQuery.fn.colorbox !== 'undefined'){
		 if(jQuery('.colorbox')) {
			 jQuery('.colorbox').colorbox({iframe:true, width:"80%", height:"80%"});
		 }
		 if(jQuery('.colorbox-img')) {
			 jQuery('.colorbox-img').colorbox();
		 }
	 }
 }

function fvf_responsive_menu($) { // NO NEED TO RESTRICT WIDTH OF SCREEN AS
                                  // BUTTON IS INVISIBLE ON HIGHER RESOLUTIONS
  $('.boton-menu-toggle').click(function(e) {
    e.preventDefault();
    $(this).toggleClass('open');
    $('#main-header-custom').toggleClass('mostrar-menu');
    $('body').toggleClass('open-menu');
  });
}

// Sets the submenu links for each 
function fvf_set_submenu_links($) {
  var submenu = $('.menu-inferior>ul>li ul');
  if (submenu.length) {
    submenu.each(function() {
      parent_link = $(this).prev();
      parent_link = parent_link.hasClass('active-trail') ? '' : parent_link.attr('href');
      // parent_link = $(this).parent().find('a').attr('href');
      $('li', this).each(function() {
        enlace = $(this).find('a');
        link_string = enlace.attr('href');
        // make sure you use https://some_url/ as the url for menus
        new_link = link_string.replace(/https:\/\/some_url\//, parent_link);
        enlace.attr('href', new_link);
        enlace.click(function(e) {
          $(this).parents('header').removeClass('mostrar-menu');
        });
      });
    });
  }
}

function fvf_set_submenu_behavior($) {
  $('.menu-footer-m>ul>li').unbind();  
  
  var togglers = $('.menu-icon-sup>ul>li');
  togglers.unbind();
  togglers.click(function(e) {
    jQuery(this).find('ul').toggleClass('mostrar');
    jQuery(this).find('ul').parent().toggleClass('displayed');
  });

  var togglers = $('.menu-footer-m>ul>li');
  togglers.unbind();
  togglers.click(function(e) {
    jQuery(this).find('ul').toggleClass('mostrar');
    jQuery(this).find('ul').parent().toggleClass('displayed');
  });
}


function fvf_proyectos_tamano() {
	/* if(jQuery('.menu-proyectos').length) {
		console.log("hola");
		jQuery('.menu-proyectos').each(function () {
			console.log("hola15");
			var sumatorio = 0;
			jQuery(' > p a', this).each(function () {
				console.log('Item ' + jQuery(this).innerWidth());
				sumatorio = sumatorio + jQuery(this).innerWidth() + 15;
			});
			console.log("Resultado suma " + sumatorio);
			jQuery(this).css("width", sumatorio + 15);
		});
	} */
}



/**
 * Link onpage.
 */    
function fvf_link_descenso() {
  if(jQuery(window).width() > 992){
    var menu = jQuery(".contenedor-menu");
    var menu_offset = menu.offset().top + 40;
    
    if(jQuery(window).scrollTop() < menu_offset){
      jQuery(".contenedor-menu").addClass('tgle-a-before');
    }
  }
  
	if(jQuery('.menu-inferior > ul ul a').length) {
		jQuery('.menu-inferior > ul ul a').addClass('link-descenso');
	}
	
	if(jQuery('.link-descenso').length) {
	  jQuery('.link-descenso').click(function (e) {    
      var id = jQuery(this).attr('href');

      if(jQuery(id.replace(/\//, '')).length){
        e.preventDefault();
	      jQuery('html,body').animate({
          scrollTop: jQuery(id).length ? jQuery(id).offset().top : 0
	      }, 'slow');
      }
    });
	}
}

function fvf_menu_fijo(){
  var header = jQuery("header#main-header-custom .menu-row");
  var header_offset_top =  header.offset().top + 50;
  
  jQuery(window).scroll(function(){    
    if(jQuery(window).scrollTop() > header_offset_top){
      jQuery("body").addClass("toggle_body");
    }else{
      jQuery("body").removeClass("toggle_body");
    }      
  }); 
}

function fvf_slide_opciones_donar() {
  var slick_container = jQuery('.page-node-type-page-donar #maquetacion-formularios-apadrina #formulario-paso-1 .donar-item').parents('.row');
  if (slick_container.length) {
    if (jQuery(window).width() < 768) {
      slick_container.slick({ slidesToShow: 1.1, arrows: false });
    } else if (slick_container.hasClass('slick-initialized') ) {
      slick_container.slick('unslick');
    }
  }
}

function fvf_contactaForm_control() {
  var form = jQuery('.webform-submission-add-form.webform-submission-contact-form');
  var invalidradios = false;
  var invalidinput = -1;
  var unless = function(form) {
    var invalid = false;
    form.find('.form-required + input').each(function(i) {
      invalid = jQuery(this).val().length < 1;
      if (invalid) { invalidinput = i; }
    });
    form.find('.required input').each(function() {
      if (!jQuery(this).is(':checked')) {
        invalid = true; 
        invalidradios = true;
      } else {
        invalid = false;
        return false; 
      }
    });
    return invalid;
  };
  var after = function(form) {
    if (invalidinput >= 0) {
      jQuery(form.find('.form-required')[invalidinput]).css('color', '#cf3a55');
    }
    if (invalidradios) {
      form.find('legend span').css('color', '#cf3a55');
    }
  };
  fvf_preventDefaultOnFormSubmit(form, unless, after);
}

function fvf_preventDefaultOnFormSubmit(form, unless, after) {
  form.on("submit", function(e) {
    if (unless(form)) {
      e.preventDefault();
      after(form);
    }
  });
}
