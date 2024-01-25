import "./App.css";
import { ImageOverlay, MapContainer, useMapEvents } from "react-leaflet";

function App() {
  const Debugger = () => {
    const map = useMapEvents({
      click: (e) => {
        console.log(e.latlng);
      },
    });
    return null;
  }

  return (
    <div className="App">
      <header></header>
      <main>
        <MapContainer
          center={[100,800]}
          zoom={0}
          maxZoom={1}
          scrollWheelZoom={false}
        >
          <ImageOverlay
            url="/seat.png"
            bounds={[
              [0,0],
              [400,800],
            ]}
          />
          <Debugger />
        </MapContainer>
      </main>
    </div>
  );
}

export default App;
