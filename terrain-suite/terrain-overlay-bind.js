// terrain-overlay-bind.js
// Binds terrain overlays to Electronick and Photonis glyphs

import { GlyphArchive } from '../visual-protocol/glyphs-electronick-photonis.js';

export function bindOverlay(ctx, terrainSignal) {
  const glyph = terrainSignal === 'veil'
    ? GlyphArchive.Electronick
    : GlyphArchive.Photonis;

  ctx.fillStyle = glyph.color;
  ctx.font = '48px serif';
  ctx.fillText(glyph.sigil, Math.random() * ctx.canvas.width, Math.random() * ctx.canvas.height);
}
