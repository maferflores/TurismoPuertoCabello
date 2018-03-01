(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 36)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });


// CODIGO PARA EDITAR EL NAV EN VERSION MOVIL...
// var navMovilClickeado = 0;

// $('#navMovil').click(function(){
//     // alert('hola')
//   $('#mainNav').toggleClass("bg-transparent",false);
//   $('#mainNav').toggleClass("bg-dark",true);

//     //quiero que este codigo se ejecute SOLO UNA VEZ!
//   if (navMovilClickeado == 0) {
//       // Muestra los textos del menu en el movil
//       //$('.hiddenText').toggleClass('hiddenText',false);
//       navMovilClickeado += 1;
//       console.log(navMovilClickeado)
//   }

// });
// /CODIGO PARA EDITAR EL NAV EN VERSION MOVIL...



  // ===================CUANDO SE ENFOQUE EL INICIO, BARRA TRANSPARENTE======================
$(window).scroll(function(){
  $('#Inicio .imagen-portada').each(function(){
    if(isScrolledIntoView($(this))){
      // $(this).children('span').text('visible');
    $('#mainNav').toggleClass("fondo-azul",true);
    $('#mainNav').toggleClass("fondo-azul-claro",false);
    $('#logo').toggleClass("icono-blanco",false);
    }
    else{
      // $(this).children('span').text('invisible');
    $('#mainNav').toggleClass("fondo-azul",false);
    $('#mainNav').toggleClass("fondo-azul-claro",true);
    $('#logo').toggleClass("icono-blanco",true);
    }
  });
});

function isScrolledIntoView(elem){
    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
  // =========================================


  // $("#CarouselFotos").swiperight(function() {
  //   $(this).carousel('prev');
  // });
  // $("#CarouselFotos").swipeleft(function() {
  //   $(this).carousel('next');
  // });
  
  // Eventos De Los Caruseles
  //Evento que se dispara cuando el slide termina de cambiar
  
  

  $('#CarouselFotosPlayas').on('slid.bs.carousel', function (event) {

      let indice = obtenerIndiceElemetoCarusel(event);
      // console.log(indice);
      //obtengo todos los anchor de la navegacion
      let listaDeAnchors = $('#botonesCarouselPlaya').find('a');
      // console.log('--Antes--')
      // console.log(listaDeAnchors);
      listaDeAnchors[0].href = '#playa-item-'+indice+'-ubicacion';
      listaDeAnchors[0].className = "active";

      listaDeAnchors[1].href = '#playa-item-'+indice+'-comida';
      listaDeAnchors[1].className = "";

      listaDeAnchors[2].href = '#playa-item-'+indice+'-hospedaje';
      listaDeAnchors[2].className = "";

      listaDeAnchors[3].href = '#playa-item-'+indice+'-masinfo';
      listaDeAnchors[3].className = "";
      // console.log('--Despues--')
      // console.log(listaDeAnchors);

      // resetearTabCarousel('#CarouselFotosPlayas','ubicacion');
  });


  $('#CarouselFotosParques').on('slid.bs.carousel', function (event) {
    
    let indice = obtenerIndiceElemetoCarusel(event);
    // console.log(indice);
    //obtengo todos los anchor de la navegacion
    let listaDeAnchors = $('#botonesCarouselParques').find('a');
    // console.log('--Antes--')
    // console.log(listaDeAnchors);
      listaDeAnchors[0].href = '#parque-item-'+indice+'-ubicacion';
      listaDeAnchors[0].className = "active";

      listaDeAnchors[1].href = '#parque-item-'+indice+'-comida';
      listaDeAnchors[1].className = "";

      listaDeAnchors[2].href = '#parque-item-'+indice+'-masinfo';
      listaDeAnchors[2].className = "";

    resetearTabCarousel('#CarouselFotosParques','ubicacion');
});

  function obtenerIndiceElemetoCarusel(event){
    //Obtenemos el id del elemento
    let elementoDelCarousel = event.relatedTarget.id;
    //extraemos el numero del id
    return elementoDelCarousel.split("-")[2];
  }

  function resetearTabCarousel(idCarousel,sufijoTabPredetermminado){
    let listaDeTabs = $(idCarousel).find('.tab-pane');
    $.each(listaDeTabs,function(key, value){
      if(value.id.includes(sufijoTabPredetermminado)){
        // console.log(value.id)
        value.className = "tab-pane active";
      }
      else{
        value.className = "tab-pane";
      }
      // value.className = "tab-pane"
    });
  }

})(jQuery); // End of use strict
