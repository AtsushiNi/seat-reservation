import React, { useRef, useState } from "react";
import { Row, Col } from "antd";
import axios from "axios";
import dayjs from "dayjs";
import Leaflet from "../components/LeafletInSeatMap";
import Sidebar from "../components/SidebarInSeatMap";
import { LatLng } from "leaflet";

const SeatMapPage = () => {
  const mapRef = useRef();
  const [floor, setFloor] = useState(null);
  const [date, setDate] = useState(dayjs());
  const [currentUser, setCurrentUser] = useState(null);

  // 予約する
  const makeReservation = async (seatId) => {
    await axios.post(`/api/reservations`, null, {
      params: {
        date: date.format("YYYY-MM-DD"),
        seatId: seatId,
        userId: currentUser.id,
      },
    });

    fetchReservations(floor, date);
  };

  // 予約情報を取得する
  const fetchReservations = async (floor, date) => {
    mapRef.current.setSeats([]);
    const { data: reservations } = await axios.get(`/api/reservations`, {
      params: {
        floorId: floor.id,
        date: date.format("YYYY-MM-DD"),
      },
    });

    const newSeats = floor.seats.map((seat) => {
      const reservation = reservations.find(
        (reservation) => reservation.seat.id == seat.id
      );
      if (reservation) {
        seat.user = reservation.user;
      } else {
        seat.user = null;
      }
      return {
        id: seat.id,
        bounds: [new LatLng(seat.bounds[0].lat, seat.bounds[0].lng), new LatLng(seat.bounds[1].lat, seat.bounds[1].lng)],
        user: seat.user,
      };
    });

    mapRef.current.setSeats(newSeats);
  };

  return (
    <>
    <Row>
      <Col span={4}>
        <Sidebar floor={floor} setFloor={setFloor} date={date} setDate={setDate} currentUser={currentUser} setCurrentUser={setCurrentUser} fetchReservations={fetchReservations} mapRef={mapRef} />
      </Col>
      <Col span={8}>
        <Leaflet ref={mapRef} makeReservation={makeReservation} />
      </Col>
    </Row>
    </>
  );
};

export default SeatMapPage;
