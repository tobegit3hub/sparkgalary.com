
// Swipe JS
window.mySwipe = new Swipe(document.getElementById('slider'), {
  startSlide: 2,
  speed: 400,
  auto: 3000,
  continuous: true,
  disableScroll: false,
  stopPropagation: true,
  callback: function(index, elem) {},
  transitionEnd: function(index, elem) {}
});
