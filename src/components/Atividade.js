import React from 'react'

export default function Atividade(props)
{
    function prioridadeLabel(param)
    {
      switch(param)
      {
        case '1':
          return 'Baixa';
        case '2':
          return 'Normal';
        case '3':
          return 'Alta';
        default:
          return 'Não definido';
      }
    }
  
    function  prioridadeStyle(param, icon)
    {
      switch(param)
      {
        case '1':
          return icon ? 'smile' : 'success';
        case '2':
          return icon ? 'meh' : 'warning';
        case '3':
          return icon ? 'frown' : 'danger';
        default:
          return icon ? 'Não definido' : 'dark';
      }
    }

    return (
        <div 
            key={props.ativ.id} 
            className={"card mb-2 shadow-sm border-"+prioridadeStyle(props.ativ.prioridade,false)}>
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <h6 className="card-title">
                    <span className="badge bg-secondary me-1">{props.ativ.id}</span> - {props.ativ.titulo}
                    </h6>
                    <h6>
                    Prioridade: 
                    <span className="ms-1 text-black">
                        <i className={'me-1 far fa-'+prioridadeStyle(props.ativ.prioridade, true)}></i>
                        {prioridadeLabel(props.ativ.prioridade)}                      
                    </span>
                    </h6>
                </div>
                <p className="card-text">
                    {props.ativ.descricao}
                </p>
                <div className='d-flex justify-content-end pt-2 m-0 border-top'>
                    <button 
                            className='btn btn-outline-primary btn-sm'
                            onClick={() => props.pegarAtividade(props.ativ.id)}>
                        <i className='fas fa-pen me-1'></i>
                        Editar 
                    </button>
                    <button 
                            className='ms-1 btn btn-outline-danger btn-sm' 
                            onClick={() => props.deletarAtividade(props.ativ.id)}> 
                        <i className='fas fa-trash me-1'></i>
                    Deletar 
                    </button>
                </div>
            </div>
        </div>
    )
}