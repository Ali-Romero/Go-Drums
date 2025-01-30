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

function filterInvalidCharacters() {
  $('input[name="name"]').on('input', function() {
    let value = $(this).val();
    $(this).val(value.replace(/[^a-zA-Zа-яА-ЯёЁ ]/g, ''));
  });
}

$(document).ready(function () {
  initAnchorBtn()
  initActiveItem()
  filterInvalidCharacters()

  $('input').inputmask()
})
