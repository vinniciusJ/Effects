let bar = document.querySelector('.bar')
let container = document.querySelector('.container')

document.addEventListener('scroll', () => {
    // Tamanho da caixa que contém o texto
    // Verificar em que posição da página o usuário está
    // Regra de três com a atual posição e o tamanho da caixa

    const contentHeight = container.offsetHeight
    const pagePositionY = window.pageYOffset
    const updateBar = pagePositionY * 100 / contentHeight

    bar.style.width = `${updateBar}%`
})