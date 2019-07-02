import React, {Component} from 'react';
import ColorBox from "./ColorBox";
import './Pallete.css';
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter"
import {withStyles} from "@material-ui/styles";

const styles = {
    Pallete : {
        height: "100vh"
    },
    PalleteColors: {
        height: "90%"
    },
    PaletteFooter: {
        height: "4vh",
        background: "white",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        fontWeight: "bold"
    },
    emoji: {
        margin: "0 1rem",
        fontSize: "1.5rem",
    }

}

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
        let {palette,classes} = this.props;
        let {level, format} = this.state;
        let colorBox = palette.colors[level]
            .map(color => <ColorBox
                background={color[format]}
                name={color.name}
                key={color.id}
                id={color.id}
                paletteId={palette.id}
                showingFullPalette={true}/>);

        return (
            <div>
                <div className={classes.Pallete}>
                    <Navbar level={level}
                            handleChange={this.handleChange}
                            handleSelectChange={this.handleSelectChange}
                            showSlider={true}/>
                    <div className={classes.PalleteColors}>{colorBox}</div>
                    <PaletteFooter palette={this.props.palette} classes={classes}/>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Palette);