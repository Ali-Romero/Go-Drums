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

function initSwiperFormats() {
  const swiper = new Swiper('.swiper-formats', {
    speed: 450,
    effect: 'coverflow',
    rewind: true,
    pagination: {
      el: '.formats-pagination',
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

function initSwiperGallery1() {
  const swiper = new Swiper('.swiper-gallery-1', {
    speed: 500,
    effect: 'coverflow',
    initialSlide: 1,
    grabCursor: true,
    spaceBetween: 10,
    loop: true,
    loopedSlides: 2,
    navigation: {
      nextEl: '.gallery-1-button-next',
      prevEl: '.gallery-1-button-prev',
    },
    breakpoints: {
      200: {
        slideToClickedSlide: true,
        coverflowEffect: {
          rotate: 20,
          stretch: -56,
          scale: 0.98,
          depth: 500,
          modifier: 1,
          slideShadows: false,
        },
        allowTouchMove: true,
      },
      768: {
        slideToClickedSlide: true,
        spaceBetween: 10,
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          scale: 1,
          depth: 0,
          modifier: 1,
          slideShadows: false,
        },
        allowTouchMove: true,
      },
      1024: {
        slideToClickedSlide: true,
        spaceBetween: 20,
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          scale: 1,
          depth: 0,
          modifier: 1,
          slideShadows: false,
        },
        allowTouchMove: true,
      },
    },
  })
}

function initSwiperGallery2() {
  const swiper = new Swiper('.swiper-gallery-2', {
    speed: 500,
    effect: 'coverflow',
    initialSlide: 1,
    grabCursor: true,
    spaceBetween: 10,
    loop: true,
    loopedSlides: 2,
    navigation: {
      nextEl: '.gallery-2-button-next',
      prevEl: '.gallery-2-button-prev',
    },
    breakpoints: {
      200: {
        slideToClickedSlide: true,
        coverflowEffect: {
          rotate: 20,
          stretch: -56,
          scale: 0.98,
          depth: 500,
          modifier: 1,
          slideShadows: false,
        },
        allowTouchMove: true,
      },
      768: {
        slideToClickedSlide: true,
        spaceBetween: 10,
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          scale: 1,
          depth: 0,
          modifier: 1,
          slideShadows: false,
        },
        allowTouchMove: true,
      },
      1024: {
        slideToClickedSlide: true,
        spaceBetween: 20,
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          scale: 1,
          depth: 0,
          modifier: 1,
          slideShadows: false,
        },
        allowTouchMove: true,
      },
    },
  })
}

function initSwiperGallery3() {
  const swiper = new Swiper('.swiper-gallery-3', {
    speed: 450,
    effect: 'coverflow',
    rewind: true,
    pagination: {
      el: '.gallery-3-pagination',
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
  initSwiperFinances()
  initSwiperFormats()
  initSwiperGallery1()
  initSwiperGallery2()
  initSwiperGallery3()
})
