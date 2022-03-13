import { useEffect, useState } from 'react';

const atividadeInicial =
{
    id: 0,
    titulo:'',
    prioridade:0,
    descricao:''
}

export default function AtividadeForm(props)
{
    const [atividade, setAtividade] = useState(atividadeAtual());

    useEffect(() => 
    {
        if( props.ativSelecionada.id !== 0)
        {
            setAtividade(props.ativSelecionada)
        }
    }, [props.ativSelecionada])

    const inputTextHandler = (e) => 
    {
        const {name, value} = e.target;
        setAtividade({...atividade, [name]: value})
    }

    const handleCancelar = (e) =>
    {   
        e.preventDefault();
        props.cancelarAtividade();
        setAtividade(atividadeInicial);
    }

    const handleSubmit = (e) =>
    {
        e.preventDefault();

        if(props.ativSelecionada.id !== 0)
        {
            props.atualizarAtividade(atividade)
        }
        else
        {
            props.addAtividade(atividade);
        }

        setAtividade(atividadeInicial);
    }

    function atividadeAtual()
    {
        if (props.ativSelecionada.id !== 0)
        {
            return props.ativSelecionada
        }
        else
        {
            return atividadeInicial;
        }
    }
    
    return (
        <>
            <h1>Atividade{atividade.id !== 0 ? + ' '+atividade.id : 's'}</h1>
            <form className="row g-3" onSubmit={handleSubmit}>
                {/* <div className="col-md-6">
                    <label htmlFor="inputId" className="form-label">ID</label>
                    <input 
                        name='id'
                        // id="id" 
                        onChange={inputTextHandler}
                        type="text" 
                        className="form-control" 
                        placeholder="ID" 
                        // readOnly
                        value={atividade.id} 
                        // value={Math.max.apply(Math, props.atividades.map(item => item.id)) + 1}
                        />
                </div> */}
                <div className="col-md-6">
                    <label htmlFor="inputTitulo" className="form-label">Título</label>
                    <input 
                        id="titulo" 
                        name="titulo"
                        value={atividade.titulo} 
                        onChange={inputTextHandler}
                        type="text" 
                        className="form-control" 
                        required
                        placeholder="Título"/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPrioridade" className="form-label">Prioridade</label>
                    <select 
                        name="prioridade"
                        value={atividade.prioridade} 
                        onChange={inputTextHandler}
                        id="prioridade" 
                        className="form-select">
                        <option defaultValue='0'>Selecione...</option>
                        <option value='1'>Baixa</option>
                        <option value='2'>Normal</option>
                        <option value='3'>Alta</option>
                    </select>
                </div>
                <div className="col-md-12">
                    <label htmlFor="inputDescricao" className="form-label">Descrição</label>
                    <input 
                        id="descricao" 
                        name="descricao"
                        value={atividade.descricao} 
                        onChange={inputTextHandler}
                        type="text" 
                        className="form-control" 
                        placeholder="Descrição"/>
                </div>
                <div className="col-12">
                    {
                        atividade.id === 0 ?                     
                        <button className='btn btn-outline-success' type="submit"><i className='fas fa-plus me-1'></i>Atividade</button>
                        :
                        <>
                            <button className='btn btn-outline-primary me-1' type="submit"><i className='fas fa-plus me-1'></i>Salvar</button>
                            <button className='btn btn-outline-danger' onClick={handleCancelar}><i className='fas fa-plus me-1'></i>Cancelar</button>                    
                        </>
                    }
                </div>
            </form>
        </>
    )
}