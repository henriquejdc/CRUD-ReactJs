import React from 'react'
import Atividade from './Atividade'

export default function AtividadeLista(props)
{
    return (
        <div className="mt-3">
            {props.atividades.map(ativ => (
               <Atividade 
                         deletarAtividade={props.deletarAtividade}
                         ativ={ativ}
                         pegarAtividade={props.pegarAtividade}/>
              // <li key={ativ.id} className="list-group-item" onClick={() => console.log('Teste')}>
              //   {ativ.id} - {ativ.descricao}
              // </li>
            ))}
        </div>
    )
}