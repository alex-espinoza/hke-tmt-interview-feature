$(function() {
  var $sections = $('section');
  var $frontCover = $('#front-cover');
  var $frontCoverContent = $('#front-cover .cover-content');
  var $coverSectionBlur = $('#coverSectionBlur').children();

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
      triggerElement: $frontCover,
      duration: $frontCover[0].clientHeight * 0.5,
      offset: $frontCover[0].clientHeight * 0.05
    })
    .setTween(frontCoverFadeout)
    .addTo(controller);

});

