'use client'

export function applyCRTEffect() {
  // Crear un elemento de estilo
  const style = document.createElement('style');
  
  // Definir los estilos CSS para el efecto CRT
  style.textContent = `
    @keyframes flicker {
      0% { opacity: 0.27861; }
      5% { opacity: 0.34769; }
      10% { opacity: 0.23604; }
      15% { opacity: 0.90626; }
      20% { opacity: 0.18128; }
      25% { opacity: 0.83891; }
      30% { opacity: 0.65583; }
      35% { opacity: 0.67807; }
      40% { opacity: 0.26559; }
      45% { opacity: 0.84693; }
      50% { opacity: 0.96019; }
      55% { opacity: 0.08594; }
      60% { opacity: 0.20313; }
      65% { opacity: 0.71988; }
      70% { opacity: 0.53455; }
      75% { opacity: 0.37288; }
      80% { opacity: 0.71428; }
      85% { opacity: 0.70419; }
      90% { opacity: 0.7003; }
      95% { opacity: 0.36108; }
      100% { opacity: 0.24387; }
    }

    body::after {
      content: " ";
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: rgba(18, 16, 16, 0.1);
      opacity: 0;
      z-index: 2;
      pointer-events: none;
      animation: flicker 0.15s infinite;
    }

    body::before {
      content: " ";
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
      z-index: 2;
      background-size: 100% 2px, 3px 100%;
      pointer-events: none;
    }
  `;

  // Añadir el estilo al documento
  document.head.appendChild(style);
}
