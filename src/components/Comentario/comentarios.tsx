import style from './style.module.css'
import { useState } from 'react'

interface comentarioUsuario {
    pfpicture: string,
    nome: string,
    tempo: string,
    excluir: string,
    texto: string,
    polegar: string,
    likeCounter: number,  
    id: number
    onExcluir: (id: number) => void
    onAddLike: (id: number) => void
} 


export default function Comentario(props: comentarioUsuario){
    
    const[liked, setliked] = useState(false)

    function handleLike(){
        setliked(curtido => !curtido)
        props.onAddLike(props.id)
    }

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
                        <button onClick={(() => props.onExcluir(props.id))}>
                            <img src={props.excluir} alt="excluir" />
                        </button>
                    </div>
                    <div className={style.texto}>{props.texto}</div>
                </div>
                <div className={style.likeContainer}>
                <label>
                    <input
                        type="checkbox"
                        onChange={handleLike}
                        checked={liked}
                        style={{display: 'none'}}
                        src={props.polegar}    

                    />
                    <img
                        src={liked ? "./assets/Like.svg" : "../../assets/Vector.svg"}
                    />
                </label>

                    
                    <h4 style={{color: liked ? '#007DFA': 'white' }}>Like •{props.likeCounter}</h4>
                    
                </div>

            </div>
        </div>
    )
}