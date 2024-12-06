import "leaflet/dist/leaflet.css";
import { useImperativeHandle, forwardRef, useState } from 'react';
import { LatLng, LatLngBounds, CRS, Icon, icon } from 'leaflet';
import { ImageOverlay, MapContainer, Marker, Popup, useMapEvents } from "react-leaflet";
import { Seat } from "../Seat";

const LeafletInSeatMap = ({ makeReservation }, ref) => {
    const [floorMapImage, setFloorMapImage] = useState("/seat.png");
    const [seats, setSeats] = useState([]);

    // leafletの中心座標
    const defaultCenterLatLng = new LatLng(339, 640);
    const [centerLatLng, setCenterLatLng] = useState(defaultCenterLatLng);
    // leafletの描画サイズ
    const defaultBounds = new LatLngBounds([0, 0], [339, 640]);
    const [bounds, setBounds] = useState(defaultBounds);

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
        setFloorMapImage: (floorMapImage) => setFloorMapImage(floorMapImage),
        setSeats: (seats) => {
            setSeats(seats)
        }
    }));

    return (
        <MapContainer
            crs={CRS.Simple}
            center={centerLatLng}
            zoom={0.1}
            maxZoom={1}
            scrollWheelZoom={true}
            style={{ maxHeight: "calc(100vh - 64px)" }}
        >
            <ImageOverlay
                url={floorMapImage}
                bounds={bounds}
                zIndex={10}
            />
            {
                seats.map(seat => <Seat key={seat.id} bounds={seat.bounds} user={seat.user} makeReservation={() => makeReservation(seat.id)} />)
            }
            {/* <Debugger /> */}
        </MapContainer>
    )
}

export default forwardRef(LeafletInSeatMap);