import style from './style.module.css'

/* Plano

1- desativar o refresh da pagina causado pelo botao default --ok
2- implementar o comentario dinamico
    - manipulacao da array de objetos
    - renderizar o array de objetos de forma padronizada


*/





interface comentarioUsuario {
    pfpicture: string,
    nome: string,
    tempo: string,
    excluir: string,
    texto: string,
    polegar: string,
    likeCounter: string,  
    id: number
} 


export default function ComentarioDinamico(props: comentarioUsuario){
    return(
        <div className={style.wrapper}>
            <div className={style.imgContainer}>
                <img src={props.pfpicture} alt="foto" />
            </div>
            <div className={style.container}>
                <div className={style.commentContainer}>
                    <div className={style.commentHeader}>
                        <div className={style.nometempo}>
                            <h4>{props.nome}</h4>
                            <h5>{props.tempo}</h5>
                        </div>
                        <button>
                            <img src={props.excluir} alt="excluir" />
                        </button>
                    </div>
                    <div className={style.texto}>{props.texto}</div>
                </div>
            </div>
        </div>
    )
}