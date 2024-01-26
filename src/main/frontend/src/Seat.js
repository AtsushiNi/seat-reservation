import React, { useState } from "react";
import { Button, Modal, Popover } from "antd";
import { ImageOverlay, Popup, Rectangle, Tooltip } from "react-leaflet";

export const Seat = ({ bounds, user, makeReservation }) => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const boundsArray = [bounds.start, bounds.end];

    const eventHandlers = {
        click: () => setIsOpenModal(true)
    }

    const closeModal = () => setIsOpenModal(false);

    const handleSubmit = () => {
        makeReservation();
        closeModal();
    }

    return (
        user
            ? (
                <>
                    <Rectangle
                        bounds={boundsArray}
                        color="gray"
                        stroke={false}
                    >
                        <Tooltip tooltipDirection="auto">{user.name}</Tooltip>
                    </Rectangle>
                    <ImageOverlay url="/person_icon.svg" bounds={boundsArray} zIndex={10} />
                </>
            )
            : (
                <>
                    <Rectangle
                        bounds={boundsArray}
                        pathOptions={{ fill: true, color: "#DDD", weight: 2 }}
                        opacity={0}
                        eventHandlers={eventHandlers}
                    />
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