$(function() {
  var $sections = $('section');
  var $frontCover = $('#front-cover');
  var $frontCoverContent = $('#front-cover .cover-content');
  var $coverSectionBlur = $('#coverSectionBlur').children();
  var $section2 = $('#section-2');
  var $section3 = $('#section-3');
  var $section3FloatingBlock = $('#section-3 .floating-block');

  var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: 'onLeave'
    },
    addIndicators: true
  });

  // $sections.each(function() {
  //   new ScrollMagic.Scene({
  //       triggerElement: this,
  //       duration: '50%'
  //     })
  //     .setPin(this)
  //     .addTo(controller);
  // });

  //TweenMax.set($frontCoverContent, {'-webkit-filter':'blur(0px)'});

  // var frontCoverBlur = TweenMax.to($frontCoverContent, 2, {
  //   '-webkit-filter': 'blur(100px)',
  //   //'filter': 'blur(100px)',
  //   ease: Power1.easeInOut,
  //   delay: 1
  // });

  // on soul to keep, background transition happens at 88% scroll of div
  // text animation starts at 1% scroll of div and ends at 81%

  var frontCoverFadeout = new TimelineMax();

  frontCoverFadeout
    .to($coverSectionBlur, 1, {
      attr: {"stdDeviation": '15'},
      ease: Power1.easeInOut
    })
    .to($frontCoverContent, 1, {
      opacity: 0,
      ease: Power1.easeInOut
    }, 0);

  new ScrollMagic.Scene({
    triggerElement: $frontCover[0],
    duration: $frontCover[0].clientHeight * 0.80,
    offset: $frontCover[0].clientHeight * 0.05
  })
  .setTween(frontCoverFadeout)
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: $frontCover[0],
    offset: $frontCover[0].clientHeight * 0.85
  })
  .setClassToggle('#backgrounds .background-2', 'visible')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: $section2[0],
    offset: $section2[0].clientHeight * 0.50
  })
  .setClassToggle('#backgrounds .background-3', 'visible')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: $section3[0]
  })
  .setClassToggle('#backgrounds .background-4', 'visible')
  .addTo(controller);

  var section3TextTranslateAndFadeIn = new TweenMax($section3FloatingBlock, 1, {
    opacity: 1,
    y: '-70%'
  });

  new ScrollMagic.Scene({
    triggerElement: $section3[0],
    duration: $section3[0].clientHeight * 0.35,
    offset: $section3[0].clientHeight * 0.10
  })
  .setTween(section3TextTranslateAndFadeIn)
  .addTo(controller);

  var section3TextTranslateAndFadeIn = new TweenMax($section3FloatingBlock, 1, {
    opacity: 0,
    y: '-30%'
  });

  new ScrollMagic.Scene({
    triggerElement: $section3[0],
    duration: $section3[0].clientHeight * 0.35,
    offset: $section3[0].clientHeight * 0.55
  })
  .setTween(section3TextTranslateAndFadeIn)
  .addTo(controller);

});

