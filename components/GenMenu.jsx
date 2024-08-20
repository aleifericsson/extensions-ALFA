import '../styles/Popup.css'

export default function GenMenu({props}){ //props: {startx, starty}
    return(
        <div className="popup" style={{left:props.startx,top:props.starty}}>
            GenMenu
        </div>
    )
}