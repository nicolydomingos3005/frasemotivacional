document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('motivational-text');
    const container = document.getElementById('marquee-container');
    
    // (g.) Controle a velocidade do letreiro: quanto menor o número, mais rápido.
    const speed = 2; // Pixels a serem movidos por atualização (ex: 2px)
    const updateInterval = 15; // Intervalo de atualização em milissegundos (ex: 15ms)

    let currentPosition = 0; // Posição atual do letreiro (inicia em 0)
    let direction = 1; // 1 para direita, -1 para esquerda (inicia indo para a direita)

    // Calcula a largura da área onde o texto pode se mover
    const containerWidth = container.offsetWidth;
    // Calcula o tamanho real do texto
    const textWidth = textElement.offsetWidth;
    
    // O ponto máximo que o texto pode se mover para a direita é 
    // a largura do container menos a largura do texto.
    // Isso garante que o texto pare quando a sua borda direita tocar a borda direita do container.
    const maxScroll = containerWidth - textWidth; 

    // Define a posição inicial do texto (fora da tela, à esquerda)
    // O CSS já faz left: -100%, mas para a lógica de 'ida e volta', vamos mantê-lo na tela
    // e simular o movimento começando da esquerda.
    currentPosition = 0; 
    
    // Define a largura total da área de movimento (de fora para fora)
    const fullRange = containerWidth + textWidth; 
    // Para iniciar da esquerda para a direita (b.) e ir até o outro lado.

    function moveMarquee() {
        // Altera a posição atual (g.)
        currentPosition += direction * speed; 

        // ----------------------------------------------------
        // (a.) Lógica de "deslizar e voltar"
        // ----------------------------------------------------
        
        // Se estiver indo para a direita (direction = 1)
        if (direction === 1) {
            // Se a borda direita do texto atingir ou ultrapassar a borda direita do container
            if (currentPosition >= maxScroll) {
                direction = -1; // Inverte a direção para ir para a esquerda
            }
        } 
        // Se estiver voltando para a esquerda (direction = -1)
        else {
            // Se a borda esquerda do texto atingir ou ultrapassar a borda esquerda do container (0)
            if (currentPosition <= 0) {
                direction = 1; // Inverte a direção para ir para a direita
            }
        }

        // Aplica a nova posição via CSS (no eixo horizontal - c.)
        textElement.style.transform = `translateX(${currentPosition}px)`;
        
        // Pede para o navegador chamar a função novamente para a próxima animação
        requestAnimationFrame(moveMarquee);
    }
    
    // Inicia a animação (g.)
    requestAnimationFrame(moveMarquee);
});