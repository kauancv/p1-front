// pages/AlterarSenha.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AlterarSenha.css';

const EyeIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
    </svg>
);

export default function AlterarSenha() {
    const navigate = useNavigate();

    const [novaSenha, setNovaSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [mostrarNovaSenha, setMostrarNovaSenha] = useState(false);
    const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(false);

    
    const [errors, setErrors] = useState({});

    const handleConfirmar = () => {
        
        const newErrors = {};

        if (novaSenha.length < 8) {
            newErrors.novaSenha = 'A SENHA DEVE TER NO MÍNIMO 8 DÍGITOS';
        }

        if (novaSenha !== confirmarSenha) {
            newErrors.confirmarSenha = 'AS SENHAS NÃO COINCIDEM';
        }

        
        setErrors(newErrors);

        
        if (Object.keys(newErrors).length === 0) {
            console.log("Nova senha (simulado):", novaSenha);
            alert("Senha alterada com sucesso! (Simulação)");
            navigate('/perfil');
        }
    };

    const handleVoltar = () => {
        navigate(-1);
    };

    return (
        <div className="body-alterar-senha">
            
            <div className="header-superior-as">
                <div className="voltar-as" onClick={handleVoltar}>&lt;&lt; Voltar</div>
                <div className="config-as">
                    <svg viewBox="0 0 24 24"><path d="M19.43..."></path></svg>
                </div>
            </div>
            <div className="titulo-container-as">
                <div className="titulo-as">ALTERAR SENHA</div>
            </div>

            <div className="container-as">
                {/* Campo Nova Senha */}
                <div className="form-grupo-as">
                    <label className="label-senha">Nova senha</label>
                    <div className="input-container">
                        <input
                            type={mostrarNovaSenha ? 'text' : 'password'}
                            className="input-senha"
                            placeholder="Nova senha"
                            value={novaSenha}
                            onChange={(e) => setNovaSenha(e.target.value)}
                        />
                        <span className="eye-icon" onClick={() => setMostrarNovaSenha(!mostrarNovaSenha)}>
                            <EyeIcon />
                        </span>
                    </div>
                    {/*Exibe a mensagem de erro para o campo 'novaSenha' */}
                    {errors.novaSenha && <p className="mensagem-erro">{errors.novaSenha}</p>}
                </div>

                {/* Campo Confirmar Senha */}
                <div className="form-grupo-as">
                    <label className="label-senha">Confirmar senha</label>
                    <div className="input-container">
                        <input
                            type={mostrarConfirmarSenha ? 'text' : 'password'}
                            className="input-senha"
                            placeholder="Confirmar senha"
                            value={confirmarSenha}
                            onChange={(e) => setConfirmarSenha(e.target.value)}
                        />
                        <span className="eye-icon" onClick={() => setMostrarConfirmarSenha(!mostrarConfirmarSenha)}>
                            <EyeIcon />
                        </span>
                    </div>
                    {/* Exibe a mensagem de erro para o campo 'confirmarSenha' */}
                    {errors.confirmarSenha && <p className="mensagem-erro">{errors.confirmarSenha}</p>}
                </div>

                <button className="botao-confirmar-as" onClick={handleConfirmar}>
                    Confirmar
                </button>
            </div>
        </div>
    );
}