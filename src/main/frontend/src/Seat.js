import { ImageOverlay, Rectangle } from "react-leaflet";

export const Seat = ({ bounds, isReserved, onClick }) => {
    const boundsArray = [bounds.start, bounds.end];

    const eventHandlers = {
        click: () => {
            console.log("click")
        }
    }
    return (
        <>
        <Rectangle
            bounds={boundsArray}
            color="gray"
            eventHandlers={eventHandlers}
        />
        {isReserved && <ImageOverlay url="/person_icon.svg" bounds={boundsArray} zIndex={10}/>}
        </>
    )
}