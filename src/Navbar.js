import React, {Component} from 'react';
import Slider from "rc-slider";
import Select from "@material-ui/core/Select"
import Snackbar from "@material-ui/core/Snackbar"
import MenuItem from "@material-ui/core/MenuItem"
import {IconButton} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import 'rc-slider/assets/index.css'
import "./Navbar.css"

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {format: 'hex', open: false};
        this.handleFormatChange = this.handleFormatChange.bind(this);
        this.closeSnackbar = this.closeSnackbar.bind(this);
    }

    handleFormatChange(event) {
        this.setState({format: event.target.value, open: true});
        this.props.handleSelectChange(event.target.value);
    }

    closeSnackbar() {
        this.setState({open: false});
    }

    render() {
        const {level, handleChange} = this.props;
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
                    <Select value={this.state.format} onChange={this.handleFormatChange}>
                        <MenuItem value={"hex"}>hex - #ffffff</MenuItem>
                        <MenuItem value={"rgb"}>rgb - rgb(255,255,255)</MenuItem>
                        <MenuItem value={"rgba"}>rgba - rgba(255,255,255,1.0)</MenuItem>
                    </Select>
                </div>
                <Snackbar
                    anchorOrigin={{vertical: "bottom", horizontal: "left"}}
                    open={this.state.open}
                    autoHideDuration={2500}
                    message={<span id="message-id">Format Changed</span>}
                    ContentProps={{
                        "aria-describedby": "message-id"
                    }}
                    onClose={this.closeSnackbar}
                    action={[
                        <IconButton onClick={this.closeSnackbar}
                                    color="inherit"
                                    key="close"
                                    aria-label="close">
                            <CloseIcon/>
                        </IconButton>
                    ]}
                />
            </header>
        );
    }
}

export default Navbar;