let participantes = [
    {
      nome: "Diego Fernandes",
      email: "diego@gmail.com",
      dataInscricao: new Date(2024, 2, 01, 19, 23),
      dataCheckIn: new Date(2024, 2, 01, 20, 20)
    },
    {
      nome: "Mayk Brito",
      email: "mayk@gmail.com",
      dataInscricao: new Date(2024, 1, 02, 19, 23),
      dataCheckIn: new Date(2024, 1, 05, 20, 20)
    },
    {
      nome: "Claudia Santos",
      email: "claudia@gmail.com",
      dataInscricao: new Date(2024, 0, 03, 19, 23),
      dataCheckIn: new Date(2024, 0, 10, 20, 20)
    },
    {
      nome: "Leonardo Fontes",
      email: "leonardo@gmail.com",
      dataInscricao: new Date(2023, 11, 04, 19, 23),
      dataCheckIn: new Date(2023, 11, 15, 20, 20)
    },
    {
      nome: "Rafael Souza",
      email: "rafael@gmail.com",
      dataInscricao: new Date(2023, 10, 05, 19, 23),
      dataCheckIn: new Date(2023, 10, 20, 20, 20)
    },
    {
      nome: "Ana Maria",
      email: "ana@gmail.com",
      dataInscricao: new Date(2023, 9, 06, 19, 23),
      dataCheckIn: new Date(2023, 9, 25, 20, 20)
    },
    {
      nome: "José Silva",
      email: "jose@gmail.com",
      dataInscricao: new Date(2023, 8, 07, 19, 23),
      dataCheckIn: new Date(2023, 8, 30, 20, 20)
    },
    {
      nome: "Maria Oliveira",
      email: "maria@gmail.com",
      dataInscricao: new Date(2023, 7, 08, 19, 23),
      dataCheckIn: new Date(2023, 7, 31, 20, 20)
    },
    {
      nome: "João Santos",
      email: "joao@gmail.com",
      dataInscricao: new Date(2023, 6, 09, 19, 23),
      dataCheckIn: new Date(2023, 6, 02, 20, 20)
    },
    {
      nome: "Pedro Almeida",
      email: "pedro@gmail.com",
      dataInscricao: new Date(2023, 5, 10, 19, 23),
      dataCheckIn: new Date(2023, 5, 15, 20, 20)
    }
  ];
  
  const criarNovoParticipante = (participante) => {
    const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao)
  
    const dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn)
    
    return `
    <tr>
      <td>
        <strong>
          ${participante.nome}
        </strong>
        <br>
        <small>
          ${participante.email}
        </small>
      </td>
      <td>${dataInscricao}</td>
      <td>${dataCheckIn}</td>
    </tr>
    `
  }
  
  const atualizarLista = (participantes) => {
    let output = ""
    for(let participante of participantes) {
      output = output + criarNovoParticipante(participante)
    }
  
    // substituir informação do HTML
    document.querySelector('tbody').innerHTML = output
  } 
  
  atualizarLista(participantes)