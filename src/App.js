import React, {Component} from 'react';
import './App.css';
import Palette from "./Palette";
import seedColors from "./seedColors"
import {generatePallete} from "./colorHelpers";
import {Route, Switch} from 'react-router-dom';
import PaletteList from "./PaletteList"

class App extends Component {

    findPalette(id) {
        return seedColors.find((palette) => {
            return palette.id === id;
        });
    }

    render() {

        return (
            <Switch>
                <Route path="/" exact render={(routeProps) => <PaletteList palettes={seedColors} {...routeProps}/>}/>
                <Route path="/palette/:id" exact
                       render={(routeParams) => <Palette
                           palette={generatePallete(this.findPalette(routeParams.match.params.id))}/>}/>
            </Switch>
        )
    }
}

export default App;
