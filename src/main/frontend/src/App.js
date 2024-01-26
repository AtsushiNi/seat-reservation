import { Col, DatePicker, Form, Row, Select } from "antd";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Leaflet from "./Leaflet";
import dayjs from 'dayjs';

function App() {
  const mapRef = useRef();
  const [offices, setOffices] = useState([]);
  const [floors, setFloors] = useState([]);
  const [floor, setFloor] = useState(null);
  const [date, setDate] = useState(dayjs());
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchOffices = async () => {
      const offices = await axios.get("/api/offices");
      setOffices(offices.data);
    };
    fetchOffices();

    const fetchUsers = async () => {
      const {data: users} = await axios.get("/api/users");
      setUsers(users);
      setCurrentUser(users[0]);
    };
    fetchUsers();
  }, []);

  const handleSelectOffice = async (officeId) => {
    const floors = await axios.get(`/api/offices/${officeId}/floors`);
    setFloors(floors.data);
  }

  const handleSelectFloor = async (floorId) => {
    const { data: floor } = await axios.get(`/api/floors/${floorId}`);
    mapRef.current.setFloorMapImage(floor.mapImageUrl);
    setFloor(floor);

    fetchReservations(floor, date);
  }

  const handleSelectDate = async (date) => {
    setDate(date);

    fetchReservations(floor, date);
  }

  const handleSelectUser = async (userId) => {
    const currentUser = users.find(user => user.id == userId);
    setCurrentUser(currentUser);
  }

  const makeReservation = async (seatId) => {
    await axios.post(`/api/reservations`, null, {
      params: {
        date: date.format('YYYY-MM-DD'),
        seatId: seatId,
        userId: currentUser.id
      }
    });

    fetchReservations(floor, date);
  }

  const fetchReservations = async (floor, date) => {
    mapRef.current.setSeats([]);
    const { data: reservations } = await axios.get(`/api/reservations`, {
      params: {
        floorId: floor.id,
        date: date.format('YYYY-MM-DD')
      }
    });

    const newSeats = floor.seats.map(seat => {
      const reservation = reservations.find(reservation => reservation.seat.id == seat.id);
      if (reservation) {
        seat.user = reservation.user;
      } else {
        seat.user = null;
      }
      return seat;
    })

    mapRef.current.setSeats(newSeats);
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
            <Form.Item label="日付">
              <DatePicker
                defaultValue={dayjs()}
                allowClear={false}
                style={{ width: "200px" }}
                onChange={handleSelectDate}
              />
            </Form.Item>
            <Form.Item label="予約ユーザー">
              <Select
                style={{ width: "200px" }}
                options={users?.map((user) => ({
                  label: user.name,
                  value: user.id,
                }))}
                onChange={handleSelectUser}
                value={currentUser?.id}
              ></Select>
            </Form.Item>
          </Form>
        </Col>
        <Col span={8}>
          <Leaflet
            ref={mapRef}
            makeReservation={makeReservation}
          />
        </Col>
      </Row>
    </>
  );
}

export default App;
