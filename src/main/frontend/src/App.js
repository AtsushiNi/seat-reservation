import React, { useState, useEffect } from "react";
import "./App.css";
import { Leaflet } from "./Leaflet";
import axios from "axios";

function App() {
  const [offices, setOffices] = useState([]);

  useEffect(() => {
    const fetchOffices = async () => {
      const offices = await axios.get("/api/offices");
      setOffices(offices.data);
    };
    fetchOffices();
  }, []);

  return <Leaflet />;
}

export default App;
