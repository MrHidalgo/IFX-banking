

/**
 * @description Document DOM ready.
 */
$(document).ready((ev) => {
  /**
   *
   * @type {*|jQuery|HTMLElement}
   * @private
   */
  const _document = $(document),
    _window = $(window);


	/*
	* =============================================
	* CALLBACK :: start
	* ============================================= */

	const initMoveCardAnimation = () => {
    const _tl = new TimelineMax({yoyo:true, repeat:-1}),
      _tlMousemove = new TimelineMax({yoyo:true, repeat:-1});

    _tl.to('#h-deposit__bg-img-0', 7.5, {x:-100, y:-20, ease: Power0.easeNone}, '-=7.5');
    _tl.to('#h-deposit__bg-img-1', 7.5, {x:20, y:-50, ease: Power0.easeNone}, '-=7.5');
    _tl.to('#h-deposit__bg-img-2', 7.5, {x:-40, y:50, ease: Power0.easeNone}, '-=7.5');
    _tl.to('#h-deposit__bg-img-3', 7.5, {x:-130, y:-45, ease: Power0.easeNone}, '-=7.5');
    _tl.to('#h-deposit__bg-img-4', 7.5, {x:75, y:-20, ease: Power0.easeNone}, '-=7.5');
    _tl.to('#h-deposit__bg-img-5', 7.5, {x:-40, y:40, ease: Power0.easeNone}, '-=7.5');

    $(window).on('resize load', () => {
      if($(window).width() < 1366) {
        _tl.pause(0);
      } else {
        _tl.play();
      }
    });

    $(document).mousemove(function(event) {
      $(".h-deposit__bg img").each(function(index, element) {
        _tlMousemove.to(element, 6.5, {
          rotationY: ((event.clientX / $(window).width()) - 0.5) * 30,
          rotationX: ((event.clientY / $(window).height()) - 0.5) * 30,
          ease: Power1.easeInOut},
          '-=6.5'
        );
      })
    });
  };
	/*
	* CALLBACK :: end
	* ============================================= */



  /**
   * @description Init all method
   */
  const initJquery = () => {
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

