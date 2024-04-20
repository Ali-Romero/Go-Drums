function initSwiperMain() {
  const swiper = new Swiper('.swiper-main', {
    speed: 550,
    effect: 'fade',
    rewind: true,
    pagination: {
      el: '.main-pagination',
      type: 'progressbar',
    },
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
  })

  let swiperAllSlides = document.querySelector('.total')
  let swiperCurrentSlide = document.querySelector('.current')

  swiperAllSlides.innerHTML = '0' + swiper.slides.length

  swiper.on('slideChange', function () {
    let currentSlide = ++swiper.realIndex
    swiperCurrentSlide.innerHTML = '0' + currentSlide
  })
}

function initSwiperFinances() {
  const swiper = new Swiper('.swiper-finances', {
    speed: 450,
    effect: 'coverflow',
    rewind: true,
    pagination: {
      el: '.finances-pagination',
      type: 'progressbar',
    },
    breakpoints: {
      200: {
        slideToClickedSlide: true,
        coverflowEffect: {
          rotate: 60,
          stretch: 14,
          depth: 500,
          scale: 0.7,
          modifier: 1,
          slideShadows: false,
        },
        allowTouchMove: true,
      },
      768: {
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 0,
          slideShadows: false,
        },
        allowTouchMove: false,
      },
    },
  })
}

$(document).ready(function () {
  initSwiperMain()
  initSwiperFinances()
})
