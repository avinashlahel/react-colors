import React, {Component} from 'react';
import ColorBox from './ColorBox'
import Navbar from './Navbar'
import PaletteFooter from "./PaletteFooter"
import {Link} from 'react-router-dom'

class SingleColorPalette extends Component {

    constructor(props) {
        super(props);
        this._shades = this.generateShades(this.props.palette, this.props.colorId);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.state = {format: 'hex'}
    }

    generateShades(palette, toFilterBy) {
        let colors = palette.colors;
        let shades = [];
        for (let key in colors) {
            shades = shades.concat(colors[key].filter(color => color.id === toFilterBy))
        }
        return shades.slice(1);
    }

    handleSelectChange(val) {
        this.setState({format: val});
    }

    render() {
        const {format} = this.state;
        const colors =
            this._shades.map(color => <ColorBox background={color[format]}
                                                name={color.name}
                                                key={color.name}
                                                showLink={false}/>
            );

        return (
            <div className="SingleColorPalette Pallete">
                <Navbar handleSelectChange={this.handleSelectChange}
                        showSlider={false}/>
                <div className="Pallete-colors">
                    {colors}
                    <div className='go-back ColorBox'>
                        <Link to={`/palette/${this.props.palette.id}`} >
                            <button className='back-button'>Go Back</button>
                        </Link>
                    </div>
                </div>
                <PaletteFooter palette={this.props.palette}/>
            </div>
        );
    }
}

export default SingleColorPalette;