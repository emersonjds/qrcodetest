import { useEffect, useRef } from "react";
// import { detect } from 'jsqr';
import detect from "jsqr";
import google from "./assets/google.png";

const QRCodeScanner = () => {
  const videoRef = useRef(null);

  const handleScan = () => {
    const video: null = videoRef.current;
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    console.log(context);

    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    const code = detect(imageData.data, canvas.width, canvas.height);

    if (code) {
      console.log("QR Code lido:", code.data);
      // Aqui você pode chamar uma função para tratar o QR Code lido
      handleQRCodeRead(code.data);
    }

    requestAnimationFrame(handleScan);
  };

  const handleQRCodeRead = (data: string) => {
    // Função para tratar o QR Code lido
    console.log("QR Code lido:", data);
    // Disparar outra função aqui
  };

  // Iniciar o escaneamento quando o componente for montado
  useEffect(() => {
    requestAnimationFrame(handleScan);
  }, []);

  return (
    <div>
      <video ref={videoRef} style={{ display: "none" }} />
      {/* Aqui você renderiza o QR Code na tela */}
      <img src={google} alt="QR Code" />
    </div>
  );
};

export default QRCodeScanner;
