import React, { useEffect, useState } from "react";
import { Divider, Form, Select, Input, InputNumber, Button } from "antd";
import axios from "axios";

const SidebarInAdmin = (props) => {
  const {
    setFloorMapImage,
    segment,
    setSegment,
    seatNumber,
    setSeatNumber,
    addSeats,
    setFloorId,
  } = props;

  const [offices, setOffices] = useState([]);
  const [floors, setFloors] = useState([]);

  // ページアクセス時の処理
  useEffect(() => {
    // オフィス一覧の取得
    const fetchOffices = async () => {
      const offices = await axios.get("/api/offices");
      setOffices(offices.data);
    };
    fetchOffices();
  }, []);

  // オフィスを選択・変更すると、そのオフィスに紐付くフロアを取得してくる
  const handleSelectOffice = async (officeId) => {
    const floors = await axios.get(`/api/offices/${officeId}/floors`);
    setFloors(floors.data);
  };

  // フロアを選択・変更すると、そのフロアの画像や予約情報を取得してくる
  const handleSelectFloor = async (floorId) => {
    const { data: floor } = await axios.get(`/api/floors/${floorId}`);
    setFloorId(floorId);
    setFloorMapImage(floor.mapImageUrl);
  };

  return (
    <>
      <Form layout="vertical" style={{ margin: "20px" }}>
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

        <Divider style={{borderColor: "gray" }} />
        <Form.Item label="セグメント">
            <Input value={segment} onChange={e => setSegment(e.target.value)} style={{ width: "200px"}} />
        </Form.Item>
        <Form.Item label="席番">
            <InputNumber value={seatNumber} onChange={setSeatNumber} style={{ width: "200px"}} />
        </Form.Item>
        <Button type="primary" style={{width: "200px"}} onClick={addSeats}>座席を作成</Button>
      </Form>
    </>
  );
};

export default SidebarInAdmin;
