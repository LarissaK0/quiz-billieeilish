const perguntas = [
  {
    pergunta: "Qual é o nome completo da Billie Eilish?",
    respostas: [
      "Billie Eilish Pirate Baird O'Connell",
      "Billie Anne Eilish Murphy",
      "Billie Elizabeth Eilish Jones",
    ],
    correta: 0
  },
  {
    pergunta: "Quantos prêmios Grammy a Billie Eilish ganhou em 2020?",
    respostas: [
      "3",
      "4",
      "5",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o nome do primeiro EP lançado por Billie Eilish?",
    respostas: [
      "Don't Smile at Me",
      "When We All Fall Asleep, Where Do We Go?",
      "Happier Than Ever",
    ],
    correta: 0
  },
  {
    pergunta: "Em que cidade Billie Eilish nasceu?",
    respostas: [
      "Los Angeles",
      "Portland",
      "San Francisco",
    ],
    correta: 0
  },
  {
    pergunta: "Em que ano Billie Eilish lançou sua música 'Ocean Eyes'?",
    respostas: [
      "2015",
      "2016",
      "2017",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o nome do documentário lançado sobre a vida de Billie Eilish em 2021?",
    respostas: [
      "The World's a Little Blurry",
      "Billie Eilish: The Documentary",
      "Behind the Lyrics: Billie Eilish",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o nome do álbum de estreia de Billie Eilish?",
    respostas: [
      "When We All Fall Asleep, Where Do We Go?",
      "Happier Than Ever",
      "Don't Smile at Me",
    ],
    correta: 0
  },
  {
    pergunta: "Qual foi o primeiro single de Billie Eilish a atingir o topo das paradas dos EUA?",
    respostas: [
      "Bad Guy",
      "When the Party's Over",
      "Lovely",
    ],
    correta: 0
  },
  {
    pergunta: "Billie Eilish já escreveu músicas para trilhas sonoras de filmes. Qual foi o filme?",
    respostas: [
      "Joker",
      "No Time to Die",
      "La La Land",
    ],
    correta: 1
  },
  {
    pergunta: "Quem é o irmão de Billie Eilish que também é seu colaborador musical?",
    respostas: [
      "Finneas O'Connell",
      "Ethan O'Connell",
      "Michael O'Connell",
    ],
    correta: 0
  },
  ];
  
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for(const item of perguntas) {
  const quizItem= template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta
  
  
  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name','pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta //true
  
      corretas.delete(item)
      if(estaCorreta)  {
        corretas.add(item)
      }
  
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
  
    quizItem.querySelector('dl').appendChild(dt)
  }
  
  quizItem.querySelector('dl dt').remove()
  
  
  // coloca a pergunta na tela
  quiz.appendChild(quizItem)
  }
  