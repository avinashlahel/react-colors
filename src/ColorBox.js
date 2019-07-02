import React, {Component} from 'react';
import CopyToClipboard from "react-copy-to-clipboard";
import {Link} from 'react-router-dom';
import styles from './styles/ColorBoxStyles';
import {withStyles} from "@material-ui/styles";


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

        return (
            <CopyToClipboard text={background} onCopy={this.handleCopy}>
                <div style={{background}} className={classes.ColorBox}>
                    <div style={{background}} className={`${classes.copyOverlay} ${copied && classes.showOverlay}`}/>
                    <div className={`${classes.copyMsg } ${copied && classes.showCopyMessage}`}>
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