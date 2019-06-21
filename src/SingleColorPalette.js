import React, {Component} from 'react';
import ColorBox from './ColorBox'

class SingleColorPalette extends Component {

    constructor(props) {
        super(props);
        this._shades = this.generateShades(this.props.palette, this.props.colorId)
    }

    generateShades(palette, toFilterBy) {
        let colors = palette.colors;
        let shades = [];
        for (let key in colors) {
            shades = shades.concat(colors[key].filter(color => color.id === toFilterBy))
        }
        return shades.slice(1);
    }

    render() {
        const colors =
            this._shades.map(color =>
                <ColorBox
                    background={color.hex}
                    name={color.name}
                    key={color.id}
                    showLink={false}/>
            )

        return (
            <div className="Pallete">
                <h1>From Single Color Palette</h1>
                <div className="Pallete-colors">
                    {colors}
                </div>
            </div>
        );
    }
}

export default SingleColorPalette;