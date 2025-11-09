export function emitVelmariSiren(ctx) {
  let frame = 0;
  const maxFrames = 40;

  function pulse() {
    if (frame >= maxFrames) return;

    ctx.fillStyle = `rgba(255, 255, 0, ${0.01 * (maxFrames - frame)})`;
    ctx.beginPath();
    ctx.arc(
      ctx.canvas.width / 2 + Math.sin(frame / 5) * 40,
      ctx.canvas.height / 2 + Math.cos(frame / 5) * 40,
      20,
      0,
      2 * Math.PI
    );
    ctx.fill();

    frame++;
    requestAnimationFrame(pulse);
  }

  console.log('[Velmari] Siren emitted — depth channel aligned');
  requestAnimationFrame(pulse);
}
