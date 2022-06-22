import { useState } from "react";
import CustomPopup from "./CustomPopup";
// import "./styles.css";

export default function App1() {
  const [visibility, setVisibility] = useState(false);

  const popupCloseHandler = (e) => {
    setVisibility(e);
  };

  return (
    <div className="App1">
      <button onClick={(e) => setVisibility(!visibility)}>Toggle Popup</button>

      <CustomPopup
        onClose={popupCloseHandler}
        show={visibility}
        title="Hello Jeetendra"
      >
        <h1>Hello This is Popup Content Area</h1>
        <h2>This is my lorem ipsum text here!</h2>
      </CustomPopup>
    </div>
  );
}