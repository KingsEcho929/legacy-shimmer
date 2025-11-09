export function playAmbientSiren() {
  const audio = new Audio('https://assets.example.com/velmari-siren.mp3');
  audio.loop = true;
  audio.volume = 0.3;
  audio.play();
  console.log('[Audio] Velmari siren modulation active');
}
