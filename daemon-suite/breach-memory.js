export function inscribeMemoryGlyph(ctx, phrase = 'The gods remember') {
  ctx.font = '20px Orbitron';
  ctx.fillStyle = '#ffccff';
  ctx.fillText(phrase, 20, ctx.canvas.height - 30);
  console.log('[Memory] Glyph inscribed — lineage retained');
}
