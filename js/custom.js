$(function () {
  // menu function

  // open menu
  $(".open-menu").click(function () {
    $(".primary-menu-mobile").addClass("active");
  });
  // close menu
  $(".close-menu, .primary-menu-mobile").click(function () {
    $(".primary-menu-mobile").removeClass("active");
    $(".primary-menu-mobile .sub-menu").slideUp(200);
  });
  $(" .primary-menu-mobile .inner").click(function (e) {
    e.stopPropagation();
  });
  $(".primary-menu-mobile .primary-menu .has-submenu a").click(function () {
    $(".sub-menu ").slideUp(200);
    $(this).next(".sub-menu").slideDown(200);
    $(".primary-menu-mobile .primary-menu .has-submenu a").removeClass(
      "active"
    );
    $(this).addClass("active");
  });

  handleFixedHeader();
  HandleScrollTop();
  // handling on scroll (animation and header-bg)
  $(window).scroll(function () {
    handleFixedHeader();
    HandleScrollTop();
  });
  //   // scroll top ===============================

  function HandleScrollTop() {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
        $(".scrollToTop").addClass("d-inline-block");
      } else {
        $(".scrollToTop").removeClass("d-inline-block");
      }
    });
  }

  // handle bg of header on scroll
  function handleFixedHeader() {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
      $("header").addClass("fixed-header");
    } else {
      $("header").removeClass("fixed-header");
    }
  }

  $(".scrollToTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 100);
    return false;
  });

  //   // scroll top ends ===============================

  $(".menu-open").click(function () {
    $(".primary-menu-wrapper").addClass("active");
  });
  $(".menu-close").click(function () {
    $(".primary-menu-wrapper").removeClass("active");
  });
  // block scroll ===============================
  $(".primary-menu li a, .footer-links li a").click(function () {
    $(".primary-menu-wrapper").removeClass("active");
    var get_scroll_id = $(this).attr("data-scroll");
    $(".primary-menu li a").removeClass("active");
    $(this).addClass("active");
    $("html, body").animate(
      {
        scrollTop: $(get_scroll_id).offset().top - 80,
      },
      600
    );
  });

  if (window.location.hash) {
    $("resturant-menu li a, footer-links li a").removeClass("active");
    $(`.resturant-menu li a[data-scroll="${window.location.hash}"]`).addClass(
      "active"
    );
    // $('html, body').animate({ scrollTop: 0 }, 100);
    $("html, body")
      .delay(300)
      .animate(
        {
          scrollTop: $(window.location.hash).offset().top - 70,
        },
        600
      );
  }

  $(".btn-open-filter").click(function () {
    $(".product-filters").addClass("active");
  });

  $(".btn-close-filter").click(function () {
    $(".product-filters").removeClass("active");
  });

  $(".btn-open-cart").click(function () {
    $(".cart-modal").addClass("active");
  });

  $(".btn-close-cart").click(function () {
    $(".cart-modal").removeClass("active");
  });

  $(".btn-open-search").click(function () {
    $(".header-search").addClass("active");
  });

  $(".btn-close-search").click(function () {
    $(".header-search").removeClass("active");
  });

  AOS.init({
    delay: 200,
    duration: 800,
  });
});

$(window).on("load", function () {
  $("#aa-preloader-area").delay(300).fadeOut("d-none");
});
