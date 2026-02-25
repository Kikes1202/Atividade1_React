import {Card} from "./ProfileCard/ProfileCard"


export default function Cards(){

    return(
        <div className="cards-container">
            <Card pfpicture="./assets/euzin.jpeg" name='Eduardo Santos' job='Back-End Dev' text='
                Olá grupo, boa tarde a todos. Eu fiz uma confusão absurda e pensei que o trabalho era solo

                ,espero que eu possa ajudar o grupo de alguma forma.

                 O site que eu estava fazendo tá 50% pronto,

                vou mandar o repositório do github pra vcs aproveitarem alguma parte se for possivel. ' 
                tempo={Date.now() -(1000 *60*60 *10)} 


            comentario={[
                {
                    id: 1,
                    nome: 'Gabriel',
                    pfpicture: './assets/gabriel.png',
                    tempo: Date.now() - (1000 * 60 * 60 * 10) ,
                    excluir: './assets/Trash.svg',
                    texto: 'Eita mano! Vamo call de tarde pra tentar organizar vc kkk',
                    polegar: './assets/Vector.svg',
                    likeCounter: 3,
                    liked: false
                },
                {
                    id: 2,
                    nome: 'Eduardo Santos',
                    pfpicture: './assets/euzin.jpeg',
                    tempo: Date.now() - (1000 * 60 * 60 * 10) ,
                    excluir: './assets/Trash.svg',
                    texto: 'Cara eu to quase infartando aqui, muito obrigado irmão.',
                    polegar: './assets/Vector.svg',
                    likeCounter: 3,
                    liked: false
                },
                {
                    id: 3,
                    nome: 'Joao Vitor',
                    pfpicture: './assets/joaovitor.png',
                    tempo: Date.now() - (1000 * 60 * 60 * 10) ,
                    excluir: './assets/Trash.svg',
                    texto: 'Oi Eduardo! fica tranquilo que a gente te encaixa te alguma fotma',
                    polegar: './assets/Vector.svg',
                    likeCounter: 3,
                    liked: false,
                },
                {
                    id: 4,
                    nome: 'Eduardo Santos',
                    pfpicture: './assets/gabriel.png',
                    tempo: Date.now() - (1000 * 60 * 60 * 10) ,
                    excluir: './assets/Trash.svg',
                    texto: 'Dnd irmão, eu imagino a sua aflição!! kk, eu só consigo ir call la pras 16h por ai, ai a gnt arruma as ideias',
                    polegar: './assets/Vector.svg',
                    likeCounter: 3,
                    liked: false,
                },
                {    
                    id: 5,
                    nome: 'João Salabert',
                    pfpicture: './assets/js.png',
                    tempo: Date.now() - (1000 * 60 * 60 * 10) ,
                    excluir: './assets/Trash.svg',
                    texto: 'Relaxa mn, vamo juntar as coisas q a gnt tem. ver a melhor forma de fazer uma prd boa',
                    polegar: './assets/Vector.svg',
                    likeCounter: 3,
                    liked: false,
                }
                

            ]}/>
            <Card pfpicture="./assets/euzin.jpeg" name='Eduardo Santos' job='Back-End Dev' text='
            Commit feita:


            Fixes:
            Borda footer ✅️
            Hover padronizado✅️
            Imagem ao adicionar ✅️
            Width 100% ✅️
            Maiusculos ✅️
            Hover a mais ✅️
            Footer padronizado ✅️(eles estavam muito diferentes uns dos outros. Eu sei que no figma eles estavam diferentes mas enfim)' tempo={Date.now() -(1000 *60*60 *2)} 
 
            comentario={[
                {
                    id: 1,
                    nome: 'Gabriel',
                    pfpicture: './assets/gabriel.png',
                    tempo: Date.now() - (1000 * 60 * 60 * 2) ,
                    excluir: './assets/Trash.svg',
                    texto: 'Eduardo parabéns pela determinação irmão! Chegou atrasado por um mal entendido mas botou a cara pra ajudar no que precisasse!! Muito inspirador!',
                    polegar: './assets/Vector.svg',
                    likeCounter: 3,
                    liked: false
                },

                {
                    id: 2,
                    nome: 'João Vitor',
                    pfpicture: './assets/joaovitor.png',
                    tempo: Date.now() - (1000 * 60 * 60 * 2) ,
                    excluir: './assets/Trash.svg',
                    texto: 'Aproveitar a mensagem pra falar que gostei muito do desempenho de todos do grupo e tô muito orgulhoso do que fizemos! deu tudo certo! Vocês são 10!',
                    polegar: './assets/Vector.svg',
                    likeCounter: 3,
                    liked: false
                },
                {
                    id: 3,
                    nome: 'Eduardo Santos',
                    pfpicture: './assets/euzin.jpeg',
                    tempo: Date.now() - (1000 * 60 * 60 * 2) ,
                    excluir: './assets/Trash.svg',
                    texto: 'Muito obrigado, Gabriel, João Vitor e João Salabert, pela compreensão e pelo acolhimento. Fico feliz por termos conseguido alinhar os esforços para fazer o projeto! Foi um prazer trabalhar com vcs!',
                    polegar: './assets/Vector.svg',
                    likeCounter: 3,
                    liked: false
                }
                
            ]} 
            />

            </div>
    )
}


