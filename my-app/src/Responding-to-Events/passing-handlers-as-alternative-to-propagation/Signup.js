export default function Signup() {
  return (
    <form
      onSubmit={(e) => {
        alert(e.target[0].value + 2);
        e.preventDefault();
        alert("Submitting !");
      }}
    >
      <input />
      <button>Send</button>
    </form>
  );
}
