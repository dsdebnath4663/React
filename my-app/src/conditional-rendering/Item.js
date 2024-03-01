export default function Item({ name, importance }) {
  return (
    <li className="item">
      {name}
      {importance > 0 && <i>(Importance: {importance})</i>}
    </li>
  );
}
