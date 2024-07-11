import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

const QrCodeReader = () => {
  const [data, setData] = useState("No result");

  const handleScan = (result) => {
    if (result) {
      setData(result.text);
      console.log("QR Code lido:", result.text);
      // Aqui você pode adicionar qualquer lógica adicional que precisar ao ler o QR Code
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div>
      <h1>QR Code Scanner</h1>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            handleScan(result);
          }

          if (!!error) {
            handleError(error);
          }
        }}
        style={{ width: "100%" }}
      />
      <p>{data}</p>
    </div>
  );
};

export default QrCodeReader;
