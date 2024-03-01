import PlayButton from "./PlayButton";
import UploadButton from "./UploadButton";

export default function Toolbar() {
  return (
    <div>
     <UploadButton/>
     <PlayButton movieName="Kiki's Delivery Service"/>
    </div>
  );
}