import React, {Component} from 'react';
import Slider from "rc-slider";
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import 'rc-slider/assets/index.css'
import "./Navbar.css"

class Navbar extends Component {

    constructor(props){
        super(props);
        this.state = {format: 'hex'};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({format: event.target.value});
        this.props.handleSelectChange(event.target.value);
    }

    render() {
        const {level,handleChange} = this.props;
        return (
            <header className="Navbar">
                <div className="logo">
                    <a href="/">colorpicker</a>
                </div>
                <div className="slider-container">
                    <span>Level: {level}</span>
                </div>
                <div className="slider">
                    <Slider
                        defaultValue={level}
                        min={100}
                        max={900}
                        step={100}
                        onAfterChange={handleChange}
                    />
                </div>
                <div className="select-container">
                    <Select value={this.state.format} onChange={this.handleChange}>
                        <MenuItem value={"hex"}>hex - #ffffff</MenuItem>
                        <MenuItem value={"rgb"}>rgb - rgb(255,255,255)</MenuItem>
                        <MenuItem value={"rgba"}>rgba - rgba(255,255,255,1.0)</MenuItem>
                    </Select>
                </div>
            </header>
        );
    }
}

export default Navbar;