function Card({ name, type, attack }) {
  return (
    <li>
      <b>{name}</b> — {type}, ataque {attack}
      {attack >= 6 && <span className="strong">forte</span>}
    </li>
  );
}

export default Card;
