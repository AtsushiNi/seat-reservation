import { ImageOverlay, Rectangle, Tooltip } from "react-leaflet";

export const Seat = ({ bounds, user, onClick }) => {
    const boundsArray = [bounds.start, bounds.end];

    const eventHandlers = {
        click: () => {
            console.log("click")
        }
    }
    return (
        user
            ? (
                <>
                    <Rectangle
                        bounds={boundsArray}
                        color="gray"
                        stroke={false}
                        eventHandlers={eventHandlers}
                    >
                        <Tooltip tooltipDirection="auto">{user.name}</Tooltip>
                    </Rectangle>
                    <ImageOverlay url="/person_icon.svg" bounds={boundsArray} zIndex={10} />
                </>
            )
            :
            <Rectangle
                bounds={boundsArray}
                pathOptions={{ fill: false, color: "gray" , weight: 2 }}
                eventHandlers={eventHandlers}
            />
    )
}