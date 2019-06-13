import React, {Component} from 'react';
import './Pallete.css';
import ColorBox from "./ColorBox";

class Palette extends Component {
    render() {
        let colorBox = this.props.colors.map(color => <ColorBox background={color.color} name={color.name}/>);

        return (
            <div>
                <div className="Pallete">
                    {/*Navbar goes here*/}
                    <div className="Pallete-colors">{colorBox}</div>
                    {/*Footer goes here*/}
                </div>
            </div>
        );
    }
}

export default Palette;