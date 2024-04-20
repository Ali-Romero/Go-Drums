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

function setCurrentYear() {
  $('[data-current-year]').text(new Date().getFullYear())
}

$(document).ready(function () {
  initAnchorBtn()
  initActiveItem()
  setCurrentYear()

  $('input').inputmask()
})
