import React, {Component} from 'react';
import './ColorBox.css'
import CopyToClipboard from "react-copy-to-clipboard";
import {Link} from 'react-router-dom';
import chroma from 'chroma-js';
import {withStyles} from "@material-ui/styles";

const styles = {
    ColorBox: {
        width: "20%",
        height: props => props.showingFullPalette ? "25%" : "50%",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-3.5px",
        "&:hover button": {
            opacity: 1
        }
    },
    copyColor: {
        color: props => chroma(props.background).luminance() < 0.08 ? "white" : "black"
    },
    seeMore: {
        background: "rgba(255, 255, 255, 0.3)",
        position: "absolute",
        right: "0",
        bottom: "0",
        fontSize: "12px",
        textTransform: "uppercase",
        border: "none",
        color: props => chroma(props.background).luminance() > 0.6 ? "black" : "white",
        width: "60px",
        height: "30px",
        textAlign: "center",
        lineHeight: "30px"
    },
    colorName: {
        color: props => chroma(props.background).luminance() < 0.08 ? "white" : "black"
    },
    copyButton: {
        position: "absolute",
        width: "100px",
        height: "30px",
        top: "50%",
        left: "50%",
        marginLeft: "-50px",
        marginTop: "-15px",
        cursor: "pointer",
        color: props => chroma(props.background).luminance() > 0.6 ? "black" : "white",
        outline: "none",
        background: "rgba(255, 255, 255, 0.3)",
        border: "none",
        textTransform: "uppercase",
        opacity: 0
    },
    boxContent: {
        position: "absolute",
        left: "0",
        bottom: "0",
        padding: "10px",
        width: "100%",
        color: "black",
        fontSize: "12px"
    },
    copyOverlay: {
        opacity: "0",
        width: "100%",
        height: "100%",
        zIndex: "0",
        transform: "scale(0.5)",
        transition: "transform 0.6s ease-in-out"
    },
    showOverlay: {
        opacity: "1",
        transform: "scale(50)",
        zIndex: "10",
        position: "absolute",
    },
    copyMsg: {
        position: "fixed",
        top: "0",
        bottom: "0",
        left: "0",
        right: "0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity: "0",
        color: "white",
        transform: "scale(0)",
        fontSize: "2rem",
        "& h1":{
            fontWeight: "400",
            textShadow: "2px 2px black",
            background: "rgba(255, 255, 255, 0.2)",
            width: "100%",
            textAlign: "center",
            padding: "1rem",
            marginBottom: "0",
        },
        "& p":{
            fontWeight: "100",
            fontSize: "2rem"
        }
    },
    showCopyMessage: {
        opacity: "1",
        transitionDelay: "0.3s",
        zIndex: "25",
        transform: "scale(1)",
        transition: "all 0.4s ease-in-out",
    }

};


class ColorBox extends Component {
    constructor(props) {
        super(props);
        this.state = {copied: false};
        this.handleCopy = this.handleCopy.bind(this);
    }

    handleCopy() {
        this.setState({copied: true}, () => {
            setTimeout(() => {
                this.setState({copied: false})
            }, 1500);
        })
    }

    render() {
        const {name, background, paletteId, id, showingFullPalette, classes} = this.props;
        const {copied} = this.state;
        // const isDarker = chroma(background).luminance() < 0.08;
        // const isLighter = chroma(background).luminance() > 0.6;

        return (
            <CopyToClipboard text={background} onCopy={this.handleCopy}>
                <div style={{background}} className={classes.ColorBox}>
                    <div style={{background}} className={`${classes.copyOverlay} ${copied && classes.showOverlay}`}/>
                    <div className={`${classes.copyMsg } ${copied && classes.showCopyMessage}`}>
                    {/*<div className={`copy-msg ${copied && 'show'}`}>*/}
                        <h1>Copied!</h1>
                        <p className={classes.copyColor}>{background}</p>
                    </div>
                    <div className="box-container">
                        <div className={classes.boxContent}>
                            <span className={classes.colorName}>{name}</span>
                        </div>
                        <button className={classes.copyButton}>
                            Copy
                        </button>
                        {showingFullPalette &&
                        <Link to={`/palette/${paletteId}/${id}`} onClick={e => e.stopPropagation()}>
                            <span className={classes.seeMore}>More</span>
                        </Link>
                        }
                    </div>
                </div>
            </CopyToClipboard>
        );
    }
}

export default withStyles(styles)(ColorBox);