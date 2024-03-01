const url = "https://i.imgur.com/QIrZWGIs.jpg";
const description = "Alan L. Hart";
const name = "Debnath";

export default function Avatar2({ person, size }) {
  return (
    <>
      <img
        className="avatar"
        src={person.url}
        alt={person.name}
        width={size}
        height={size}
      />
    </>
  );
}
