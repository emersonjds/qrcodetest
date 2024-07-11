import { useEffect } from "react";
import "./App.css";
import qrCode from "./assets/qrcode.png";
// import QrCodeReader from "./QrCodeReader";

function App() {

  //create an useEffect that do a request for an api local
  useEffect(() => {
    fetch("https://qrcodeapi-d36o.onrender.com/")
      .then((response) => response.json())
      .then((data) => alert(data.message));
  }, []);

  /**
   * #TODO: Add config with url schema in Android
   */
  return (
    <>
      <div className="bg-blue-500 w-full h-full p-4 flex items-center justify-center">
        <div className="h-1/2 w-1/2 flex items-center justify-center p-3">
          <figure>
            <img src={qrCode} alt="Logo" />
          </figure>
        </div>
      </div>
    </>
    // <QRCodeScanner />
    // <div>
    //   <QrCodeReader />
    // </div>
  );
}

export default App;
