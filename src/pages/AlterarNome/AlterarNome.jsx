// pages/AlterarNome.jsx

import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './AlterarNome.css';

export default function AlterarNome() {
    const navigate = useNavigate();
    const location = useLocation();

    const nomeVindoDoPerfil = location.state?.nomeAtual || '';
    const [novoNome, setNovoNome] = useState(nomeVindoDoPerfil);

    
    const [erro, setErro] = useState('');

    const handleConfirmar = () => {
        // MODIFICADO: Lógica de validação
        if (!novoNome.trim()) {
            // Se o campo estiver vazio, define a mensagem de erro
            setErro('PREENCHA O CAMPO DE NOME');
            return; // Interrompe a função
        }

        // Se a validação passar, limpa qualquer erro anterior
        setErro('');

        // Simula o envio para a API
        console.log(`Nome alterado para: ${novoNome}`);
        alert("Nome alterado com sucesso! (Simulação)");
        navigate('/perfil');
    };

    const handleVoltar = () => {
        navigate(-1);
    };

    return (
        <div className="body-alterar-nome">
            
            <div className="header-superior-an">
                <div className="voltar-an" onClick={handleVoltar}>&lt;&lt; Voltar</div>
                <div className="config-an">
                    <svg viewBox="0 0 24 24"><path d="M19.43..."></path></svg>
                </div>
            </div>
            <div className="titulo-container-an">
                <div className="titulo-an">ALTERAR NOME</div>
            </div>

            <div className="container-an">
                <div className="form-grupo">
                    <label htmlFor="nome-completo" className="label-nome">Nome</label>
                    <input
                        type="text"
                        id="nome-completo"
                        className="input-nome"
                        placeholder="Nome completo"
                        value={novoNome}
                        onChange={(e) => setNovoNome(e.target.value)}
                    />
                    
                    {erro && <p className="mensagem-erro">{erro}</p>}
                </div>

                <button className="botao-confirmar" onClick={handleConfirmar}>
                    Confirmar
                </button>
            </div>
        </div>
    );
}