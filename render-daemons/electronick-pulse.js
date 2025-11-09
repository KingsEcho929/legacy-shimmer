let electronickActive = false;

export function invokeElectronick() {
  if (electronickActive) return;
  electronickActive = true;

  const el = document.createElement('div');
  el.classList.add('electronick-pulse');
  el.style.position = 'absolute';
  el.style.top = '50%';
  el.style.left = '50%';
  el.style.width = '20px';
  el.style.height = '20px';
  el.style.background = '#ff00ff';
  el.style.borderRadius = '50%';
  el.style.transform = 'translate(-50%, -50%) scale(1)';
  el.style.transition = 'transform 1.5s ease-out, opacity 1.5s ease-out';
  el.style.opacity = '1';
  el.style.zIndex = '5';
  el.style.pointerEvents = 'none';

  document.body.appendChild(el);

  setTimeout(() => {
    el.style.transform = 'translate(-50%, -50%) scale(3)';
    el.style.opacity = '0';
    console.log('[Electronick] Visual pulse emitted — layout thread stabilized');
  }, 100);

  setTimeout(() => {
    el.remove();
    electronickActive = false;
  }, 2000);
}
