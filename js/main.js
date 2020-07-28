const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.close-btn');
burger.addEventListener('click', function(){
menu.classList.toggle('active');
})
closeMenu.addEventListener('click', function(){
menu.classList.toggle('active');
})
$('#slide').slick({
slidesToShow: 1,    
arrows:true,
prevArrow:'<img src="img/prev-arrow.png" class="slick-prev">',  
nextArrow:'<img src="img/prev-arrow.png" class="slick-next">',
});
$("#team-slider").slick({
dots:true,
arrows:false,
slidesToShow: 4,
responsive: [
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2
      }
    },
    {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
  ]
});