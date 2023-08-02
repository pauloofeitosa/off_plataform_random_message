//constante que armazena as opcoes de status para a mensagem aleatoria
const estado =['solteiro', 'casado', 'viuvo', 'divorciado', 'enterrado', 'pai', 'promovido'];

//constante que armazena as opcoes de emocao para a mensagem aleatoria
const emocao = ['feliz', 'emocionado', 'motivado', 'reflexivo', 'orgulhoso', 'realizado'];

//constante que armazena as opcoes de mensagem final para a mensagem aleatoria
const mensagemFinal = ['Aproveite cada momento!', 'Lembre-se de valorizar suas conquistas!', 'A vida é uma jornada cheia de surpresas!', 'Seja grato por tudo o que você tem!', 'Continue seguindo seus sonhos!'];


//constante que gera uma idade aleatoria entre 18 e 90 anos
const idade = Math.floor(Math.random() * (90-18) +18);

const mensagem = () => {
    const estadoMensagem = estado[Math.floor(Math.random() * estado.length)]
    const emocaoMensagem = emocao[Math.floor(Math.random() * emocao.length )]
    const mensagemFinalMensagem = mensagemFinal[Math.floor(Math.random() * mensagemFinal.length )]
    return console.log(`aos ${idade} voce sera ${estadoMensagem} e estara ${emocaoMensagem} com isso. Entao ${mensagemFinalMensagem}`)
}


mensagem()
