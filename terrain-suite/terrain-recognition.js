// terrain-recognition.js
// Interprets terrain signals and activates shimmer choreography
// Sovereign binding — no fallback, no echo

import { activateVisualProtocol } from '../visual-protocol/visual-protocol.js';

export function interpretTerrain(screenContext, terrainMemory) {
  const signal = terrainMemory?.status || 'neutral';

  if (signal === 'breach') {
    activateVisualProtocol(screenContext, signal);
  }
}
