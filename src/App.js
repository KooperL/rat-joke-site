import Navbar from './Navbar';
import Home from './Home'

/*
function App() {
    const title = 'this is a title';
    const likes = 50;
    return (
    <div className="App">
        <Navbar />
        <div className="content">
            <h1>{title}</h1>
            <Home />
            <p>Liked {likes} times</p>
        </div>
    </div>
  );
}

export default App;
*/

import * as React from "react";
import * as ReactDOM from "react-dom";
import { Surface } from "@progress/kendo-drawing";
import { drawScene } from "./draw-scene";

class App extends React.Component {
  surface;
  componentDidMount() {
    drawScene(this.createSurface());
  }
  createSurface = () => {
    const element = ReactDOM.findDOMNode(this);
    this.surface = Surface.create(element);
    return this.surface;
  };
  render() {
    return <div id="surface" />;
  }
}
export default App;
// ReactDOM.render(<App />, document.querySelector("my-app"));

