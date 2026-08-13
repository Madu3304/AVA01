import { useState } from "react";
import "./App.css";

function App() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [tipo, setTipo] = useState("Outro");

  const [contatos, setContatos] = useState([]);

  function adicionarContato(e) {
    e.preventDefault();

    // Verifica se os campos estão preenchidos
    if (nome.trim() === "" || telefone.trim() === "" || tipo === "") {
      alert("Preencha todos os campos antes de adicionar o contato.");
      return;
    }

    const novoContato = {
      id: Date.now(),
      nome: nome.trim(),
      telefone: telefone.trim(),
      tipo: tipo,
    };

    setContatos([...contatos, novoContato]);

    // Limpa os campos depois de adicionar
    setNome("");
    setTelefone("");
    setTipo("Outro");
  }

  function limparLista() {
    setContatos([]);
  }

  return (
    <div className="pagina">
      <div className="container">
        <header>
          <h1>Meus contatos</h1>
        </header>

        <main>
          <div className="tema">
            <span>Tema:</span>
            <label>
              <input type="radio" name="tema" defaultChecked />
              Claro
            </label>

            <label>
              <input type="radio" name="tema" />
              Escuro
            </label>
          </div>

          <form onSubmit={adicionarContato}>
            <div className="campo">
              <label htmlFor="nome">Nome:</label>
              <input
                id="nome"
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>

            <div className="campo">
              <label htmlFor="telefone">Telefone:</label>
              <input
                id="telefone"
                type="tel"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
              />
            </div>

            <div className="campo">
              <label htmlFor="tipo">Tipo de contato:</label>

              <select
                id="tipo"
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
              >
                <option value="Outro">Outro</option>
                <option value="Parente">Parente</option>
                <option value="Amigo">Amigo</option>
                <option value="Colega de trabalho">
                  Colega de trabalho
                </option>
              </select>
            </div>

            <button type="submit" className="btn-adicionar">
              Adicionar
            </button>
          </form>

          <section className="lista">
            {contatos.length === 0 ? (
              <p className="vazio">Nenhum contato cadastrado.</p>
            ) : (
              <ul>
                {contatos.map((contato) => (
                  <li key={contato.id}>
                    <strong>{contato.nome}</strong>{" "}
                    [{contato.telefone}] [{contato.tipo}]
                  </li>
                ))}
              </ul>
            )}
          </section>

          <button
            type="button"
            className="btn-limpar"
            onClick={limparLista}
          >
            Limpar lista
          </button>
        </main>
      </div>
    </div>
  );
}

export default App;
