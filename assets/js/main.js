$('.slider').slick({
  speed: 300,
  dots:true,
  autoplay:true,
  autoplaySpeed:3000,
  centerMode:true,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

let previewContainer = document.querySelector('.food-preview-container');
let previewBox = document.querySelector('.food-preview');

document.querySelectorAll('.food .card').forEach(food =>{
  food.onclick = () =>{
    previewContainer.style.display = 'flex'
    let name = food.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});


