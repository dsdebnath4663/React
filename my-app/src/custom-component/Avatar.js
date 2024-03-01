const url = "https://i.imgur.com/QIrZWGIs.jpg";
const description = "Alan L. Hart";
const name = "Debnath";

export default function Avatar() {
  return (
    <>
      <img src={url} alt={description} />
      <h1>{name}'s To Do List</h1>
    </>
  );
}
