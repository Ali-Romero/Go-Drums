function initAnchorBtn() {
  $('[data-scroll-top]').on('click', function () {
    $('.modal-scrollable').animate(
      {
        scrollTop: 0,
      },
      1000,
    )
  })
}

function initActiveItem() {
  $('.investment-js').on('click', function () {
    $('.investment-js').removeClass('active')
    $(this).addClass('active')
  })
}

$(document).ready(function () {
  initAnchorBtn()
  initActiveItem()

  $('input').inputmask()
})
