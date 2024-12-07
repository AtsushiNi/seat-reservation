import React, { useState } from "react";
import { Row, Col } from "antd";
import axios from "axios";
import Leaflet from "../components/LeafletInAdmin";
import Sidebar from "../components/SidebarInAdmin";

const AdminPage = () => {
  const [floorId, setFloorId] = useState(null);
  const [floorMapImage, setFloorMapImage] = useState("/seat.png");
  const [segment, setSegment] = useState("AA");
  const [seatNumber, setSeatNumber] = useState(1);
  const [seats, setSeats] = useState([]);

  // 管理者用APIを叩いて座席情報を追加する
  const addSeats = async () => {
    await axios.post("/api/admin/floor/" + floorId + "/add-seats", seats);
    setSeats([]);
  }

    return (
      <>
        <Row>
          <Col span={4}>
            <Sidebar setFloorMapImage={setFloorMapImage} segment={segment} setSegment={setSegment} seatNumber={seatNumber} setSeatNumber={setSeatNumber} addSeats={addSeats} setFloorId={setFloorId} />
          </Col>
          <Col span={8}>
            <Leaflet floorMapImage={floorMapImage} segment={segment} seatNumber={seatNumber} setSeatNumber={setSeatNumber} seats={seats} setSeats={setSeats} />
          </Col>
        </Row>
      </>
    );
}

export default AdminPage;
