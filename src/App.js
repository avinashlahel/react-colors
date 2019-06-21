import React, {Component} from 'react';
import './App.css';
import Palette from "./Palette";
import seedColors from "./seedColors"
import {generatePallete} from "./colorHelpers";
import {Route, Switch} from 'react-router-dom';
import PaletteList from "./PaletteList"
import SingleColorPalette from './SingleColorPalette'

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

                <Route path="/palette/:paletteId/:colorId" exact
                       render={(routeParams) => <SingleColorPalette
                           palette={generatePallete(this.findPalette(routeParams.match.params.paletteId))}
                       colorId={routeParams.match.params.colorId}/>}/>
            </Switch>
        )
    }
}

export default App;
