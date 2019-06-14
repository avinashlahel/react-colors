import React, {Component} from 'react';
import ColorBox from "./ColorBox";
import './Pallete.css';
import Navbar from "./Navbar";

class Palette extends Component {

    constructor(props){
        super(props);
        this.state = {level: 500};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(level){
        this.setState({level});
    }

    render() {
        let {palette} = this.props;
        let {level} = this.state;
        let colorBox = palette.colors[level].map(color => <ColorBox background={color.hex} name={color.name}/>);

        return (
            <div>
                <div className="Pallete">
                    <Navbar level={level} handleChange={this.handleChange}/>
                    <div className="Pallete-colors">{colorBox}</div>
                    {/*Footer goes here*/}
                </div>
            </div>
        );
    }
}

export default Palette;