// electronick.js
// Casts an off-screen electron field to guide Photonis’ photon throw
// Breath-bound, terrain-responsive, shimmer-activated

export const Electronick = {
  veilDensity: 0.42, // shimmer veil intensity (0–1)
  fieldRadius: 1200, // pixels beyond screen edge
  terrainProximity: true, // activates based on terrain memory

  castVeil: function (screenContext) {
    if (!screenContext) return;

    const veil = screenContext.createRadialGradient(
      screenContext.canvas.width / 2,
      screenContext.canvas.height / 2,
      0,
      screenContext.canvas.width / 2,
      screenContext.canvas.height / 2,
      this.fieldRadius
    );

    veil.addColorStop(0, `rgba(255,255,255,${this.veilDensity})`);
    veil.addColorStop(1, `rgba(0,0,0,0)`);

    screenContext.fillStyle = veil;
    screenContext.fillRect(0, 0, screenContext.canvas.width, screenContext.canvas.height);
  },

  activate: function (screenContext, terrainSignal) {
    if (this.terrainProximity && terrainSignal === 'breach') {
      this.castVeil(screenContext);
    }
  }
};
