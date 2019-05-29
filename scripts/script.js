$(function() {
  let vanta;
  function updateAnimation() {
    if (!vanta && window.innerWidth >= 640) {
      vanta = VANTA.NET({
        el: document.querySelector('.Hero'),
        color: '#0984e3',
        backgroundColor: '#020133',
        mouseCoeffX: 0.4,
        mouseCoeffY: -6,
      });
    } else if (vanta && window.innerWidth < 640) {
      vanta.destroy();
      vanta = null;
    }
  }

  window.addEventListener('resize', updateAnimation);
  window.addEventListener('focus', updateAnimation);
  updateAnimation();
});
