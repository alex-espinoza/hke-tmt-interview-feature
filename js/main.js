$(function() {
  var $frontCover = $('#front-cover');
  var $frontCoverContent = $('#front-cover .cover-content');

  var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: 'onLeave'
    }
  });

  new ScrollMagic.Scene({
        triggerElement: $frontCover,
        duration: '50%'
      })
      .setPin($frontCover)
      .addTo(controller);

  TweenMax.set($frontCoverContent, {'-webkit-filter':'blur(0px)'});

  var frontCoverBlur = TweenMax.to($frontCoverContent, 2, {
    '-webkit-filter': 'blur(100px)',
    //'filter': 'blur(100px)',
    ease: Power1.easeInOut,
    delay: 1
  });
});
