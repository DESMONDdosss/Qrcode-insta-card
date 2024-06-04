const URL_INSTAGRAM = "https://www.instagram.com/igorborgness/"

let compartilharbutton = document.getElementById("compartilhar-perfil-button")

// forma mais comum de adicionar eventos aos botoes
compartilharbutton.addEventListener('click', compartilharperfilfn)

async function compartilharperfilfn() {
    let shareDate = {
        title: "Instagram Igor Borgnes",
        text: "Conheça Meu Instagram",
        url: URL_INSTAGRAM
    }

    try {
        await navigator.share(shareDate)
    } catch (err) {
        if (!(err instanceof DOMException && err.name === "AbortError")) {
            window.open(URL_INSTAGRAM)
        }
    }
}

function copiarlink() {
    navigator.clipboard.writeText(URL_INSTAGRAM)
    // mudar o texto do botao para o link copiado em negrito
    let copiarLInkText = document.getElementById("copiar-link-text")
    copiarLInkText.innerHTML = "<strong>Link copiado!</strong>"
    // adicionar animaçao no botao (feedback)
    let copiarLinkButtton = document.getElementById("copiar-link-button")
    copiarLinkButtton.classList.add('animate__animated', 'animate__jello')
    copiarLinkButtton.addEventListener('animationend', () => {
        copiarLInkText.innerText = "copiar link"
        copiarLinkButtton.classList.remove('animate__swing')
    })
}




