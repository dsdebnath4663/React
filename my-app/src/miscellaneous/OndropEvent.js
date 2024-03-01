function OndropEvent() {
  const handleClick = () => {
    alert("I don't do anything");
  };

  const dragStart = (event) => {
    event.dataTransfer.setData("Text", event.target.id);
    document.getElementById("demo").innerHTML = "Dragging started";
  };

  const dragEnd = (event) => {
    document.getElementById("demo").innerHTML = "Dragging ended.";
  };

  const allowDrop = (event) => {
    event.preventDefault();
  };

  const drop = (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
  };

  const styles = {
    droptarget: {
      width: "100px",
      height: "35px",
      padding: "10px",
      border: "1px solid black",
    },
  };

  return (
    <>
      <div onDrop={drop} onDragOver={allowDrop} style={styles.droptarget}>
        <p
          onDragStart={dragStart}
          onDragEnd={dragEnd}
          draggable="true"
          id="dragtarget"
        >
          Drag me!
        </p>
      </div>
      <br />
      <div onDrop={drop} onDragOver={allowDrop} style={styles.droptarget} />
      <p id="demo" />
    </>
  );
}

export default OndropEvent;
