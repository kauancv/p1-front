// App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Perfil from "./pages/Perfil.jsx";
import AlterarNome from "./pages/AlterarNome.jsx";
import AlterarSenha from "./pages/AlterarSenha.jsx";
import Relatorio from "./pages/Relatorio.jsx"; // 1. Importe o novo componente

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/perfil/alterar-nome" element={<AlterarNome />} />
                <Route path="/perfil/alterar-senha" element={<AlterarSenha />} />
                {/* 2. Adicione a nova rota aqui */}
                <Route path="/perfil/relatorio" element={<Relatorio />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;