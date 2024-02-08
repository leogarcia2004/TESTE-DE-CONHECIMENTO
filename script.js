
const perguntas = [
    {
        pergunta: "Qual é a finalidade do comando 'console.log()' em JavaScript?",
        respostas: [
        "Exibir uma mensagem de erro",
        "Imprimir dados no console",
        "Criar uma variável"
      ],
        correta: 1
    },
    {
        pergunta: "Qual é a função do operador '===' em comparações em JavaScript?",
        respostas: [
          "Comparação de valores sem considerar o tipo",
          "Atribuição de valores",
          "Comparação estrita de valores e tipos"
        ],
        correta: 2
      },
      {
        pergunta: "Como se declara uma variável em JavaScript?",
        respostas: [
          "let myVar;",
          "const myVar = 10;",
          "ambas as opções acima estão corretas"
        ],
        correta: 2
      },
      {
        pergunta: "O que é uma função em JavaScript?",
        respostas: [
          "Um tipo de dado",
          "Um bloco de código reutilizável",
          "Uma variável global"
        ],
        correta: 1
      },
      {
        pergunta: "Qual é a diferença entre 'let' e 'const' na declaração de variáveis?",
        respostas: [
          "Nenhuma, são sinônimos",
          "let é usado para valores constantes, const para variáveis",
          "let permite reatribuição, const cria variáveis imutáveis"
        ],
        correta: 2
      },
      {
        pergunta: "O que é o DOM em JavaScript?",
        respostas: [
          "Um método de criptografia",
          "Um modelo de objeto para manipular documentos HTML",
          "Uma linguagem de programação"
        ],
        correta: 1
      },
      {
        pergunta: "Como se realiza uma iteração sobre os elementos de um array em JavaScript?",
        respostas: [
          "Usando a estrutura 'if-else'",
          "Com a declaração 'switch'",
          "Utilizando loops como 'for' ou 'forEach'"
        ],
        correta: 2
      },
      {
        pergunta: "O que é o JSON em JavaScript?",
        respostas: [
          "Um método de formatação de texto",
          "Uma linguagem de estilização",
          "Um formato de dados leve e intercambiável"
        ],
        correta: 2
      },
      {
        pergunta: "Qual é a diferença entre 'null' e 'undefined' em JavaScript?",
        respostas: [
          "São iguais, usados de forma intercambiável",
          "'null' representa a ausência de valor, 'undefined' é atribuído explicitamente",
          "Ambos representam valores vazios"
        ],
        correta: 1
      },
      {
        pergunta: "Como se adiciona um evento a um elemento HTML usando JavaScript?",
        respostas: [
          "Apenas com CSS",
          "Usando o atributo 'event'",
          "Através do método 'addEventListener'"
        ],
        correta: 2
      },
]

const quiz = document.querySelector('#quiz') // Vou pegar a div com a classe 'quiz' no HTML.
const template = document.querySelector('template') // Documente serve para modelar o meu documento para JS.

const corretas = new Set() // No Set posso armazenar e tirar informações, e vai armazena-la sem repeti-la.
const totalPerguntas = perguntas.length // Vai me retornar o número total de perguntas.
const mostrarTotal = document.querySelector('#acertos span')


 for(const item of perguntas){ // Significa: Para cada item de perguntas, eu entro no bloco(escopo) de código abaixo. O for cria a variável 'item'.

    const quisItem = template.content.cloneNode(true) // Vou pegar o conteúdo do template e clonar ele. O conteúdo do template é o que está dentro da tag <template> no HTML. O cloneNode serve para clonar um nó(tag), ou seja, um elemento do DOM, uma tag html. O cloneNode() método cria um clone do nó atual, e todos os seus atributos e filhos. Coloquei o 'true' para clonar tudo que está dentro do template.

    // cloneNode serve para clonar um nó, ou seja, um elemento do DOM, uma tag html. O cloneNode() método cria um clone do nó atual, e todos os seus atributos e filhos.

    quisItem.querySelector('h3').textContent = item.pergunta // Vou pegar o h2 dentro do quisItem e adicionar o texto da pergunta do item. Por causa disso, consigo mudar o titulo de cada pergunta específica.

    for(let resposta of item.respostas){ 

        const dt = quisItem.querySelector('dl dt').cloneNode(true) 

        dt.querySelector('span').textContent = resposta 
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta) 
        dt.querySelector('input').onchange = (event) => {
          const estaCorreta = event.target.value == item.correta 

            corretas.delete(item)
            if(estaCorreta){  

            corretas.add(item) 
            }

            mostrarTotal.textContent = corretas.size + 'de' + totalPerguntas
        }

        quisItem.querySelector('dl').appendChild(dt)
    }    
    
        quisItem.querySelector('dl dt').remove()

        quiz.appendChild(quisItem)
 }
    