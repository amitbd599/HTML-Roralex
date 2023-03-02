/***************************************************
==================== JS INDEX ======================
****************************************************
01. PreLoader Js


****************************************************/

(function ($) {
  "use strict";

  var windowOn = $(window);
  ////////////////////////////////////////////////////
  // 01. PreLoader Js //
  windowOn.on("load", function () {
    $(".preloader").fadeOut(500);
  });

  ////////////////////////////////////////////////////
  // ============= Mobile Menu Js =============
  $("#mobile-menu").meanmenu({
    meanMenuContainer: ".mobile-menu",
    meanScreenWidth: "991",
    meanExpand: ['<i class="fal fa-plus"></i>'],
  });

  ///////////////////////////////////////////////////
  // ============= Mobile Menu 2 =============
  $("#mobile-menu-2").meanmenu({
    meanMenuContainer: ".mobile-menu-2",
    meanScreenWidth: "1199",
    meanExpand: ['<i class="fal fa-plus"></i>'],
  });

  ////////////////////////////////////////////////////
  // ============= Sidebar Js  =============
  $(".sidebar-toggle-btn").on("click", function () {
    $(".mobile-sidebar-area").addClass("sidebar-opened");
    $(".body-overlay").addClass("opened");
  });
  $(".sidebar__close-btn").on("click", function () {
    $(".mobile-sidebar-area").removeClass("sidebar-opened");
    $(".body-overlay").removeClass("opened");
  });

  // ============= Body overlay Js =============
  $(".body-overlay").on("click", function () {
    $(".mobile-sidebar-area").removeClass("sidebar-opened");
    $(".body-overlay").removeClass("opened");
  });

  ////////////////////////////////////////////////////
  // 05. Search Js
  $(".search-toggle").on("click", function () {
    $(".search__area").addClass("opened");
  });
  $(".search-close-btn").on("click", function () {
    $(".search__area").removeClass("opened");
  });

  // ============= Sticky Header Js =============
  windowOn.on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 100) {
      $("#header-sticky").removeClass("header__sticky");
    } else {
      $("#header-sticky").addClass("header__sticky");
    }
  });

  // 07. Data CSS Js
  $("[data-background").each(function () {
    $(this).css(
      "background-image",
      "url( " + $(this).attr("data-background") + "  )"
    );
  });

  $("[data-width]").each(function () {
    $(this).css("width", $(this).attr("data-width"));
  });

  $("[data-bg-color]").each(function () {
    $(this).css("background-color", $(this).attr("data-bg-color"));
  });

  ////////////////////////////////////////////////////
  // 07. Nice Select Js
  $("select").niceSelect();

  ///////////////////////////////////////////////////
  // ============= Hero  Slider Js =============
  var heroSliderNav = new Swiper(".hero-slider-nav", {
    spaceBetween: 0,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,

    breakpoints: {
      550: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
      1400: {
        slidesPerView: 4,
      },
    },
  });
  var heroSlider = new Swiper(".hero-slider", {
    spaceBetween: 0,
    effect: "fade",
    loop: true,
    autoplay: {
      delay: 6000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: heroSliderNav,
    },
  });

  var heroSliderTwo = new Swiper(".hero-slider-two", {
    spaceBetween: 0,
    effect: "fade",
    loop: true,

    autoplay: {
      delay: 6000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".hero-slider-two-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      0: {
        pagination: false,
      },
      500: {
        pagination: false,
      },
      768: {
        pagination: false,
      },
    },
  });

  var heroSliderThree = new Swiper(".hero-slider-three", {
    spaceBetween: 0,
    effect: "fade",
    loop: true,

    autoplay: {
      delay: 6000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".hero-slider-three-pagination",
      type: "bullets",
      clickable: true,
    },
  });

  ///////////////////////////////////////////////////
  // ============= Team Slider Js =============

  var TeamVersionOne = new Swiper(".team-version-one", {
    slidesPerView: 4,
    spaceBetween: 0,
    slidesPerGroup: 2,
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 6000,
    },
    pagination: {
      el: ".team-version-one-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        pagination: false,
        spaceBetween: 20,
        slidesPerGroup: 1,
      },
      500: {
        slidesPerView: 1,
        pagination: false,
        spaceBetween: 20,
        slidesPerGroup: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
      1400: {
        slidesPerView: 4,
      },
    },
  });

  var TeamVersionTwo = new Swiper(".team-version-two", {
    slidesPerView: 4,
    spaceBetween: 0,
    slidesPerGroup: 2,
    speed: 1000,
    loop: true,

    autoplay: {
      delay: 6000,
    },
    pagination: {
      el: ".team-version-two-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var TeamVersionThree = new Swiper(".team-version-three", {
    slidesPerView: 4,
    spaceBetween: 20,
    slidesPerGroup: 2,
    speed: 1000,
    loop: true,

    autoplay: {
      delay: 6000,
    },
    pagination: {
      el: ".team-version-three-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  ///////////////////////////////////////////////////
  // ============= Service Slider Js =============

  var ServiceListVersionTwo = new Swiper(".serviceList-version-two", {
    slidesPerView: 4,
    slidesPerGroup: 2,
    spaceBetween: 30,
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 6000,
    },
    pagination: {
      el: ".serviceList-section-version-two-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      500: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
        slidesPerGroup: 2,
      },
      1200: {
        slidesPerView: 3,
        slidesPerGroup: 2,
      },
      1400: {
        slidesPerView: 3,
        slidesPerGroup: 2,
      },
    },
  });

  // ============= Hip Slider Js =============

  var HipSliderOne = new Swiper(".hip-slider-one", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 6000,
    },
    pagination: {
      el: ".hip-slider-pagination",
      type: "bullets",
      clickable: true,
    },
  });

  ///////////////////////////////////////////////////
  // =========== Client-Review  Start =========== Js //

  // Client-review-version-one-slider
  var ReviewVersionOne = new Swiper(".review-version-one", {
    slidesPerView: 3,
    spaceBetween: 45,
    slidesPerGroup: 2,
    loop: true,
    speed: 2000,
    autoplay: {
      delay: 6000,
    },
    pagination: {
      el: ".review-version-one-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        pagination: false,
        slidesPerGroup: 1,
      },
      500: {
        slidesPerView: 1,
        pagination: false,
        slidesPerGroup: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
      },
    },
  });

  // Client-review-version-two-slider
  var ReviewVersionTwo = new Swiper(".review-version-two", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,

    autoplay: {
      delay: 6000,
    },
    pagination: {
      el: ".review-version-two-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Client-review-version-three

  $(".reviewHold").imagesLoaded(function () {
    var $reviewHold = $(".review-version-three").isotope({
      // options
      filter: $(".pro1"),
    });
    // filter items on button click
    $(".review-filter").on("click", ".img-file", function () {
      var filterValue = $(this).attr("data-filter");
      $reviewHold.isotope({ filter: filterValue });
    });

    //for menu active class
    $(".review-filter .img-file").on("click", function (event) {
      $(".active").removeClass("active");
      $(this).addClass(" active");
      event.preventDefault();
    });
  });

  // =========== Client-Review Slider End =========== Js //

  // =========== Blog Slider Start =========== Js //

  var BlogSliderOne = new Swiper(".blog-version-three", {
    slidesPerView: 3,
    spaceBetween: 0,
    slidesPerGroup: 2,
    speed: 1000,
    loop: true,

    autoplay: {
      delay: 6000,
    },
    pagination: {
      el: ".blog-version-three-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // =========== Blog Slider End =========== Js //

  // =========== Marquee Slider=========== //
  // Top Header
  $("#topHeader").scrollbox();
  // Top Header
  $("#clientBrand").scrollbox();

  // =================== Jquery Tabs Start =================== //

  $(".tabs-inner").jQueryTab({
    activeClass: "active",
    responsive: true,
    collapsible: true,
  });

  // =================== Jquery Tabs End =================== //

  ///////////////////////////////////////////////////
  // 13. Masonary Js
  $(".package__slider").owlCarousel({
    //add owl carousel in activation class
    loop: true,
    margin: 30,
    items: 4,
    navText: [
      '<button class="nav-left"><i class="far fa-angle-left"></i></button>',
      '<button class="nav-right"><i class="far fa-angle-right"></i></button>',
    ],
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      767: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });

  ////////////////////////////////////////////////////
  // 13. Masonary Js
  $(".grid").imagesLoaded(function () {
    // init Isotope
    var $grid = $(".grid").isotope({
      itemSelector: ".grid-item",
      percentPosition: true,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: ".grid-item",
      },
    });

    // filter items on button click
    $(".masonary-menu").on("click", "button", function () {
      var filterValue = $(this).attr("data-filter");
      $grid.isotope({ filter: filterValue });
    });

    //for menu active class
    $(".masonary-menu button").on("click", function (event) {
      $(this).siblings(".active").removeClass("active");
      $(this).addClass("active");
      event.preventDefault();
    });
  });

  /* magnificPopup img view */
  $(".popup-image").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  /* magnificPopup video view */
  $(".popup-video").magnificPopup({
    type: "iframe",
  });

  ////////////////////////////////////////////////////
  // 14. Wow Js
  new WOW().init();

  ////////////////////////////////////////////////////
  // 16. Cart Quantity Js
  $(".cart-minus").click(function () {
    var $input = $(this).parent().find("input");
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $(".cart-plus").click(function () {
    var $input = $(this).parent().find("input");
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });

  ////////////////////////////////////////////////////
  // 17. Show Login Toggle Js
  $("#showlogin").on("click", function () {
    $("#checkout-login").slideToggle(900);
  });

  ////////////////////////////////////////////////////
  // 18. Show Coupon Toggle Js
  $("#showcoupon").on("click", function () {
    $("#checkout_coupon").slideToggle(900);
  });

  ////////////////////////////////////////////////////
  // 19. Create An Account Toggle Js
  $("#cbox").on("click", function () {
    $("#cbox_info").slideToggle(900);
  });

  ////////////////////////////////////////////////////
  // 20. Shipping Box Toggle Js
  $("#ship-box").on("click", function () {
    $("#ship-box-info").slideToggle(1000);
  });

  // ============= Counter Js =============
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });

  ////////////////////////////////////////////////////
  // 22. Parallax Js
  if ($(".scene").length > 0) {
    $(".scene").parallax({
      scalarX: 10.0,
      scalarY: 15.0,
    });
  }

  ////////////////////////////////////////////////////
  // 23. InHover Active Js
  $(".hover__active").on("mouseenter", function () {
    $(this)
      .addClass("active")
      .parent()
      .siblings()
      .find(".hover__active")
      .removeClass("active");
  });

  ////////////////////////////////////////////////////
  // 00. Brand-slider activation Js
  if (jQuery(".brand__slider").length > 0) {
    let brand__slider = new Swiper(".brand__slider", {
      slidesPerView: 1,
      spaceBetween: 30,
      // direction: 'vertical',
      loop: true,
      autoplay: {
        delay: 6000,
      },

      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      // Navigation arrows
      navigation: {
        nextEl: ".bs-button-next",
        prevEl: ".bs-button-prev",
      },

      // And if we need scrollbar
      scrollbar: {
        el: ".swiper-scrollbar",
      },
      breakpoints: {
        550: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
        1400: {
          slidesPerView: 5,
        },
      },
    });
  }

  ////////////////////////////////////////////////////
  // 00. Testimonial slider activation Js
  if (jQuery(".testimonial__slider").length > 0) {
    let testimonial__slider = new Swiper(".testimonial__slider", {
      slidesPerView: 4,
      spaceBetween: 50,
      // direction: 'vertical',
      loop: true,
      autoplay: {
        delay: 6000,
      },

      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      // Navigation arrows
      navigation: {
        nextEl: ".bs-button-next",
        prevEl: ".bs-button-prev",
      },

      // And if we need scrollbar
      scrollbar: {
        el: ".swiper-scrollbar",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        550: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 4,
        },
      },
    });
  }

  ////////////////////////////////////////////////////
  // 00. Team slider activation Js
  if (jQuery(".team__slider").length > 0) {
    let team__slider = new Swiper(".team__slider", {
      slidesPerView: 5,
      spaceBetween: 0,
      // direction: 'vertical',
      loop: false,
      autoplay: {
        delay: 6000,
      },

      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      // Navigation arrows
      navigation: {
        nextEl: ".bs-button-next",
        prevEl: ".bs-button-prev",
      },

      // And if we need scrollbar
      scrollbar: {
        el: ".swiper-scrollbar",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        550: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 4,
        },
        1400: {
          slidesPerView: 5,
        },
      },
    });
  }

  ////////////////////////////////////////////////////
  // 00. Services slider activation Js
  if (jQuery(".services__slider").length > 0) {
    let services__slide = new Swiper(".services__slider", {
      slidesPerView: 3,
      spaceBetween: 30,
      // direction: 'vertical',
      loop: true,
      autoplay: {
        delay: 6000,
      },

      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      // Navigation arrows
      navigation: {
        nextEl: ".bs-button-next",
        prevEl: ".bs-button-prev",
      },

      // And if we need scrollbar
      scrollbar: {
        el: ".swiper-scrollbar",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        550: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 3,
        },
      },
    });
  }

  ////////////////////////////////////////////////////
  // 00. banner__slider activation Js
  if (jQuery(".banner__slider").length > 0) {
    let banner__slider = new Swiper(".banner__slider", {
      slidesPerView: 1,
      spaceBetween: 0,
      // direction: 'vertical',
      loop: false,
      autoplay: {
        delay: 40000,
      },

      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      // Navigation arrows
      navigation: {
        nextEl: ".bs-button-next",
        prevEl: ".bs-button-prev",
      },

      // And if we need scrollbar
      scrollbar: {
        el: ".swiper-scrollbar",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        550: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        1200: {
          slidesPerView: 1,
        },
        1400: {
          slidesPerView: 1,
        },
      },
    });
  }

  ////////////////////////////////////////////////////
  // 00. slider__active activation Js
  if (jQuery(".slider__active").length > 0) {
    let slider__active = new Swiper(".slider__active", {
      slidesPerView: 1,
      spaceBetween: 0,
      // direction: 'vertical',
      loop: true,
      autoplay: {
        delay: 4000,
      },

      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      // And if we need scrollbar
      scrollbar: {
        el: ".swiper-scrollbar",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        550: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        1200: {
          slidesPerView: 1,
        },
        1400: {
          slidesPerView: 1,
        },
      },
    });
  }

  ////////////////////////////////////////////////////
  // 00. project__slider-active Js
  if (jQuery(".project__slider-active").length > 0) {
    var swiper = new Swiper(".project__slider-active", {
      loop: true,
      slidesPerView: "auto",
      spaceBetween: 40,
      pagination: {
        el: ".project-pagination",
        clickable: true,
      },
      pagination: {
        clickable: true,
      },
      // Navigation arrows
      navigation: {
        nextEl: ".project-button-next",
        prevEl: ".project-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        550: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 3,
        },
      },
    });
  }

  ////////////////////////////////////////////////////
  // 00. related__services-slider Js
  if (jQuery(".related__services-slider").length > 0) {
    var swiper = new Swiper(".related__services-slider", {
      slidesPerView: 3,
      spaceBetween: 30,
      // direction: 'vertical',
      loop: true,
      autoplay: {
        delay: 4000,
      },

      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      // Navigation arrows
      navigation: {
        nextEl: ".services-button-next",
        prevEl: ".services-button-prev",
      },

      // And if we need scrollbar
      scrollbar: {
        el: ".swiper-scrollbar",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        550: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 3,
        },
      },
    });
  }

  ////////////////////////////////////////////////////
  // 00. testimonial__slider-2 activation Js
  if (jQuery(".testimonial__slider-2").length > 0) {
    let services__slide = new Swiper(".testimonial__slider-2", {
      slidesPerView: 1,
      spaceBetween: 0,
      slidesPerView: 1,
      mousewheel: true,
      // direction: 'vertical',
      loop: true,
      autoplay: {
        delay: 6000,
      },

      // If we need pagination
      pagination: {
        el: ".ts-pagination",
        clickable: true,
      },
      // Navigation arrows
      navigation: {
        nextEl: ".bs-button-next",
        prevEl: ".bs-button-prev",
      },

      // And if we need scrollbar
      scrollbar: {
        el: ".swiper-scrollbar",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        550: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        1200: {
          slidesPerView: 1,
        },
        1400: {
          slidesPerView: 1,
        },
      },
    });
  }

  ////////////////////////////////////////////////////
  // 00. tp-blog__slider activation Js
  if (jQuery(".tp-blog__slider").length > 0) {
    let services__slide = new Swiper(".tp-blog__slider", {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      autoplay: {
        delay: 3000,
      },
      // Navigation arrows
      navigation: {
        nextEl: ".tp-blog-button-next",
        prevEl: ".tp-blog-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        550: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        1200: {
          slidesPerView: 1,
        },
        1400: {
          slidesPerView: 1,
        },
      },
    });
  }

  ////////////////////////////////////////////////////
  // 00. testimonial__slider-3 activation Js
  if (jQuery(".testimonial__slider-3").length > 0) {
    let services__slide = new Swiper(".testimonial__slider-3", {
      slidesPerView: 1,
      spaceBetween: 0,
      slidesPerView: 1,
      mousewheel: false,
      loop: true,
      autoplay: {
        delay: 6000,
      },

      // If we need pagination
      pagination: {
        el: ".ts-pagination",
        clickable: true,
      },
      // Navigation arrows
      navigation: {
        nextEl: ".ts-button-next",
        prevEl: ".ts-button-prev",
      },

      // And if we need scrollbar
      scrollbar: {
        el: ".swiper-scrollbar",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        550: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        992: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 2,
        },
        1400: {
          slidesPerView: 2,
        },
      },
    });
  }

  ////////////////////////////////////////////////////
  // 00. testimonial__slider-3 activation Js
  if (jQuery(".blog-slider__active").length > 0) {
    let services__slide = new Swiper(".blog-slider__active", {
      slidesPerView: 1,
      spaceBetween: 30,
      slidesPerView: 1,
      mousewheel: false,
      loop: true,
      autoplay: {
        delay: 6000,
      },

      // If we need pagination
      pagination: {
        el: ".ts-pagination",
        clickable: true,
      },
      // Navigation arrows
      navigation: {
        nextEl: ".blog-ts-button-next",
        prevEl: ".blod-ts-button-prev",
      },

      // And if we need scrollbar
      scrollbar: {
        el: ".swiper-scrollbar",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        550: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
        1400: {
          slidesPerView: 4,
        },
      },
    });
  }

  // Jquery Appear
  //----------------------------------------------------------------------------------------
  if ($(".progress-bar").length) {
    $(".progress-bar").appear(
      function () {
        var el = $(this);
        var percent = el.data("width");
        $(el).css("width", percent + "%");
      },
      {
        accY: 0,
      }
    );
  }

  //===== Progress Bar
  // if ($(".progress_line").length) {
  //   $(".progress_line").appear(
  //     function () {
  //       var el = $(this);
  //       var percent = el.data("width");
  //       $(el).css("width", percent + "%");
  //     },
  //     {
  //       accY: 0,
  //     }
  //   );
  // }

  // Jquery Appear raidal
  // if (typeof $.fn.knob != "undefined") {
  //   $(".knob").each(function () {
  //     var $this = $(this),
  //       knobVal = $this.attr("data-rel");

  //     $this.knob({
  //       draw: function () {
  //         $(this.i).val(this.cv + "%");
  //       },
  //     });

  //     $this.appear(
  //       function () {
  //         $({
  //           value: 0,
  //         }).animate(
  //           {
  //             value: knobVal,
  //           },
  //           {
  //             duration: 2000,
  //             easing: "swing",
  //             step: function () {
  //               $this.val(Math.ceil(this.value)).trigger("change");
  //             },
  //           }
  //         );
  //       },
  //       {
  //         accX: 0,
  //         accY: -150,
  //       }
  //     );
  //   });
  // }

  // ===================== 15. Project Js Start ==================== //

  // project-version-one
  $(".projectHold").imagesLoaded(function () {
    var $projectHold = $(".project-version-one").isotope({
      // options
    });
    // filter items on button click
    $(".project-filter").on("click", "button", function () {
      var filterValue = $(this).attr("data-filter");
      $projectHold.isotope({ filter: filterValue });
    });

    //for menu active class
    $(".project-filter button").on("click", function (event) {
      $(this).siblings(".active").removeClass("active");
      $(this).addClass("active");
      event.preventDefault();
    });
  });

  // project-version-two

  $(".projectHoldTwo").imagesLoaded(function () {
    var $projectHoldTwo = $(".project-version-two").isotope({
      // options
    });
    // filter items on button click
    $(".project-filter").on("click", "button", function () {
      var filterValue = $(this).attr("data-filter");
      $projectHoldTwo.isotope({ filter: filterValue });
    });

    //for menu active class
    $(".project-filter button").on("click", function (event) {
      $(this).siblings(".active").removeClass("active");
      $(this).addClass("active");
      event.preventDefault();
    });
  });

  // ===================== 15. Project Js End ==================== //
  // colse button
  if (jQuery(".close-button").length > 0) {
    const closeBtn = document.querySelector(".close-button");
    closeBtn.addEventListener("click", function () {
      const append = document.querySelector(".appoinment-cta-2");
      append.classList.add("hide");
    });
  }
})(jQuery);
