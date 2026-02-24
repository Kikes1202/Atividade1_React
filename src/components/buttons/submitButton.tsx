import {useState} from 'react'



interface FormProp{
    addComentario: (texto: string) => void;
}


export default function Form({ addComentario}: FormProp){

    const[value, setValue] = useState<string>('');
    /* Documentação da W3 school ok? */
    function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>){
        setValue(e.target.value);
    }

    function handleSubmit(e: React.SubmitEvent<HTMLFormElement> ){
        e.preventDefault()
        if(value.trim() !== ''){
            addComentario(value)
            setValue('')
        }

    }

    return(
        <form onSubmit={handleSubmit}>
            <textarea className='textarea' name="Comentario" id="textarea" placeholder='Escreva um comentário...' value={value} onChange={handleChange}/>
            <button type="submit" className='botaoComentar'>Comentar</button>
        </form>
    )
}
    
