import { Button, Modal } from "antd";
import React, { useState } from "react";
import { ImageOverlay, Rectangle, Tooltip, Marker } from "react-leaflet";
import { LatLng, divIcon } from 'leaflet';

export const Seat = ({ name, bounds, user, makeReservation }) => {
    const [isOpenModal, setIsOpenModal] = useState(false);

    const eventHandlers = {
        click: () => setIsOpenModal(true)
    }

    const closeModal = () => setIsOpenModal(false);

    const handleSubmit = () => {
        makeReservation();
        closeModal();
    }

    const center = new LatLng(
        (bounds[0].lat + bounds[1].lat)/2.0,
        (bounds[0].lng + bounds[1].lng)/2.0
    );

    const textIcon = divIcon({
        html: '<div style="text-align: center; font-size: 10px; width: 40px; transform: translate(-20px, -8px); color: gray; pointer-events: none;">' + name + '</div>',
        className: 'custom-div-icon', // カスタムクラスを定義 (不要な場合は空文字)
        iconSize: [0, 0], // サイズは必要ないため [0, 0] を指定
    });

    return (
        user
            ? (
                <>
                    <Rectangle
                        bounds={bounds}
                        color="gray"
                        stroke={false}
                    >
                        <Tooltip tooltipDirection="auto">{user.name}</Tooltip>
                    </Rectangle>
                    <ImageOverlay url="/person_icon.svg" bounds={bounds} zIndex={10} />
                </>
            )
            : (
                <>
                    <Rectangle
                        bounds={bounds}
                        pathOptions={{ fill: true, color: "#DDD", weight: 2 }}
                        opacity={0}
                        eventHandlers={eventHandlers}
                    />
                    <Marker position={center} icon={textIcon} />
                    <Modal
                        open={isOpenModal}
                        onCancel={closeModal}
                        footer={[
                            <Button key="cancel" onClick={closeModal}>
                                Cancel
                            </Button>,
                            <Button key="submit" type="primary" onClick={handleSubmit}>
                                予約する
                            </Button>
                            ]}
                    >
                        <p>予約しますか？</p>
                    </Modal>
                </>
            )
    )
}