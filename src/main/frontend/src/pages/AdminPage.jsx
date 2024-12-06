import React, { useState } from "react";
import { Row, Col } from "antd";
import Leaflet from "../components/LeafletInAdmin";
import Sidebar from "../components/SidebarInAdmin";

const AdminPage = () => {
  const [floorMapImage, setFloorMapImage] = useState("/seat.png");
  const [segment, setSegment] = useState("AA");
  const [seatNumber, setSeatNumber] = useState(1);

    return (
      <>
        <Row>
          <Col span={4}>
            <Sidebar setFloorMapImage={setFloorMapImage} segment={segment} setSegment={setSegment} seatNumber={seatNumber} setSeatNumber={setSeatNumber} />
          </Col>
          <Col span={8}>
            <Leaflet floorMapImage={floorMapImage} segment={segment} setSegment={setSegment} seatNumber={seatNumber} setSeatNumber={setSeatNumber} />
          </Col>
        </Row>
      </>
    );
}

export default AdminPage;
