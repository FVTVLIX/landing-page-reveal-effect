TweenMax.staggerTo("li", 2, {
  delay: 0.4,
  ease: Expo.easeInOut,
  scaleY: 0.3,
}, 0.1);

TweenMax.to("li", 2, {
  delay: 2.8,
  ease: Expo.easeInOut,
  width: "10px"
});

TweenMax.staggerTo("li", 1.6, {
  delay: 4.8,
  ease: Expo.easeInOut,
  y: "100%"
}, 0.06);