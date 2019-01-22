// small_nav
var snav_btn = document.querySelector('#small_navbtn');
var snav_word = document.querySelector('#small_navword');
var snav_logobg = document.querySelector('#small_nav_logo');
var sn_logo = document.querySelector('#sn_logo');

snav_btn.onclick = function () {
      snav_word.classList.toggle('show');
      snav_logobg.classList.toggle('show');
      sn_logo.classList.toggle('show');
};

// 移動效果
// 重新整理後會返回top，且頁面會如同重新載入般進行頂部動畫效果
window.onbeforeunload = function () {
      window.scrollTo(0, 0), 500;
};

// nav_logo
$('#nav_logo').click(function () {
      $('html,body').animate({
            scrollTop: ($('body').offset().top - $('#nav').height())
      }, 1000);
});

// nav_word
$('#go_three_section').click(function () {
      $('html,body').animate({
            scrollTop: ($('#date').offset().top - $('#nav').height())
      }, 1000);
});

$('#go_news').click(function () {
      $('html,body').animate({
            scrollTop: ($('#news').offset().top - $('#nav').height())
      }, 1000);
});

$('#go_restaurant').click(function () {
      $('html,body').animate({
            scrollTop: ($('#restaurant').offset().top - $('#nav').height())
      }, 1000);
});

$('#go_ig').click(function () {
      $('html,body').animate({
            scrollTop: ($('#ig').offset().top - $('#nav').height())
      }, 1000);
});

// three_section
$('#three_left').click(function () {
      $('html,body').animate({
            scrollTop: ($('#date').offset().top - $('#nav').height())
      }, 1000);
});

$('#three_center').click(function () {
      $('html,body').animate({
            scrollTop: ($('#wedding').offset().top - $('#nav').height())
      }, 1000);
});

$('#three_right').click(function () {
      $('html,body').animate({
            scrollTop: ($('#family').offset().top - $('#nav').height())
      }, 1000);
});

// phone_nav
$('#sn_logo').click(function () {
      $('html,body').animate({
            scrollTop: ($('body').offset().top)
      }, 1000);

      snav_word.classList.remove('show');
      snav_logobg.classList.remove('show');
      sn_logo.classList.remove('show');
});

$('#sn_godate').click(function () {
      $('html,body').animate({
            scrollTop: ($('#date').offset().top)
      }, 1000);

      snav_word.classList.remove('show');
      snav_logobg.classList.remove('show');
      sn_logo.classList.remove('show');
});

$('#sn_gonews').click(function () {
      $('html,body').animate({
            scrollTop: ($('#news').offset().top)
      }, 1000);

      snav_word.classList.remove('show');
      snav_logobg.classList.remove('show');
      sn_logo.classList.remove('show');
});

$('#sn_gotable').click(function () {
      $('html,body').animate({
            scrollTop: ($('#restaurant').offset().top)
      }, 1000);

      snav_word.classList.remove('show');
      snav_logobg.classList.remove('show');
      sn_logo.classList.remove('show');
});

$('#sn_goig').click(function () {
      $('html,body').animate({
            scrollTop: ($('#ig').offset().top)
      }, 1000);

      snav_word.classList.remove('show');
      snav_logobg.classList.remove('show');
      sn_logo.classList.remove('show');
});

$('.sn_go').click(function () {
      $('html,body').animate({
            scrollTop: ($('body').offset().top)
      }, 1000);

      snav_word.classList.remove('show');
      snav_logobg.classList.remove('show');
      sn_logo.classList.remove('show');
});



// 牽手
var dleft = new Swiper('#date_left', {
      simulateTouch: false,
      loop: true,
      effect: 'fade',
      fade: {
            crossFade: false,
      },
});

var dright = new Swiper('#date_right', {
      simulateTouch: false,
      loop: true,
      effect: 'fade',
      fade: {
            crossFade: false,
      },
});

var dcenter = new Swiper('#date_center', {
      simulateTouch: false,
      loop: true,
      effect: 'fade',
      fade: {
            crossFade: false,
      },
      controller: {
            control: [dleft, dright],
      },
      navigation: {
            nextEl: '.date_next',
            prevEl: '.date_prev',
      },
});
// 結婚
var wl = new Swiper('#wedding_left', {
      direction: 'horizontal',
      simulateTouch: false,
      spaceBetween: 100,
      loop: true,
      navigation: {
            nextEl: '.wedding_next',
            prevEl: '.wedding_prev',
      },
})

var wc = new Swiper('#wedding_center', {
      direction: 'horizontal',
      simulateTouch: false,
      spaceBetween: 100,
      loop: true,
      navigation: {
            nextEl: '.wedding_next',
            prevEl: '.wedding_prev',
      },
})

var wr = new Swiper('#wedding_right', {
      direction: 'horizontal',
      simulateTouch: false,
      spaceBetween: 100,
      loop: true,
      navigation: {
            nextEl: '.wedding_next',
            prevEl: '.wedding_prev',
      },
})

var wall = new Swiper('#wedding_imgall', {
      loop: true,
      controller: {
            control: [wl, wc, wr],
      },
      navigation: {
            nextEl: '.wedding_next',
            prevEl: '.wedding_prev',
      },
});


// 親友
var fleft = new Swiper('#family_left', {
      simulateTouch: false,
      loop: true,
      effect: 'fade',
      fade: {
            crossFade: false,
      },
});

var fright = new Swiper('#family_right', {
      simulateTouch: false,
      loop: true,
      effect: 'fade',
      fade: {
            crossFade: false,
      },
});

var fcenter = new Swiper('#family_center', {
      simulateTouch: false,
      loop: true,
      effect: 'fade',
      fade: {
            crossFade: false,
      },
      controller: {
            control: [fleft, fright],
      },
      navigation: {
            nextEl: '.family_next',
            prevEl: '.family_prev',
      },
});


// 消息
var news_left = document.querySelector('.news_tag_left');
var word_box = document.querySelector("#news_word");
var news_right = document.querySelector(".news_tag_right");
var money_word = document.querySelector('#money_word');

news_left.onclick = function () {
      word_box.classList.remove('hide');
      money_word.classList.remove('show');
      news_left.classList.remove('hide');
      news_right.classList.remove('show');
};
news_right.onclick = function () {
      money_word.classList.add('show');
      word_box.classList.add('hide');
      news_left.classList.add('hide');
      news_right.classList.add('show');
};