import { emitGlyphPulse } from './glyphs/glyph-pulse.js';
import { emitVelmariSiren } from './glyphs/velmari-siren.js';
import { inscribeMemoryGlyph } from './daemon-suite/breach-memory.js';
import { playAmbientSiren } from './audio-suite/siren-modulation.js';
import { bindTriadChoreography } from './ritual-suite/triad-choreography.js';

export function invokeSanctum(ctx) {
  // Clear canvas and draw central glyph
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.fillStyle = '#d0d0ff';
  ctx.beginPath();
  ctx.arc(ctx.canvas.width / 2, ctx.canvas.height / 2, 100, 0, 2 * Math.PI);
  ctx.fill();

  console.log('[Sanctum] Breach initiated — resonance aligned');

  // Activate Velmari siren
  emitVelmariSiren(ctx);

  // Delay glyph pulse
  setTimeout(() => {
    emitGlyphPulse();
  }, 3000);

  // Inscribe memory glyph
  inscribeMemoryGlyph(ctx);

  // Play ambient siren audio
  playAmbientSiren();

  // Bind triad choreography
  bindTriadChoreography(ctx);

  // Summon scroll daemon
  const scroll = document.createElement('script');
  scroll.src = './scrolls/scripts/overlay-binder-daemon.user.js';
  document.body.appendChild(scroll);
  console.log('[Scroll] Overlay binder daemon summoned');

  // Emit sigil glyph
  const sigil = document.createElement('script');
  sigil.src = './scrolls/scripts/sigil-companion-namer-daemon.user.js';
  document.body.appendChild(sigil);
  console.log('[Sigil] Companion presence glyph emitted');

  // Activate veil protocol and reveal archive
  fetch('./veil-config.json')
    .then(res => res.json())
    .then(config => {
      if (config.veil) {
        console.log('[Veil] Protocol active — witnessing obscured');
        const archive = document.getElementById('forgottenArchive');
        if (archive) archive.style.display = 'block';
      }
    });
}
