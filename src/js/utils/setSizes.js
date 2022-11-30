const setSizes = () => {
  // VW
  const vw = document.documentElement.clientWidth / 100;
  document.documentElement.style.setProperty('--vw', `${vw}px`);
  // HeaderHeight
  const $header = document.querySelector('.com-header');
  const headerHeight = $header.clientHeight;
  const headerPositionTop = $header.offsetTop;
  document.documentElement.style.setProperty(
    '--header-height',
    `${headerHeight}px`,
  );
  document.documentElement.style.setProperty(
    '--header-position-top',
    `${headerPositionTop}px`,
  );
};

export default setSizes;
