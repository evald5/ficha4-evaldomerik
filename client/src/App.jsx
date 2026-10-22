import Card from "./Card.jsx";

const cards = [
  { name: "Dragão de Cobalto", type: "Criatura", attack: 7, defense: 5 },
  { name: "Guardiã das Marés", type: "Criatura", attack: 4, defense: 8 },
  { name: "Rito de Ferro", type: "Feitiço", attack: 0, defense: 0 },
  { name: "Sentinela de Âmbar", type: "Criatura", attack: 6, defense: 6 },
  { name: "Eco do Vazio", type: "Feitiço", attack: 0, defense: 0 },
];

function App() {
  return (
    <main>
      <h1>A minha coleção</h1>
      <ul>
        {cards.map((card) => (
          <Card key={card.name} {...card} />
        ))}
      </ul>
    </main>
  );
}

export default App;
