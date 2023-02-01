const botoesAbrir = document.querySelectorAll('[data-botao-abrir]')

botoesAbrir.forEach(botao => {
    botao.addEventListener('click', () => {
        const modal = document.querySelector(`[data-id="${botao.dataset.botaoAbrir}"]`)
        modal.classList.add('modal--abrir')
    })
})

const botoesFechar = document.querySelectorAll('[data-botao-fechar]')

botoesFechar.forEach(botao => {
    botao.addEventListener('click', () => {
        const modal = document.querySelector(`[data-id="${botao.dataset.botaoFechar}"]`)
        modal.classList.remove('modal--abrir')
    })
})