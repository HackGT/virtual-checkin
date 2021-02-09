import React from 'react';
import ReactDOM from 'react-dom';
import { configure } from 'mobx';
import SampleApp from "./views/SampleApp";
import Managers from './stores/Managers';

configure({ enforceActions: "observed" });

function renderApp() {
    let managers = new Managers();

    ReactDOM.render( <SampleApp managers={ managers }></SampleApp>, document.getElementById("root"));
}

renderApp()