import React, {Component} from 'react';
import './ColorBox.css'
import CopyToClipboard from "react-copy-to-clipboard";
import {Link} from 'react-router-dom';


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

        return (
            <CopyToClipboard text={background} onCopy={this.handleCopy}>
                <div style={{background}} className="ColorBox">
                    <div style={{background}} className={`copy-overlay ${copied && 'show'}`}/>
                    <div className={`copy-msg ${copied && 'show'}`}>
                        <h1>Copied!</h1>
                        <p>{background}</p>
                    </div>
                    <div className="box-container">
                        <span className="box-content">{name}</span>
                        <button className="copy-button">Copy</button>
                        {showLink &&
                        <Link to={`/palette/${paletteId}/${id}`} onClick={e => e.stopPropagation()}>
                            <span className="see-more">More</span>
                        </Link>
                        }
                    </div>
                </div>
            </CopyToClipboard>
        );
    }
}

export default ColorBox;