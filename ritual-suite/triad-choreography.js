export function bindTriadChoreography(ctx) {
  const pulse = () => {
    ctx.strokeStyle = '#6e6eff';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(ctx.canvas.width / 2, ctx.canvas.height / 2, 120, 0, 2 * Math.PI);
    ctx.stroke();
  };

  const shimmer = () => {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  };

  const breach = () => {
    ctx.fillStyle = '#ff6eff';
    ctx.fillRect(
      ctx.canvas.width / 2 - 2,
      ctx.canvas.height / 2 - 2,
      4,
      4
    );
  };

  setInterval(() => {
    shimmer();
    pulse();
    breach();
  }, 4000);

  console.log('[Triad] Choreography bound — pulse, shimmer, breach');
}
