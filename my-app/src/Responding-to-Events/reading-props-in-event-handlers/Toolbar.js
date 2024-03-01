import AlertButton from "./AlertButton";

export default function Toolbar() {
  return (
    <div>
      <AlertButton message="Playing!">Play Movie1</AlertButton>
      <AlertButton message="Uploading!">Upload Image</AlertButton>
    </div>
  );
}
