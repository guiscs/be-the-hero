import React, {useState} from 'react'

import {Link, useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'

import api from '../../services/api'

import './styles.css'

import logoImg from '../../assets/logo.svg'

export default function NewIncidet(){
    const history =  useHistory();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const ongId = localStorage.getItem('ongId')

    async function handleNewIncident(e){
        e.preventDefault();
        try{
        
            const data = {title, description, value}

            await api.post(
                'incidents',
                 data,{
                     headers:{
                         Authorization:ongId,
                     }
                 })

            alert('Cadastro Realizado com sucesso')

            history.push('/profile');

        }catch(err){
            alert('Não foi possivel cadastrar, tente novamente')
        }
    }

    return (
        <div className="new-incident">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero"/>
                    <h1>Cadastrar Novo Caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um heroi para resolver isso.</p>

                    
                <Link className="back-link" to="/Profile">
                    <FiArrowLeft size={16} color="#E02041"></FiArrowLeft>
                    Voltar para Home
                </Link>
                </section>
                <form onSubmit={handleNewIncident}>
                    <input 
                    type="text"
                    placeholder="Titulo do caso"
                    value={title}
                    onChange={e=> setTitle(e.target.value)}
                    />
                    <textarea 
                    placeholder="Descrição"
                    value={description}
                    onChange={e=> setDescription(e.target.value)}
                    />
                    <input 
                    placeholder="Valor em Reais"
                    value={value}
                    onChange={e=> setValue(e.target.value)}
                    />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}
