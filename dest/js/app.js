"use strict";

/*
*
* ============================
* ============================
*
* Include lib:
*
* - webFontLoader.js;
* - preventBehavior.js;
* - svg4everybody.js;
*
* ============================
* ============================
* */

/**
 * @name initPreventBehavior
 *
 * @description
 */
var initPreventBehavior = function initPreventBehavior() {

  var link = document.querySelectorAll("a");

  link.forEach(function (val, idx) {

    val.addEventListener("click", function (e) {
      if (val.getAttribute("href") === "#") {
        e.preventDefault();
      }
    });
  });
};

/**
 * @description Document DOM ready.
 */
$(document).ready(function (ev) {
  /**
   *
   * @type {*|jQuery|HTMLElement}
   * @private
   */
  var _document = $(document),
      _window = $(window);

  /*
  * =============================================
  * CALLBACK :: start
  * ============================================= */

  var initMoveCardAnimation = function initMoveCardAnimation() {
    var _tl = new TimelineMax({ yoyo: true, repeat: -1 }),
        _tlMousemove = new TimelineMax({ yoyo: true, repeat: -1 });

    _tl.to('#h-deposit__bg-img-0', 7.5, { x: -100, y: -20, ease: Power0.easeNone }, '-=7.5');
    _tl.to('#h-deposit__bg-img-1', 7.5, { x: 20, y: -50, ease: Power0.easeNone }, '-=7.5');
    _tl.to('#h-deposit__bg-img-2', 7.5, { x: -40, y: 50, ease: Power0.easeNone }, '-=7.5');
    _tl.to('#h-deposit__bg-img-3', 7.5, { x: -130, y: -45, ease: Power0.easeNone }, '-=7.5');
    _tl.to('#h-deposit__bg-img-4', 7.5, { x: 75, y: -20, ease: Power0.easeNone }, '-=7.5');
    _tl.to('#h-deposit__bg-img-5', 7.5, { x: -40, y: 40, ease: Power0.easeNone }, '-=7.5');

    $(window).on('resize load', function () {
      if ($(window).width() < 1366) {
        _tl.pause(0);
      } else {
        _tl.play();
      }
    });

    $(document).mousemove(function (event) {
      $(".h-deposit__bg img").each(function (index, element) {
        _tlMousemove.to(element, 6.5, {
          rotationY: (event.clientX / $(window).width() - 0.5) * 30,
          rotationX: (event.clientY / $(window).height() - 0.5) * 30,
          ease: Power1.easeInOut }, '-=6.5');
      });
    });
  };
  /*
  * CALLBACK :: end
  * ============================================= */

  /**
   * @description Init all method
   */
  var initJquery = function initJquery() {
    // default
    initPreventBehavior();
    // ==========================================

    // lib
    // ==========================================

    // callback
    // ==========================================
    initMoveCardAnimation();
  };
  initJquery();
});