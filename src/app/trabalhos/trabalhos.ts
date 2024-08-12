export interface Trabalho {
  nome? : string,
  img? : string,
  descricao? : string,
  urlTrabalho: string
}

export const trabalhos : Trabalho[] = [
  {
    nome : 'Chronometrus',
    img:'../../assets/img/Chronometrus.png',
    descricao: 'Página de cronômetro, com estilo e música de acordo com a opção escolhida',
    urlTrabalho: 'https://chronometrus.vercel.app'
  },
  {
    nome : 'Checkado',
    img:'../../assets/img/Checkado.png',
    descricao: 'Página com função quadro Kambam, organizando as tarefas em diferentes estados',
    urlTrabalho: 'https://checkado.vercel.app'
  },
  {
    nome : 'Proway Computers',
    img:'../../assets/img/Proway Computers.png',
    descricao: 'Página realizada em curso da Proway Computers sobre Angular, simulando uma loja online',
    urlTrabalho: 'https://proway-computers-ten.vercel.app'
  },
  {
    nome : 'Meu Portifólio',
    img:'../../assets/img/Meu Portfolio.png',
    descricao: 'Página pessoal de portfólio, esta na qual você já está navegando',
    urlTrabalho: 'https://meu-portfolio-virid-ten.vercel.app'
  },
  {
    nome : 'Alura Plus',
    img:'../../assets/img/Alura Plus.png',
    descricao: 'Página realizada em curso da Alura, simulando Home de assinatura de cursos',
    urlTrabalho: 'https://aluraplus-alpha-mauve.vercel.app'
  },
  {
    nome : 'Alura Midi',
    img:'../../assets/img/Alura Midi.png',
    descricao: 'Página realizada em curso da Alura, simulando midi digital',
    urlTrabalho: 'https://alura-midi-alpha-lake.vercel.app'
  },
  {
    nome : 'Fokus',
    img:'../../assets/img/Fokus.png',
    descricao: 'Página de cronômetro e gerenciador de tarefas por tempo',
    urlTrabalho: 'https://fokus-seven-chi.vercel.app'
  },
  {
    nome : 'Culturama',
    img:'../../assets/img/Culturama.png',
    descricao: 'Página realizada em curso da Alura, para divulgação de eventos',
    urlTrabalho: 'https://culturama-five-beta.vercel.app'
  },
  {
    nome : 'Meteora',
    img:'../../assets/img/Meteora.png',
    descricao: 'Página realizada em curso da Alura, loja online de roupas',
    urlTrabalho: 'https://meteora-liard.vercel.app/'
  },
  {
    nome : 'Serenatto',
    img:'../../assets/img/Serenatto.png',
    descricao: 'Página realizada em curso da Alura, café e bistrô',
    urlTrabalho: 'https://serenatto-azure.vercel.app/'
  },
]
