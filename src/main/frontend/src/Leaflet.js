import "leaflet/dist/leaflet.css";
import { useImperativeHandle, forwardRef, useState } from 'react';
import { LatLng, LatLngBounds, CRS, Icon } from 'leaflet';
import { ImageOverlay, MapContainer, Marker, useMapEvents } from "react-leaflet";

const Leaflet = (props, ref) => {
    const [floorMapImage, setFloorMapImage] = useState("/seat.png");

    // leafletの中心座標
    const defaultCenterLatLng = new LatLng(339, 640);
    const [centerLatLng, setCenterLatLng] = useState(defaultCenterLatLng);
    // leafletの描画サイズ
    const defaultBounds = new LatLngBounds([0, 0], [339, 640]);
    const [bounds, setBounds] = useState(defaultBounds);

    // 座席一覧
    const seats = [
        { id: 1, center: [287, 150] },
        { id: 2, center: [287, 210] },
        { id: 3, center: [203, 375] },
        { id: 4, center: [161, 465] },
        { id: 5, center: [79, 585] },
    ]
    const PersonIcon = new Icon({
        iconUrl: "/person_icon.svg",
        iconSize: [32, 32],
    });

    const Debugger = () => {
        useMapEvents({
            click: (e) => {
                console.log(e.latlng);
            },
        });
        return null;
    }

    // 呼び出し元からの参照
    useImperativeHandle(ref, () => ({
        // フロアを変更した時
        setFloorMapImage: (floorMapImage) => setFloorMapImage(floorMapImage)
    }));

    return (
        <MapContainer
            crs={CRS.Simple}
            center={centerLatLng}
            zoom={0.1}
            maxZoom={1}
            scrollWheelZoom={true}
        >
            <ImageOverlay
                url={floorMapImage}
                bounds={bounds}
                zIndex={10}
            />
            {
                seats.map(seat => <Marker key={seat.id} position={seat.center} icon={PersonIcon} />)
            }
            <Marker position={seats[0].center} icon={PersonIcon} />
            <Debugger />
        </MapContainer>
    )
}

export default forwardRef(Leaflet);