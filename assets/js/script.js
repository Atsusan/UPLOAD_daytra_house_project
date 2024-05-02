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