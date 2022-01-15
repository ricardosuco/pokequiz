const imgPokemon = document.querySelector('.img-pokemon img')
const inputNome = document.querySelector('.input-resposta #poke-nome')
const botaoPrincipal = document.querySelector('.botao-principal')
const ledResultado = document.querySelector('#luz')
const modal = document.querySelector('.modal')
const modalImg = document.querySelector('.modal-img img')
const scoreSpan = document.querySelector('.score')
const inputNivel = document.querySelector('.nivel')
let score = 0
let imagemMaior = ''
let nivel = 151
let pokemon = ''
scoreSpan.textContent = score

inputNivel.addEventListener('change', function (event) {
    nivel = event.target.value
})

    botaoPrincipal.addEventListener('click', async function () {
    inputNome.value = ''
    gerarId(1, nivel)
    try {
        const promise = await fetch('https://pokeapi.co/api/v2/pokemon/' + numeroAleatorio.toFixed(0))
        const resposta = await promise.json()
        imgPokemon.src = resposta.sprites.front_default
        ledResultado.src = './assets/botao_azul.svg'
        imagemMaior = resposta.sprites.other.dream_world.front_default
        console.log(resposta.name)
        pokemon = resposta.name

    } catch (error) {
        console.error(error)
    }
    scoreSpan.textContent = score
})


inputNome.addEventListener('change', function () {
    if (pokemon !== inputNome.value.toLowerCase()) {
        ledResultado.src = './assets/botao_vermelho.svg'
        console.log("errada")
        score = 0
        return
    }
    ledResultado.src = './assets/botao_verde.svg'
    console.log("Certa")
    score++
    console.log(score)
    return
})

function gerarId(min, max) {
    return numeroAleatorio = Math.random() * (max - min) + min
}

function exibirModal() {
    modal.classList.toggle('hidden')
    modalImg.src = imagemMaior
}


//Resolver o bug que mostra pokemons repetidos
//Criar todas as validações do input



