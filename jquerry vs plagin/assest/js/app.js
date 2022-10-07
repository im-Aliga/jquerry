$(document).ready(function(){
let buttons = document.querySelectorAll('.upmenu li');
let downsmenus = document.querySelectorAll('.downmenu ul');


buttons.forEach(btn => {
    btn.onclick = function () {
        let id = this.id;

        for(let downmenu of downsmenus){
            if(downmenu.id == id) {
                $(downmenu).slideToggle();
            }
        }
       
    }
    for(let downmenu of downsmenus){
        
        $(downmenu).hide();
        
    }

    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });


})








})