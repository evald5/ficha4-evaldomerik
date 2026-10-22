import { useState } from "react";
import Card from "./Card.jsx";

const cards = [
  { name: "Dragão de Cobalto", type: "Criatura", attack: 7, defense: 5 },
  { name: "Guardiã das Marés", type: "Criatura", attack: 4, defense: 8 },
  { name: "Rito de Ferro", type: "Feitiço", attack: 0, defense: 0 },
  { name: "Sentinela de Âmbar", type: "Criatura", attack: 6, defense: 6 },
  { name: "Eco do Vazio", type: "Feitiço", attack: 0, defense: 0 },
];

function App() {
  const [filter, setFilter] = useState("Todas");
  const [search, setSearch] = useState("");

  const visible = cards
    .filter((card) => filter === "Todas" || card.type === filter)
    .filter((card) => card.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <main>
      <h1>A minha coleção</h1>
      <p>
        Tenho {cards.length} cartas · a mostrar {visible.length}
      </p>
      <div>
        <button onClick={() => setFilter("Todas")}>Todas</button>
        <button onClick={() => setFilter("Criatura")}>Só criaturas</button>
        <button onClick={() => setFilter("Feitiço")}>Só feitiços</button>
      </div>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Procurar pelo nome…"
      />
      <ul>
        {visible.map((card) => (
          <Card key={card.name} {...card} />
        ))}
      </ul>
    </main>
  );
}

export default App;
