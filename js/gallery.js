$( "#btn-more-gallery" ).click(function() {
    $( "#btn-more-gallery" ).css('display', 'none');  
    $( "#show-jpg-gallery" ).find('.hidden-gallery-item').removeClass('hidden-gallery-item');
    $( ".btn-all" ).click();
  });