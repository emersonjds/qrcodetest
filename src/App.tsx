import { useEffect } from "react";
import "./App.css";
import axios from 'axios';

import qrCode from "./assets/qrcode.png";
// import QrCodeReader from "./QrCodeReader";

function App() {

  const checkDevice = async () => {
    try {
        const response = await axios.get('https://qrcodeapi-d36o.onrender.com');
        const { device } = response.data;
        
        if (device === 'android') {
            window.location.href = 'intent://portonet#Intent;scheme=portonet://abrirappportonet;package=br.com.portoseguro.portonetmobile;end;';
        } else if (device === 'ios') {
            window.location.href = 'www.google.com';
        } else {
            // Handle unknown devices or provide a fallback
            alert('Device not recognized. Please use an Android or iOS device.');
        }
    } catch (error) {
        console.error('Error checking device', error);
    }
};

  useEffect(() => {
    checkDevice();
}, []);

  //create an useEffect that do a request for an api local
  // useEffect(() => {
  //   fetch("https://qrcodeapi-d36o.onrender.com/")
  //     .then((response) => response.json())
  //     .then((data) => alert(data.message));
  // }, []);

  return (
    <>
      <div className="bg-blue-500 w-full h-full p-4 flex items-center justify-center">
        <div className="h-1/2 w-1/2 flex items-center justify-center p-3">
          {/* <figure>
            <img src={qrCode} alt="Logo" />
          </figure> */}
          <h1 className="text-center text-bold text-white">
            Carregando...
          </h1>
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
