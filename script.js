const letreiro = document.querySelector('.letreiro');
const container = document.querySelector('.container');

let posX = 0;               // posição inicial
let direction = 1;          // 1 = direita, -1 = esquerda
const speed = 2;            // controle da velocidade (px por frame)

function animar() {
  const containerWidth = container.offsetWidth;
  const textWidth = letreiro.offsetWidth;

  posX += direction * speed;
  letreiro.style.left = posX + "px";

  // Verifica limites para inverter direção
  if (posX + textWidth >= containerWidth) {
    direction = -1; // volta para esquerda
  } else if (posX <= 0) {
    direction = 1;  // vai para direita
  }

  requestAnimationFrame(animar);
}

animar();
