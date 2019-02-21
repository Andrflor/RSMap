import React, {Component} from 'react'
import MapMarker from "./MapMarker";
import {Icons, rewriteIcons} from "../classes/Icons";
import {IconBaseClass} from "../classes/IconBaseClass";

//Marker types needed:
/*
    - Click to go to places, i.e. click boat transport to see other side
    - Click to swap layer, to see dungeons
    - Static broken up into categories
        - Spell book teleports
            - Regular
            - Lunar
            - Arceus
            - Ancients
        - Jewlery Teleports
        - Skill Capes
        - Fairy Rings
        - Scrolls
        - Tele Tabs
        - Spirit Trees
        - Minigame teleports
        - Diary Gear
        - Air Balloon
        - Hnome glider
   - clue scroll dig point, needs to be dynamic and move based on input, url params?
 */
export default class MapMarkers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            icons: rewriteIcons()
        }

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props !== prevProps) {
            IconBaseClass.setZoomLevel(this.props.zoomLevel);
            this.setState({icons: rewriteIcons()});
        }
    }

    render() {
        return (
            <>
                {this.state.icons.map(function (icon, i) {
                    return <MapMarker key={i} position={icon.options.position} icon={icon}
                                      title={icon.options.title}/>
                })}
            </>
        )
    }
}