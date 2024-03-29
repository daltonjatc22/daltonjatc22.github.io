"use strict";

$(function () {
  'use strict';

  $('.fakeLoader').fakeLoader({
    timeToHide: 1200,

    /* //Time in milliseconds for fakeLoader disappear */
    zIndex: "999",

    /* //Default zIndex */
    spinner: "spinner3",

    /* //Options: 'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7' */
    bgColor: "#212121"
    /* //Hex, RGB or RGBA colors */

  });
  /* // smooth scroll */

  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate({
        scrollTop: $(hash).offset().top - 50
      }, 850);
    }
  });
  /* // hide navbar on mobile after click */

  $('.navbar-nav a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
  });
  /* // carousel resume */

  $('.owl-carousel').owlCarousel({
    items: 1,
    margin: 10
  });
  /* // collapse show on resume */

  $('.collapse-show').collapse();
  /* // porfolio filterizr */

  $('.filtr-container').imagesLoaded(function () {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      $('#portfolio .portfolio-filter-menu > ul > li[data-filter=\'1\']').addClass("active");
      var filterizr = $('.filtr-container').filterizr({
        filter: 1
      });
    } else {
      $('#portfolio .portfolio-filter-menu > ul > li[data-filter=\'all\']').addClass("active");
      var filterizr = $('.filtr-container').filterizr();
    }
  });
  /*  // portfolio filter */

  $('.portfolio-filter-menu li').on('click', function () {
    $('.portfolio-filter-menu li').removeClass('active');
    $(this).addClass('active');
  });
  /* // portfolio magnific popup */

  $('.portfolio').each(function () {
    /*  // the containers for all your galleries */
    $(this).magnificPopup({
      delegate: '.portfolio-popup',

      /* // the selector for portfolio item */
      type: 'image',
      gallery: {
        enabled: true
      }
    });
  });
  var isXDragScrolling = false;
  var XDragStartPos;
  $('.x-drag-scrolling').mousedown(function (e) {
    isXDragScrolling = true;
    XDragStartPos = e.originalEvent.offsetX;
    console.log(isXDragScrolling);
  });
  $('.x-drag-scrolling').mouseup(function () {
    isXDragScrolling = false;
    XDragStartPos = null;
    /* // Creates Error if invalid */

    console.log(isXDragScrolling);
  });
  $('.x-drag-scrolling').mousemove(function (e) {
    console.log(isXDragScrolling);

    if (isXDragScrolling) {
      $('.x-drag-scrolling').scrollLeft = XDragStartPos - e.originalEvent.offsetX;
      console.log(XDragStartPos - e.originalEvent.offsetX);
    }
  });
  /*
  // navbar on scroll
  $(window).on("scroll", function() {
        var vScroll = $(this).scrollTop();
        if( vScroll > 100) {
          $(".navbar").addClass("fix");
      }
      else {
          $(".navbar").removeClass("fix");
      }
    });
  */
});