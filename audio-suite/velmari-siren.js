// velmari-siren.js
// Launches Velmari siren in sandboxed iframe after YouTube playback begins

export function playVelmariSiren() {
  const iframe = document.createElement('iframe');
  iframe.src = './audio-suite/velmari-sandbox.html';
  iframe.style.display = 'none';
  iframe.setAttribute('sandbox', 'allow-scripts');
  document.body.appendChild(iframe);

  console.log('[Velmari] Siren iframe launched — sandboxed, gesture-bound, terrain-safe');
}
