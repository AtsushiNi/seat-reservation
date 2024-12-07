import React, { useEffect, useState } from "react";
import { DatePicker, Form, Select } from "antd";
import axios from "axios";
import dayjs from "dayjs";

const SidebarInSeatMap = (props) => {
  const {
    floor,
    setFloor,
    date,
    setDate,
    currentUser,
    setCurrentUser,
    fetchReservations,
    mapRef,
  } = props;

  const [offices, setOffices] = useState([]);
  const [floors, setFloors] = useState([]);
  const [users, setUsers] = useState([]);

  // ページアクセス時の処理
  useEffect(() => {
    // オフィス一覧の取得
    const fetchOffices = async () => {
      const offices = await axios.get("/api/offices");
      setOffices(offices.data);
    };
    fetchOffices();

    // ユーザー一覧の取得
    const fetchUsers = async () => {
      const { data: users } = await axios.get("/api/users");
      setUsers(users);
      setCurrentUser(users[0]);
    };
    fetchUsers();
  }, []);

  // オフィスを選択・変更すると、そのオフィスに紐付くフロアを取得してくる
  const handleSelectOffice = async (officeId) => {
    const floors = await axios.get(`/api/offices/${officeId}/floors`);
    setFloors(floors.data);
  };

  // フロアを選択・変更すると、そのフロアの画像や予約情報を取得してくる
  const handleSelectFloor = async (floorId) => {
    const { data: floor } = await axios.get(`/api/floors/${floorId}`);
    mapRef.current.setFloorMapImage(floor.mapImageUrl);
    setFloor(floor);

    fetchReservations(floor, date);
  };

  // 日程を選択・変更すると、その日程の予約情報を取得してくる
  const handleSelectDate = async (date) => {
    setDate(date);

    fetchReservations(floor, date);
  };

  // 座席を使用するユーザーを選択する
  const handleSelectUser = async (userId) => {
    const currentUser = users.find((user) => user.id == userId);
    setCurrentUser(currentUser);
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
    </>
  );
};

export default SidebarInSeatMap;
