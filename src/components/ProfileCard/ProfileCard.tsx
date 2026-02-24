import { useEffect, useState } from 'react'
import Comentario from '../Comentario/comentarios'
import Form from '../buttons/submitButton'

interface CardProps{
    pfpicture: string, 
    name: string,
    job: string,
    text: string,
    tempo: string,
    comentario: comentarioUsuario[];
}

interface comentarioUsuario {
    pfpicture: string,
    nome: string,
    tempo: number,
    excluir: string,
    texto: string,
    polegar: string,
    likeCounter: number, 
    id: number, 
    liked: boolean,
} 




export  function Card({pfpicture, name, job, text, comentario, tempo}:CardProps){

    const[userCommentInfo, setUserCommentInfo] = useState<comentarioUsuario[]>([...comentario]);
    const[proximoId, setProximoId] = useState(1);
    const[, setSegundos] = useState(0);
    const[, setMinutos] = useState(0);
    const[, setHoras] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setSegundos(segundos => {
                if(segundos >= 59){
                    setMinutos(minutos => {
                        if (minutos >= 59){
                            setHoras(horas => horas+1)
                        }
                        return minutos + 1
                    })
                }
                return segundos + 1
            })
        }, 1000)

        return () => clearInterval(timer);

    }, [])


    function AdicionarComentario(texto: string){

        const comentarioNovo = {
            id: proximoId,
            pfpicture:'./assets/euzin.jpeg',
            nome: 'Eduardo Santos',
            tempo: Date.now()  ,
            excluir: './assets/Trash.svg',
            texto: texto,
            polegar: './assets/Vector.svg',
            likeCounter: 0,
            liked: false
        }



        /* Aqui a IA me aajudou, nao tinha a menor ideia */
        setUserCommentInfo(prev => [...prev, comentarioNovo])

        setProximoId(prev => prev + 1)
        /* FIm da ajuda */  


    }

    function excluirComentario(id: number){
        setUserCommentInfo(prev => prev.filter(comentario => comentario.id !== id))
    }

    function adicionarLike(id: number){
        setUserCommentInfo(array => array.map(comentario => comentario.id === id ? {...comentario, likeCounter: comentario.likeCounter + (comentario.liked ? -1 : 1 ), liked: !comentario.liked }: comentario))
    }

    function formatarTempo(tempoCriacao: number) : string{
        const segundos = Math.floor((Date.now() - tempoCriacao) / 1000 )
        const minutos = Math.floor((segundos) / 60)
        const horas = Math.floor((minutos)/60)

        if(horas > 0){
            return `Publicado há ${horas}h`
        }else return `Publicado há ${minutos}m`
    }





    return(
        <div className="user-card">
            <div className="user-card-header">
                <div className="header-personal-info">
                    <img src={pfpicture} alt="Profile Picture" />
                    <div className='namejob'>
                        <h2>{name}</h2>
                        <p>{job}</p>
                    </div>
                </div>
                <div className="header-timer">
                    <p>{tempo}</p>
                </div>
            </div>

            <div className="post">
                <p>{text}</p>
            </div>
            <div className="feedback">
                <h4>Digite seu Feedback</h4>
                <Form addComentario={AdicionarComentario}/>
            </div>

            <div className='comentario-container'>

                {[...userCommentInfo].map((comentario) =>(
                    <Comentario
                        pfpicture={comentario.pfpicture}
                        nome={comentario.nome}
                        tempo = {formatarTempo(comentario.tempo)}
                        excluir={comentario.excluir}
                        texto = {comentario.texto}
                        polegar={comentario.polegar}
                        likeCounter={comentario.likeCounter}
                        id = {comentario.id}
                        key={comentario.id}
                        onExcluir={excluirComentario}
                        onAddLike={adicionarLike}
                    />
                ))}
            </div>



        </div>
    )
}
