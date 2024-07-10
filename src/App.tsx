import "./App.css";
import qrCode from "./assets/qrcode.png";

function App() {
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
  );
}

export default App;
