let cabecalho = document.getElementById('cabecalho');
let card = document.querySelector('.card');
let good_offers_title = document.getElementById('good-offers-title');
let linkedin = document.getElementById('linkedin');
let titulos = document.getElementsByTagName('h1')
let explore_nature_flex = document.getSelector('.explore-nature-flex')
let form = document.querySelector('.contact-form-flex')


// Mudando a cor do cabeçalho
cabecalho.style.backgroundColor = 'green';

card.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
`
good_offers_title.innerText = 'Boas Ofertas Neste Momento';

console.log(good_offers_title.textContent) // textContent mostra somente o texto
//innerHTML adiciona enquanto o innerText altera o conteudo

// adicionar alterar ou remover
linkedin.setAttribute('href', 'https://www.linkedin.com/in/renan-santos-meira-407046185/');
linkedin.setAttribute('target', '_blank');

linkedin.classList.add('novaclasse');

// mudar para letras maiusculas
good_offers_title.innerText = good_offers_title.textContent.toUpperCase()


// mudar todos os H1 para cada titulos
// Selecionados para letras Maiusculas
titulos.forEach(titulo => {
    titulo.innerText = titulo.textContent.toUpperCase()

})
    

// Map metodo atualizado do forEach
// Map é mais suguro porem precisa converter para array primeiro
let titulosArray = Array.from(titulos)

titulosArray.map((item) => {
    
})


// Adicionando caixa 
$explore_nature_flex.innerHTML += `
<div class="explore-nature-card">
<div class="explore-nature-itens" id="norway"></div>
<h1>Costa Leste, Noruega</h1>
<h5>Ida e volta por $79</h5>
<p>Preasent stilus dominics arrite outemane vitae</p>
<a href="">Compre Passagens</a>
</div>
`

let input = document.createElement('input')
input.setAttribute('type', 'text')
input.setAttribute('placeholder', 'Coxinha')

form.prepend(input)