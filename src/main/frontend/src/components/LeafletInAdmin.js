import React from "react";
import "leaflet/dist/leaflet.css";
import { forwardRef, useState } from 'react';
import { LatLng, LatLngBounds, CRS, divIcon } from 'leaflet';
import { ImageOverlay, MapContainer, Polygon, Rectangle, useMapEvents, Marker } from "react-leaflet";

const LeafletInSeatMap = (props) => {
    const { floorMapImage, segment, seatNumber, setSeatNumber, seats, setSeats } = props;

    // leafletの中心座標
    const defaultCenterLatLng = new LatLng(339, 640);
    const [centerLatLng, setCenterLatLng] = useState(defaultCenterLatLng);
    // leafletの描画サイズ
    const defaultBounds = new LatLngBounds([0, 0], [339, 640]);
    const [bounds, setBounds] = useState(defaultBounds);

    return (
        <MapContainer
            crs={CRS.Simple}
            center={centerLatLng}
            zoom={0.1}
            scrollWheelZoom={true}
            style={{ maxHeight: "calc(100vh - 64px)" }}
        >
            <Map bounds={bounds} floorMapImage={floorMapImage} segment={segment} seatNumber={seatNumber} setSeatNumber={setSeatNumber} seats={seats} setSeats={setSeats} />
        </MapContainer>
    )
}

const Map = (props) => {
    const { bounds, floorMapImage, segment, seatNumber, setSeatNumber, seats, setSeats } = props;
    const [startPoint, setStartPoint] = useState(null); // 始点の座標

    useMapEvents({
        click(e) {
            if (startPoint === null) {
                // 始点を設定
                setStartPoint(e.latlng);
            } else {
                const newSeat = {bounds: [startPoint, e.latlng], name: `${segment}-${seatNumber}`};
                // 座席リストに追加
                setSeats(prevSeats => [...prevSeats, newSeat]);
                // 始点をクリア
                setStartPoint(null);
                // カウントアップ
                setSeatNumber(prevNumber => prevNumber + 1);
            }
        }
    })

    return (
        <>
            <ImageOverlay
                url={floorMapImage}
                bounds={bounds}
                zIndex={10}
            />
            {seats.map(seat => <Seat seat={seat} />)}
        </>
    )
}

const Seat = ({seat}) => {
    const center = new LatLng(
        (seat.bounds[0].lat + seat.bounds[1].lat)/2.0,
        (seat.bounds[0].lng + seat.bounds[1].lng)/2.0
    );

    const textIcon = divIcon({
        html: '<div style="text-align: center; font-size: 16px; width: 40px; transform: translate(-20px, -8px); color: blue;">' + seat.name + '</div>',
        className: 'custom-div-icon', // カスタムクラスを定義 (不要な場合は空文字)
        iconSize: [0, 0], // サイズは必要ないため [0, 0] を指定
    });

    return (
        <>
            <Rectangle bounds={seat.bounds} />
            <Marker position={center} icon={textIcon} />
        </>
    )
}

export default forwardRef(LeafletInSeatMap);