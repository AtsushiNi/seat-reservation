import { Col, Form, Row, Select } from "antd";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Leaflet from "./Leaflet";

function App() {
  const mapRef = useRef();
  const [offices, setOffices] = useState([]);
  const [floors, setFloors] = useState([]);

  useEffect(() => {
    const fetchOffices = async () => {
      const offices = await axios.get("/api/offices");
      setOffices(offices.data);
    };
    fetchOffices();
  }, []);

  const handleSelectOffice = async (officeId) => {
    const floors = await axios.get(`/api/offices/${officeId}/floors`);
    setFloors(floors.data);
  }

  const handleSelectFloor = async (floorId) => {
    const floor = await axios.get(`/api/floors/${floorId}`);
    mapRef.current.setFloorMapImage(floor.data.mapImageUrl);
    mapRef.current.setSeats(floor.data.seats);
  }

  return (
    <>
    <Row>
      <Col span={4}>
        <Form
          layout="vertical"
          style={{ margin: "20px" }}
        >
          <Form.Item label="オフィス">
            <Select
              style={{ width: "200px" }}
              options={offices.map((office) => ({
                label: office.name,
                value: office.id,
              }))}
              onChange={handleSelectOffice}
            ></Select>
          </Form.Item>
          <Form.Item label="フロア">
            <Select
              style={{ width: "200px" }}
              options={floors?.map((floor) => ({
                label: floor.name,
                value: floor.id,
              }))}
              onChange={handleSelectFloor}
            ></Select>
          </Form.Item>
        </Form>
      </Col>
      <Col span={8}>
    <Leaflet
      ref={mapRef}
    />
      </Col>
    </Row>
    </>
  );
}

export default App;
