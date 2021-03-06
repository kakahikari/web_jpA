$(function(){
  $(document).on('scroll',function() {
    var _scrollTop = $(this).scrollTop();
    if(_scrollTop > 340) {
      $('nav').addClass('js-active');
      $('nav li').removeClass('js-active');
      if(_scrollTop < $('#page2').offset().top - 94)
        $('nav li').eq(0).addClass('js-active');
      else
      if(_scrollTop < $('#page3').offset().top - 94)
        $('nav li').eq(1).addClass('js-active');
      else
      if(_scrollTop < $('#page4').offset().top - 94)
        $('nav li').eq(2).addClass('js-active');
      else
      if(_scrollTop < $('#page5').offset().top - 94)
        $('nav li').eq(3).addClass('js-active');
      else
      if(_scrollTop < $('#page6').offset().top - 94)
        $('nav li').eq(4).addClass('js-active');
      else
      if(_scrollTop < $('#page7').offset().top - 94)
        $('nav li').eq(5).addClass('js-active');
    }
    else
      $('nav').removeClass('js-active');
  });
  $(document).on('click','.tabs li',function() {
    var _index = $(".tabs li").index(this);
     $('.tabs li').removeClass('js-active');
     $(this).addClass('js-active');
     $('.tabs-content .item').removeClass('js-active');
     $('.tabs-content .item').eq(_index).addClass('js-active');
  });
  $(document).on('click','.more',function() {
    $(this).toggleClass('js-active');
  });
  $(document).on('click','.help',function() {
    $(this).toggleClass('js-active');
  });
  $(document).on('click','.right .social',function() {
    $('.social-mobile-menu').toggleClass('js-active');
    $('.left span').toggleClass('js-disable');
  });
  $(document).on('click','.left .menu',function() {
    $('nav').toggleClass('js-menu-active');
    $('.left .menu').toggleClass('js-menu-active');
  });

  // iOS fix fixed
  var u = navigator.userAgent, app = navigator.appVersion;
  var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

  if (isIOS) {
    $('header').addClass('js-fix-fixed');
    $('nav').addClass('js-fix-fixed');
    $(document).on('scroll', function () {
      $('header').css('top', $(this).scrollTop());
      $('nav').css('top', $(this).scrollTop() + 40);
    });
  }

});
