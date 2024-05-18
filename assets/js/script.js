// ハンバーガーメニュー
$(document).ready(function() {
  const toggleMenu = function() {
      $('.js-openbtn').toggleClass('active');
      $('#js-g-nav').toggleClass('panelactive');
      $('.top').toggleClass('is-active');
  };

  const closeMenu = function() {
      $('.js-openbtn').removeClass('active');
      $('#js-g-nav').removeClass('panelactive');
      $('.top').removeClass('is-active');
  };

  const checkWindowSize = function() {
      if ($(window).width() >= 769) {
          closeMenu();
      }
  };

  $('.js-openbtn').click(toggleMenu);

  $('#js-g-nav a').click(closeMenu);

  $('#js-g-nav').click(closeMenu);

  $(window).resize(checkWindowSize);

  // 初回チェック
  checkWindowSize();
});


// スムーススクロール実装
$('a[href^="#"]').click(function(event) {
    // リンク先のセクションIDを取得
    const targetId = $(this).attr("href");

    // リンク先のセクションが存在しない場合やターゲットがページトップの場合、処理を終了
    if (!targetId || targetId === "#") return;

    // 対象のセクションを取得
    const $target = $(targetId);

    // 対象のセクションが存在しない場合、処理を終了
    if (!$target.length) return;

    // ヘッダーの高さを取得
    const headerHeight = $(".js-header").outerHeight() || 0;

    // 移動速度を指定（ミリ秒）
    const speed = 400;

    // ターゲットの位置までスムーズにスクロール
    $("html, body").animate({
        scrollTop: $target.offset().top - headerHeight
    }, speed);

    // デフォルトのクリック動作をキャンセル
    event.preventDefault();
});

// Swiper

// JS 基本初期化

const mySwiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  loopAdditionalSlides: 1,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 1,
  nested: true,
  watchSlidesProgress: true,
  breakpoints: {
    1320: {
      slidesPerView: 5,
      spaceBetween: 6,
    },
    // 769px以上の場合
    769: {
      slidesPerView: 4.5,
      spaceBetween: 6,
    }
  },
  
  speed: 300, // スライドアニメーションのスピード（ミリ秒）

  autoplay: { // 自動再生させる
    delay: 3000, // 次のスライドに切り替わるまでの時間（ミリ秒）
    disableOnInteraction: false, // ユーザーが操作しても自動再生を止めない
    waitForTransition: false, // アニメーションの間も自動再生を止めない（最初のスライドの表示時間を揃えたいときに）
  },
 
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
 
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


// google form 連携
let $form = $('#js-form');
$form.submit(function(e) {
  $.ajax({
   url: $form.attr('action'),
   data: $form.serialize(),
   type: "POST",
   dataType: "xml",
   statusCode: {
      0: function() {
        //送信に成功したときの処理
        $form.slideUp();
        $('#js-success').slideDown();
      },
      200: function() {
        //送信に失敗したときの処理
        $('#js-error').slideDown();
      }
    }
  });
  return false;
});

// // formの入力確認
let $submit = $('#js-submit');
$('#js-form input, #js-form textarea').on( 'change', function() {
  if(
    $( '#js-form input[name="entry.745940773"]').val() !== "" &&
    $( '#js-form input[name="entry.1220329111"]').val() !== "" &&
    // $( '#js-form input[name="entry.692740317"]').val() !== "" &&
    $( '#js-form input[name="entry.1949003051"]').val() !== "" &&
    $( '#js-form textarea[name="entry.895616368"]').val() !== "" &&
   
    $( '#js-form input[name="checkbox"]').prop( 'checked') === true
  ) {
    //全て入力された時
    $submit.prop('disabled', false);
    $submit.removeClass( '-disabled');
  } else {
    //入力されていない時
    $submit.prop('disabled', true);
    $submit.addClass( '-disabled');
  }
});



