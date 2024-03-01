import { recipes } from "../utils/data";

export default function RecipeList() {
  const poem = {
    lines: [
      "I write, erase, rewrite",
      "Erase again, and then",
      "A poppy blooms.",
    ],
  };

  const listItems = poem.lines.map((line, index) => (
    <div key={index}>
      {index > 0 && <hr />}
      <p>{line}</p>
    </div>
  ));

  // const listItems = recipes.map((recipe) => (
  //   <div key={recipe.id}>
  //     <h2>{recipe.name}</h2>
  //     <ul>
  //       {recipe.ingredients.map((ingredient) => (
  //         <li key={ingredient}>{ingredient}</li>
  //       ))}
  //     </ul>
  //   </div>
  // ));

  return <div>{listItems}</div>;
}
