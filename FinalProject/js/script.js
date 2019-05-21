$('.carousel').carousel({
   interval: 4000
});

$(window).scroll(function() {
   var wScroll = $(this).scrollTop();

   if(wScroll > $('.portfolio').offset().top + 450){
      $('.portfolio .thumbnail').each(function(i){
         setTimeout(function(){
            $('.portfolio .thumbnail').eq(i).addClass('muncul');
         }, 300 * (i+1));
      });
   }
});

