export default function Button({ onSmash, children }) {
  /**
   * Component's returnType : button
   */
  return <button onClick={onSmash}>{children}</button>;
}
