import { people } from "../utils/data";
import { getImageUrl } from "../utils/commonUtility";

export default function List() {
  const chemists = people.filter((person) => person.profession === "chemist");

  const everyoneElse = people.filter(
    (person) => person.profession !== "chemist"
  );

  const listItems = chemists.map((person) => (
    <li>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ));

  const everyoneElselistItems = everyoneElse.map((person) => (
    <li>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ));
  return (
    <article>
      <h1>Chemists</h1>
      <ul>{listItems}</ul>
      <h1>Everyone Else</h1>
      <ul>{everyoneElselistItems}</ul>
    </article>
  );
}
