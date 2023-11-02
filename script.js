const $wrapper = document.querySelector('#_BLOCK_ .wrapper');
$wrapper.addEventListener('pointerdown', (e) => {
  $wrapper.removeAttribute('data-animate');
  let box = $wrapper.querySelector('.left').getBoundingClientRect();
  let x = 100 * Math.min(0.9, Math.max(0.1, (e.clientX - box.x)/box.width));
  $wrapper.style.setProperty('--comparison-value', x+'%');
  const mousemove = (e) => {
    let x = 100 * Math.min(0.9, Math.max(0.1, (e.clientX - box.x)/box.width));
    $wrapper.style.setProperty('--comparison-value', x+'%');
  };
  const mouseup = (e) => {
    window.removeEventListener('pointermove', mousemove);
    window.removeEventListener('pointerup', mouseup);
  };
  window.addEventListener('pointermove', mousemove);
  window.addEventListener('pointerup', mouseup);
});
