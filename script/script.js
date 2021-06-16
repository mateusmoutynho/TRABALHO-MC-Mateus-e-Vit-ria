const search = document.querySelector('#search')
const news = document.querySelector('#news')
const imagem = document.querySelector('#imagem')
const sub = document.querySelector('#sub')
const imagem2 = document.querySelector('#imagem2')
const sub2 = document.querySelector('#sub2')
let noticias = []

let palavras = JSON.parse(localStorage.getItem('palavras')) || []

async function getUserData() {


  let resposta = await fetch(`https://servicodados.ibge.gov.br/api/v3/noticias/?busca=${news.value}`)
  noticias = await resposta.json()
  imagem.src = noticias.items[0].imagens[0];
  sub.innerHTML = noticias.items[0].titulo
  sub.href = noticias.items[0].link

  imagem2.src = noticias.items[1].imagens
  sub2.innerHTML = noticias.items[1].titulo
  sub2.href = noticias.items[1].link
}

search.addEventListener('submit', async function (evt) {
  evt.preventDefault()
  getUserData()
  news.innerHTML = noticias.news
  palavras.push({ palavrasChave: news.value })
  localStorage.setItem('palavras', JSON.stringify(palavras))
})














