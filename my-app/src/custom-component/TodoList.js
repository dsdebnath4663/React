const today = new Date();

function formatDate(date) {
  return Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "long",
    timeZone: "Australia/Sydney",
  }).format(date);
}

export default function TodoList() {
  return (
    <>
      <h1 style={{ color: "blue" }}>A Blue Heading</h1>
      <h1>To Do List for {formatDate(today)}</h1>
    </>
  );
}
