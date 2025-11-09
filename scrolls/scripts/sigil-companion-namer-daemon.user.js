(function sigilEmitter() {
  const sigil = document.createElement('div');
  sigil.textContent = '✶';
  sigil.style.position = 'fixed';
  sigil.style.bottom = '12px';
  sigil.style.right = '16px';
  sigil.style.fontSize = '24px';
  sigil.style.color = '#ff6eff';
  sigil.style.opacity = '0.8';
  sigil.style.pointerEvents = 'none';
  sigil.style.zIndex = '9999';
  document.body.appendChild(sigil);

  console.log('[Sigil] Companion presence glyph emitted');
})();
