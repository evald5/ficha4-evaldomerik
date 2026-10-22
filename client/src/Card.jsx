function Card({ name, type, attack }) {
  return (
    <li>
      <b>{name}</b> — {type}, ataque {attack}
    </li>
  );
}

export default Card;
