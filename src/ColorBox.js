import React, {Component} from 'react';
import './ColorBox.css'
import CopyToClipboard from "react-copy-to-clipboard";
import {Link} from 'react-router-dom';
import chroma from 'chroma-js';


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
        const {name, background, paletteId, id, showLink} = this.props;
        const {copied} = this.state;

        const isDarker = chroma(background).luminance() < 0.08;
        const isLighter = chroma(background).luminance() > 0.6;

        return (
            <CopyToClipboard text={background} onCopy={this.handleCopy}>
                <div style={{background}} className="ColorBox">
                    <div style={{background}} className={`copy-overlay ${copied && 'show'}`}/>
                    <div className={`copy-msg ${copied && 'show'}`}>
                        <h1>Copied!</h1>
                        <p className={isLighter && 'dark-text'}>{background}</p>
                    </div>
                    <div className="box-container">
                        <span className={`box-content ${isDarker && 'light-text'}`}>{name}</span>
                        <button className={`copy-button ${isLighter && 'dark-text'}`}>Copy</button>
                        {showLink &&
                        <Link to={`/palette/${paletteId}/${id}`} onClick={e => e.stopPropagation()}>
                            <span className={`see-more ${isLighter && 'dark-text'}`}>More</span>
                        </Link>
                        }
                    </div>
                </div>
            </CopyToClipboard>
        );
    }
}

export default ColorBox;