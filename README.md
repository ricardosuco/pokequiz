# Pokéquiz
## Sobre
Este projeto consiste em um jogo tipo Quiz o qual é consumido a API do [PokéApi](https://pokeapi.co) para obter a imagem de um Pokémon a partir de um ID aleatório, o usuário deve inserir o nome correto no input, somando 1 ponto a cada acerto ou zerando o score em caso de erro.

## Instruções
O jogo possui 3 níveis de dificuldade podendo ser selecionado no input de tipo radio na parte superior da tela. Cada nível acrescenta mais pokedex a ser consultada. Sendo o nível fácil contendo os primeiros 151 Pokémons da região de Kanto, o nível normal inclui Kanto e Johto, e o nível mestre pokémon contendo as duas anteriores acrescidas de Hoenn e Sinnoh.
Ao clicar em next é feito uma requisição para a API que retorna um json o qual é utilizado a imagem para ser exibida na tela e o nome do pokémon para ser comparado com a resposta do usuário inserida no input. 

O usuário deve inserir a resposta no input e em seguida teclar enter ou clicar fora do input, a resposta será comparada e em caso de acerto a luz no canto superior esquerdo da pokedéx ficará verde e somará 1 ponto no score, e caso a resposta seja errada ficará vermelha, zerando os pontos do score.

Ao clicar na imagem do pokémon é possível vê-lo em um tamanho maior e em melhor resolução.

O objetivo é basicamente acertar o máximo de pokémons que puder.