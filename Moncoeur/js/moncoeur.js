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

// 牽手
var dleft = new Swiper('#date_left', {
      simulateTouch: false,
      loop: true,
});

var dright = new Swiper('#date_right', {
      simulateTouch: false,
      loop: true,
});

var dcenter = new Swiper('#date_center', {
      simulateTouch: false,
      loop: true,
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
      loop: true,
      navigation: {
            nextEl: '.wedding_next',
            prevEl: '.wedding_prev',
      },
})

var wc = new Swiper('#wedding_center', {
      direction: 'horizontal',
      simulateTouch: false,
      loop: true,
      navigation: {
            nextEl: '.wedding_next',
            prevEl: '.wedding_prev',
      },
})

var wr = new Swiper('#wedding_right', {
      direction: 'horizontal',
      simulateTouch: false,
      loop: true,
      navigation: {
            nextEl: '.wedding_next',
            prevEl: '.wedding_prev',
      },
})

var wall = new Swiper('#wedding_imgall', {
      loop: true,
      controller: {
            control: [wl,wc,wr],
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
});

var fright = new Swiper('#family_right', {
      simulateTouch: false,
      loop: true,
});

var fcenter = new Swiper('#family_center', {
      simulateTouch: false,
      loop: true,
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