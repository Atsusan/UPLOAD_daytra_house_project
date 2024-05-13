// ハンバーガーメニュー実装
jQuery('.js-openbtn').click(function() {
    jQuery(this).toggleClass('active'); // ボタン自身にactiveクラスを付与
    jQuery('#js-g-nav').toggleClass('panelactive'); //ナビゲーションにpanelactiveクラスを付与
    jQuery('.top').toggleClass('is-active');
});

jQuery('#js-g-nav a').click(function() {
    jQuery('.js-openbtn').removeClass('active'); //ボタンのactiveクラスを削除
    jQuery('#js-g-nav').removeClass('panelactive'); //ナビゲーションのpanelactiveクラスを削除
    jQuery('.top').removeClass('is-active');
});

jQuery('#js-g-nav').click(function() { // 背面をクリックしたら解除する処置
    jQuery('.js-openbtn').removeClass('active');
    jQuery('#js-g-nav').removeClass('panelactive');
    jQuery('.top').removeClass('is-active');
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

// JS 基本　初期化

const mySwiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  loopAdditionalSlides: 1,
  slidesPerView: 1,
  nested: true,
  watchSlidesProgress: true,
  breakpoints: {
    1320: {
      slidesPerView: 5,
      spaceBetween: 6,
    },
    // 768px以上の場合
    768: {
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
 
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});