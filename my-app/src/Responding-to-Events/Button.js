export default function Button() {
  //component - lets assume its a class

  /**
   * Method Name : handleClick
   * return type : alert
   */
  const handleClick = () => {
    alert("I don't do anything");
  };

  /**
   * Component's returnType : button
   */
  return <button onClick={handleClick}>I don't do anything</button>;
}
