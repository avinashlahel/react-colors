import React, {Component} from 'react';
import ColorBox from "./ColorBox";
import './Pallete.css';
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter"

class Palette extends Component {

    constructor(props) {
        super(props);
        this.state = {level: 500, format: 'hex'};
        this.handleChange = this.handleChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
    }

    handleChange(level) {
        this.setState({level});
    }

    handleSelectChange(val) {
        this.setState({format: val});
    }

    render() {
        let {palette} = this.props;
        let {level, format} = this.state;
        let colorBox = palette.colors[level]
            .map(color => <ColorBox
                background={color[format]}
                name={color.name}
                key={color.id}
                id={color.id}
                paletteId={palette.id}
                showLink={true}/>);

        return (
            <div>
                <div className="Pallete">
                    <Navbar level={level}
                            handleChange={this.handleChange}
                            handleSelectChange={this.handleSelectChange}
                            showSlider={true}/>
                    <div className="Pallete-colors">{colorBox}</div>
                    <PaletteFooter palette={this.props.palette} />
                </div>
            </div>
        );
    }
}

export default Palette;