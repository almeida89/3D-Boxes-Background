// Seleciona o container das caixas na pagina
const boxesContainer = document.getElementById('boxes')

// Seleciona o botão que ativa a animação
const btn = document.getElementById('btn')

//Adiciona evento de clique no botao para alternar a classe 'big' (animação)
btn.addEventListener('click', () => boxesContainer.classList.toggle('big'))

// Função para criar as 16 caixas posicionadas em grid 4x4
function createBoxes() {
    for (let i = 0; i < 4; i++) { //Linhas
        for (let j = 0; j < 4; j++) { //Colunas
            const box = document.createElement('div')
            box.classList.add('box')
            // Define a posição do fundo da imagem animada para cada caixa
            box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`
            // Adiciona a caixa ao container
            boxesContainer.appendChild(box)
        }
    }
}

// Chama a função para criar as caixas ao carregar o script
createBoxes()